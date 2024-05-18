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
        console.log('Key system already unlocked.');
    }

    // Event listener for the subscribe button click
    if (subscribeButton) {
        subscribeButton.addEventListener('click', function(event) {
            // Prevent the default action of the button
            event.preventDefault();

            // In a real scenario, you might want to verify if the user actually subscribed before unlocking the key system
            // For this example, let's just simulate unlocking the key system after clicking the subscribe button
            unlockKeySystem();
        });
    } else {
        console.error('Subscribe button not found.');
    }
});
