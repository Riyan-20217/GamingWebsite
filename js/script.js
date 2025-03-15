// Live Clock Function
function updateClock() {
    let now = new Date();
    document.getElementById("real-time-clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // Run immediately on load

// Feedback System
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let feedback = document.getElementById("feedback").value;

    if (feedback.trim() !== "") {
        let feedbackList = JSON.parse(localStorage.getItem("feedbacks")) || [];
        feedbackList.push(feedback);
        localStorage.setItem("feedbacks", JSON.stringify(feedbackList));
        document.getElementById("feedback").value = "";
        showFeedback();
    }
});

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
