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

const follow_up_request = [
    "What Color is it?"
];

async function main(){
    const history = []; //the whole conversation history, starts empty
    history.push({role:'user', parts:prompt});
    const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash-lite',
        contents: history
    });
    console.log(response.text);
    history.push({role:'model', parts:[{text:'response.text'}]});
    for (const follow_up of follow_up_request){
        history.push({role:'user', parts: [{text: follow_up}]});
        const response2 = await ai.models.generateContent({
        model:'gemini-3.5-flash-lite',
        contents: history,
    });
        console.log(response2.text);
        history.push({role:'model', parts:[{text: response2.text}]});
    }
}
main();