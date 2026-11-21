// Exercise 3
async function getEmails() {
const r = await fetch(
"https://jsonplaceholder.typicode.com/posts/1/comments"
);
const list = await r.json();
console. log(list.map(c => c.email));
}
getEmails(); 

// Exercise 4
const raw = '[{"id": 1, "done": false}, {"id": 2, "done": true}]';
const arr = JSON.parse(raw);
const pending = arr.filter(t => !t.done); 
console.log(JSON.stringify(pending));

