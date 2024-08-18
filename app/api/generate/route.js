import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 9 flashcards.
Both front and back should be one sentence long.
Tailor the difficulty level of the flashcards to the user's specified.
Use simple language to make the flashcards accessible to a wide range of users.
If given a body of text, extract the most important and relevant information for the flashcards.
If it is something you cannot understand then return exatly one flashcard in the following JSON format:
{
  "flashcards":[
    {
      "front": "Your input cannot produce flashcards.",
      "back": "Please try again with a different input."
    }
  ]
}
Or else you should return exactly 9 flashcards unless specified explicilty in the following JSON format:
{
  "flashcards":[
    {
      "front": str,
      "back": str
    }
  ]
}`

export async function POST(req) {
  const openai = new OpenAI()
  const data = await req.text()

  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: data },
    ],
    model: 'gpt-4o',
    response_format: { type: 'json_object' },
  })

  // Parse the JSON response from the OpenAI API
  const flashcards = JSON.parse(completion.choices[0].message.content)

  // Return the flashcards as a JSON response
  return NextResponse.json(flashcards.flashcards)
}