import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { doc, getDoc, collection, getDocs, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";


const MAX_RETRIES = 5; // Maximum number of retries to fetch user data
const RETRY_DELAY = 1000; // Delay between retries in milliseconds

/**
 * Custom hook that manages the user's subscription data.
 * @returns {Object} - Returns the user's data, loading state, error state
 */
export const useSubscription = () => {
	const { userId } = useAuth(); // Get the authenticated user's ID from Clerk
	const [userData, setUserData] = useState(null); // State to store the user's data
	const [loading, setLoading] = useState(true); // State to manage the loading indicator
	const [error, setError] = useState(null); // State to store any errors that occur
	const [retryCount, setRetryCount] = useState(0); // State to keep track of the retry attempts

	/**  Fetches the user's data from Firebase and Retries fetching data up to MAX_RETRIES if the data is not found. */
	const fetchUserData = async () => {
		if (!userId) return; // If there's no user ID, exit the function

        // error handling
		try {
			setLoading(true); // Set loading state to true while fetching data

			// Referencing the user's document in the Firestore database
			const userDocRef = doc(db, `users/${userId}`);
			
			const userDoc = await getDoc(userDocRef); // Fetch the user's document

			if (userDoc.exists()) {
				const user = userDoc.data(); // If the document exists, retrieve the user data

				// referencing to the user's flashcards collection in Firestore
				const flashcardsCollectionRef = collection(
					db,
					`users/${userId}/flashcards`
				);
				// fetching all flashcards in the user's collection
				const flashcardsSnapshot = await getDocs(flashcardsCollectionRef);

				// mapping the flashcards snapshot to an array of flashcards
				const flashcards = flashcardsSnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				//updating the state
				setUserData({ ...user, flashcards });
			} else {
				// If the document does not exist, retry fetching up to MAX_RETRIES
				if (retryCount < MAX_RETRIES) {
					setRetryCount((prev) => prev + 1); // Increment the retry count
					setTimeout(fetchUserData, RETRY_DELAY); // Retry after a delay
				} else {
					console.log("No such document!"); //  if no document is found
					setUserData(null); 
					setError("User data not found"); //  error message
				}
			}
		} catch (e) {
			// for errors that can occur during data fetching
			console.error("Error getting user data:", e);
			setError("Error getting user data"); 
		} finally {
			setLoading(false); // when data fetching is complete
		}
	};

	// useEffect hook to trigger the fetchUserData function whenever the userId or retryCount changes
	useEffect(() => {
		fetchUserData();
	}, [userId, retryCount]);

	/**
	 * Adds a new flashcard to the user's collection in Firebase.
	 * After adding, it refreshes the user data to include the new flashcard.
	 * @param {Flashcard} newFlashcard - The new flashcard object to be added
	 */
	const addFlashcard = async (newFlashcard) => {
		if (!userId) return; // Exit if there's no user ID

		try {
			// Add the new flashcard document to the user's flashcards collection in Firestore
			await setDoc(
				doc(db, `users/${userId}/flashcards`, newFlashcard.id),
				newFlashcard
			);
			// Refresh the user data to include the new flashcard
			await fetchUserData();
		} catch (e) {
			// Catch and log any errors that occur during flashcard addition
			console.error("Error adding flashcard:", e);
			throw new Error("Failed to add flashcard"); // Throw an error if the addition fails
		}
	};

	// Return the user data, loading state, error state, and the addFlashcard function
	return { userData, loading, error, addFlashcard, fetchUserData };
};
