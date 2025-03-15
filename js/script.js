// Live Real-Time Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById("real-time-clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

// Feedback System
function submitFeedback() {
    alert("Thank you for your feedback!");
}
function showFeedback() {
    let feedbackList = JSON.parse(localStorage.getItem("feedbacks")) || [];
    let feedbackContainer = document.getElementById("feedbackList");
    feedbackContainer.innerHTML = "";
    feedbackList.forEach(feedback => {
        let li = document.createElement("li");
        li.textContent = feedback;
        feedbackContainer.appendChild(li);
    });
}

showFeedback();
