const API_URL = "http://localhost:3000/api/feedback";

const form = document.getElementById("feedback-form");
const nameInput = document.getElementById("user-name");
const messageInput = document.getElementById("user-message");
const listEl = document.getElementById("feedback-list");
const errorBox = document.getElementById("error-box");
const submitBtn = document.getElementById("submit-btn");

// 1. READ: Fetch all feedback from Express
async function fetchFeedback() {
  showError(null); // Clear any previous error messages
  try {
    // TODO 1: Use fetch(API_URL), check response.ok, parse JSON, and pass data to renderFeedback(data)
    // Step 2: Send HTTP GET request with query parameter (?_limit=6)
    const response = await fetch(API_URL);
    
    // CRITICAL: fetch() does NOT throw on 404/500 errors, so we check response.ok manually!
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    // Step 3: Parse raw JSON text body into a JavaScript array
    const data = await response.json();

    // Step 5: Draw the tasks onto the webpage
    renderFeedback(data);
  } catch (err) {
    // Runs if Wi-Fi drops OR if we threw an error above
    showError(err.message);
  } 
}

// 2. CREATE: Send new feedback to Express
async function submitFeedback(e) {
  e.preventDefault();  // Stop the HTML form from refreshing the entire browser page!
  showError(null);

   // Read and clean user input values
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  submitBtn.disabled = true;
  submitBtn.textContent = "Posting...";
  try {
    // TODO 2: Send a POST request to API_URL with JSON headers and body: { name, message }
    // If !response.ok, read the error JSON from the server and throw new Error(errData.error)
    // On success: call form.reset() and fetchFeedback() to refresh the list!
    // Send HTTP POST request with JSON headers and stringified body
    const response = await fetch(API_URL, {
      method: "POST", // Verb: Create new resource
      headers: { "Content-Type": "application/json" },  // Envelope label: Sending JSON text
      body: JSON.stringify({ name, message }) // Pack JS object -> JSON string
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error);
    }

    form.reset(); // Clear input boxes
    await fetchFeedback();
  } catch (err) {
    showError(err.message);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Post Feedback";
  }
}
  
// --- Already Built Helpers ---
function renderFeedback(items) {
  listEl.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.name}</strong><span>${item.message}</span>`;
    listEl.appendChild(li);
  });
}

function showError(msg) {
  errorBox.classList.toggle("hidden", !msg);
  errorBox.textContent = msg || "";
}

form.addEventListener("submit", submitFeedback);
fetchFeedback();