document.addEventListener("DOMContentLoaded", function() {
    var subscribeButton = document.querySelector('.subscribe-button');
    var keySystemUnlocked = localStorage.getItem('keySystemUnlocked'); // Check if the key system is already unlocked

    // Function to unlock the key system
    function unlockKeySystem() {
        alert('Thank you for subscribing! The key system has been unlocked.');
        localStorage.setItem('keySystemUnlocked', true); // Store the unlocked status in localStorage
    }

    // Check if the key system is already unlocked
    if (keySystemUnlocked) {
        alert('Welcome back! The key system is already unlocked.');
    }

    // Event listener for the subscribe button click
    subscribeButton.addEventListener('click', function(event) {
        // You can add any tracking or analytics code here
        // For example, you could send an event to Google Analytics
        // ga('send', 'event', 'Button', 'Click', 'Subscribe');

        // In a real scenario, you might want to verify if the user actually subscribed before unlocking the key system
        // For this example, let's just simulate unlocking the key system after clicking the subscribe button
        unlockKeySystem();
    });
});
