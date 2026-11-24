import 'dotenv/config';
import { GoogleGenAI, Type } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const imagePath = '/Users/aaryadhungana/Documents/Github Projects/WLiT Fellowship/Day7_AI_LLM/AI_Quiz_Generator/images/minions.jpg';

const imageData = fs.readFileSync(imagePath).toString('base64');

const prompt = [
    {text:'Describe this image in detail.'},
    {inlineData: {mimeType:'image/jpg', data:imageData}}
]

async function main(){
    const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt
    });
    console.log(response.text);
}
main();