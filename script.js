document.addEventListener("DOMContentLoaded", function() {
    var subscribeButton = document.querySelector('.subscribe-button');

    // Event listener for the subscribe button click
    subscribeButton.addEventListener('click', function(event) {
        alert('Thank you for subscribing! The key system has been unlocked.');
        event.preventDefault(); // Prevent the default action of the button
    });
});
