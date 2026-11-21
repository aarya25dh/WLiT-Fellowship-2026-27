// Simulating fetching a user from a server
function fetchUserFromServer(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: "Aarya"
            });
        }, 1000);
    });
}

// Simulating fetching tasks for a user
function fetchTasksForUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { title: "Complete JavaScript assignment" },
                { title: "Learn Node.js" },
                { title: "Practice async/await" }
            ]);
        }, 1000);
    });
}

// Fixing all bugs
async function displayUserTask() { // Fix 1: Added async
    try { // Fix 3: Added try/catch
        const user = await fetchUserFromServer(1);
        const tasks = await fetchTasksForUser(user.id);  //Fix 2 : Added await in tasks

        console.log("First task:", tasks[0].title);

    } catch (err) {
        console.error("Could not load task:", err);
    }
}

displayUserTask();
