async function deleteTask(id, event){
    event.stopPropagation(); // Don't toggle completion 
try {
    const res = await fetch('${API_URL}/${id}', {
        method: "DELETE"
});
if (!res.ok) throw new Error("Delete failed");
tasks = tasks.filter(t => t.id === id);
renderTasks();
console.log('Deleted task #${id}');
}catch (err) {
statusMsg.textContent = "Could not delete task.";
}
}
