// Event listener for the "Yes" button
document.getElementById('yes-btn').addEventListener('click', function() {
    showHeartAnimation();
    showMessage("I knew you would say yes, you're the best sweetie! 🎀");
    document.getElementById('bgMusic').play();  // Play romantic music
});

// Event listener for the "Hell Yes" button
document.getElementById('hell-yes-btn').addEventListener('click', function() {
    showHeartAnimation();
    showMessage("Valentine's Day is for fools, toh ban jaate hai na fool. Okay jaanu? 🌷");
    document.getElementById('bgMusic').play();  // Play romantic music
});

// Function to show heart animation
function showHeartAnimation() {
    var heart = document.getElementById('heart');
    heart.style.display = 'block';  // Make heart visible
    heart.classList.add('heartPop');  // Trigger heart pop animation
    setTimeout(function() {
        heart.style.display = 'none';  // Hide heart after animation
    }, 1000);
}

// Function to display the message
function showMessage(text) {
    var message = document.getElementById('response-message');
    message.textContent = text;
    message.classList.add('messagePop');  // Add message animation
}