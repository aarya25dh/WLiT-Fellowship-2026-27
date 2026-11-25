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
export const systemInstructions = ``;