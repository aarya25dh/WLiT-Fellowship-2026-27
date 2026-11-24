import 'dotenv/config';
import { GoogleGenAI, Type } from '@google/genai';
import fs from 'fs';

//defining all variables to clean the code
const numberOfquestions = 5;
const difficulty = 'Hard';
const imagePath = '/Users/aaryadhungana/Documents/Github Projects/WLiT Fellowship/Day7_AI_LLM/AI_Quiz_Generator/images/bones.jpg';
const imageData = fs.readFileSync(imagePath).toString('base64');
const prompt = [
    {text:`Attached is an image of a note. Generate ${numberOfquestions} ${difficulty} questions on the image content.`},
    {inlineData: {mimeType:'image/jpg', data:imageData}}
]
const resSchema = {
                type: 'OBJECT',
                properties: {
                    questions: {
                        type: 'ARRAY',
                        items: {
                            type: 'OBJECT',
                            properties: {
                                question: {
                                    type: 'STRING'
                                },
                                options: {
                                    type: 'ARRAY',
                                    items: {
                                        type: 'STRING'
                                    }
                                },
                                correct_answer: {
                                    type: 'STRING'
                                },
                                difficulty:
                                {
                                    type: 'STRING'

                                }
                            },
                            required: [
                                'question',
                                'options',
                                'correct_answer',
                                'difficulty'
                            ]
                        }
                    }
                },
                required: ['questions']
            }
const configuration = {
            // System instruction
            systemInstruction:`
                You are an educational quiz generator that generates quizzes from the notes provided.
                Create multiple-choice questions with four options.
                Include exactly one correct answer.
                Be creative.
                Base every question only on the provided notes.
                Include the difficulty level for each question.
            `,
            // Generation settings
            temperature: 0.2,

            // Request JSON output
            responseMimeType: 'application/json',   
            
            // Define the expected JSON structure
            responseSchema: resSchema
        }

// 1. Initialize Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

// 2. Make API request
async function main() {
    const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',

        contents: prompt,

        config: configuration,
    });

// 3. Display Gemini's response
const quiz = JSON.parse(response.text);
quiz.questions.forEach((q, index) => {
        console.log(`\nQuestion ${index + 1}: ${q.question}`);

        q.options.forEach((option, i) => {
            console.log(`${String.fromCharCode(65 + i)}. ${option}`);
        });

        console.log(`Correct Answer: ${q.correct_answer}`);
        console.log(`Difficulty: ${q.difficulty}`);
    });
}

// Run the function
main();