//Import the configuration we export from assistant.js
import {ai, model, systemInstructions} from './assistant.js';

//Make API Request
async function main(){
    const response = await ai.models.generateContent({
        model: model,
        contents:'What was the percentage of democratic votes in the 2024 US presidential election?',
        config:{
            systemInstructions: systemInstructions,
            responseMimeType: 'application/json',
            responseSchema: {
                type: 'object',
                properties: {
                    question:{
                        type: 'string',
                    },
                    answer:{
                        type: 'string',
                    }
                },
                required: ['question', 'answer']
            }
        }
    });

//Parse Gemini's JSON response
const result = JSON.parse(response.text);

//Display the response
console.log('\nQuestion:', result.question);
console.log('\nAnswer:', result.answer);
}

//Run the main function to execute the API request
main();
