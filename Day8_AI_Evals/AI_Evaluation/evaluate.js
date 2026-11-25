//Import the configuration we export from assistant.js
import {ai, model, systemInstructions} from './assistant.js';

//Define test cases
const testCases = [
    {
        question: 'Who is the Prime Minister of India?',
        expected: 'Narendra Modi'
    },
    {
        question: 'What is the study of birds?',
        expected: 'Ornithology'
    },
    {
        question: 'What is the height of Mount Everest?',
        expected: '8,848 meters'
    }
];

//Evaluate the assistant
async function evaluateAssistant(question){
    const response = await ai.models.generateContent({
        model: model,
        contents: question,
        config:{
            systemInstruction: systemInstructions,
        },
    });
    return response.text;
}

//Run evaluation tests
async function runTests(){
    //initialize a counter called passed to keep track of how many tests the assistant passes.
    let passed = 0;
    //Iterate through each test case
    for (const test of testCases){
        const response = await evaluateAssistant(test.question);

        const ok = response.toLowerCase().includes(test.expected.toLowerCase());

        console.log('\n Question:', test.question);
        console.log('Response:', response);
        console.log('Result:', ok ? 'PASS' : 'FAIL');

        if(ok)passed++;
    }

    //Calculate the pass rate
    console.log('\n*****************************************')
    console.log(`Passed: ${passed}/${testCases.length}`);
    console.log(`Pass Rate: ${passed/testCases.length} * 100}%`);
}

//Run the tests
runTests();