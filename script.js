// This script could track when the user clicks the subscribe button and perform any necessary actions, like unlocking the key system.
document.addEventListener("DOMContentLoaded", function() {
    var subscribeButton = document.querySelector('.subscribe-button');

    subscribeButton.addEventListener('click', function(event) {
        // You can add any tracking or analytics code here
        // For example, you could send an event to Google Analytics
        // ga('send', 'event', 'Button', 'Click', 'Subscribe');

        // In a real scenario, you might want to verify if the user actually subscribed before unlocking the key system
        // For this example, let's just simulate unlocking the key system after clicking the subscribe button
        alert('Thank you for subscribing! The key system has been unlocked.');
    });
});
