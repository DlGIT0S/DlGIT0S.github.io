document.addEventListener("DOMContentLoaded", function() {
    var subscribeButton = document.querySelector('.subscribe-button');

    // Event listener for the subscribe button click
    subscribeButton.addEventListener('click', function(event) {
        // Prevent the default action of the button
        event.preventDefault();

        // Open the YouTube page in a new tab
        window.open('https://youtube.com/@dlgit0s?si=Scvzc9bf9T_B3Ra-', '_blank');

        // Check if the user subscribed (this is a simulation)
        var isSubscribed = confirm('Did you subscribe to our YouTube channel?');
        if (isSubscribed) {
            // Unlock the key system
            alert('Thank you for subscribing! The key system has been unlocked.');
        } else {
            // Notify the user that they need to subscribe to unlock the key system
            alert('Please subscribe to our YouTube channel to unlock the key system.');
        }
    });
});
