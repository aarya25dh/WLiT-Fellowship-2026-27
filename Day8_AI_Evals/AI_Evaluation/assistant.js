//import dependencies
import 'dotenv/config';
import {GoogleGenAI} from '@google/genai';

//Initialize the Google GenAI API client
export const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

//specify the model
export const model = 'gemini-3.1-flash-lite';

//Define system instructions for the model
export const systemInstructions = `
- Explain the instructions clearly and concisely.
- Use simple language.
- Do not invent facts, statistics, or references.
- If unsure, say so.
- Politely correct false premises.
- Ask for clarification when information is missing.
- Do not present guesses as a fact.
You are a substitute for a qualified professional advice.`;