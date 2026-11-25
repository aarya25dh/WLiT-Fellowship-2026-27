import 'dotenv/config';
import { GoogleGenAI, Type } from '@google/genai';
import fs from 'fs';

//defining all variables to clean the code
const numberOfquestions = 5;
const difficulty = 'Moderate';
const imagePath = '/Users/aaryadhungana/Documents/Github Projects/WLiT Fellowship/Day7_AI_LLM/AI_Quiz_Generator/images/bones.jpg';
const imageData = fs.readFileSync(imagePath).toString('base64');
const prompt = [
    {text:`Attached is an image of a note. Generate ${numberOfquestions} ${difficulty} questions on the image content.`},
    {inlineData: {mimeType:'image/jpg', data:imageData}}
]
const follow_up_request = [
    "Make the question more challenging.",
    "Make the question easier."
];
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
                Base every question only on the provided notes.
                Include the difficulty level for each question.
            `,
            // Generation settings
            temperature: 0.4,

            // Request JSON output
            responseMimeType: 'application/json',   
            
            // Define the expected JSON structure
            responseSchema: resSchema
        }

//Initialize Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

//Make API request
async function main() {
    //Initialize conversation history
    const history = []; //the whole conversation history, starts empty

    //Send the initial quiz generation prompt
    history.push({
        role: 'user',
        parts: prompt
    });
    const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash-lite',
        contents: history,
        config: configuration
    });

    //Display initial response
    console.log(response.text);
    
    //Store Gemini's response in conversation history
    history.push({
        role: 'model',
        parts: [{ text: response.text }]
    });

    //Parse the quiz response
    const quiz = JSON.parse(response.text);

    //Display the generated quiz
    quiz.questions.forEach((q, index) => {
        console.log(`\nQuestion ${index + 1}: ${q.question}`);
        q.options.forEach((option, i) => {
            console.log(`${String.fromCharCode(65 + i)}. ${option}`);
        });
        console.log(`Correct Answer: ${q.correct_answer}`);
        console.log(`Difficulty: ${q.difficulty}`);
    });

    //Handle follow-up questions
    for (const follow_up of follow_up_request) {
        history.push({
            role: 'user',
            parts: [{ text: follow_up }]
        });
        const response2 = await ai.models.generateContent({
            model: 'gemini-3.5-flash-lite',
            contents: history,
            config: {
                systemInstruction:`
                You are an educational quiz assistant.
                Help users modify, improve and understand the generated quiz.
                Follow their instructions while maintaining accuracy based on the provided notes.
                Respond in a clear, conversational format.`,
                temperature: 0.4
            }
        });
        console.log("\nFollow-up:", response2.text);
        
        //Add Gemini's follow-up response to history
        history.push({
            role: 'model',
            parts: [{ text: response2.text }]
        });
    }
}

// Run the function
main();