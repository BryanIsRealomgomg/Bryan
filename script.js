// Get references to the button and the instructions section
const startButton = document.getElementById('startButton');
const instructionsSection = document.getElementById('instructions');
const backButton = document.getElementById('backToStartButton');
const pixelManVideoButton = document.getElementById('pixelManVideo');

// Function to show the instructions section and change the background
function showInstructions() {
    // Hide the start button
    startButton.classList.add('fade-out'); // Add fade-out animation class

    // Show the instructions section
    instructionsSection.style.display = 'block';
    instructionsSection.classList.add('fade-in'); // Add fade-in animation class

    // Show the pixel man video button
    pixelManVideoButton.style.display = 'block';
    pixelManVideoButton.classList.add('fade-down'); // Add fade-down animation class

    // Change the background color to gray
    document.body.style.background = '#333'; // Change the background color to gray
}

// Function to go back to the start scene and redirect to another page
function backToStartSceneAndRedirect() {
    // Replace 'https://www.example.com' with the URL of the website you want to redirect to
    window.location.href = 'https://bryanisrealomgomg.github.io/Giftko/';
}

// Function to fade out everything and go back to the start scene
function fadeOutEverythingAndGoBack() {
    // Select all the elements you want to fade out
    const elementsToFadeOut = [instructionsSection];

    // Apply the 'fade-out' class to each element to trigger the fade-out animation
    elementsToFadeOut.forEach((element) => {
        element.classList.add("fade-out");
    });

    // Add the 'fade-out-background' class to the body to fade out the background
    document.body.classList.add("fade-out-background");

    // After the fade-out animation is completed, reset the display to none for all elements
    setTimeout(() => {
        elementsToFadeOut.forEach((element) => {
            element.style.display = 'none';
            element.classList.remove("fade-out"); // Reset the class to remove the animation effect
        });

        document.body.style.background = 'none';
        document.body.classList.remove("fade-out-background"); // Reset the class to remove the animation effect

        // Redirect to another page
        backToStartSceneAndRedirect();

    }, 1000); // Set the timeout to 1 second (same duration as the fade-out animation)
}

// Add a click event listener to the button to show instructions
startButton.addEventListener('click', function() {
    showInstructions();
});

// Add a click event listener to the back button to fade out everything and go back to the start scene
backButton.addEventListener('click', function() {
    fadeOutEverythingAndGoBack();
});
