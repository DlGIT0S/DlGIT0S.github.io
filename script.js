document.getElementById('buyButton').addEventListener('click', function() {
    // Show the modal
    document.getElementById('giftCardModal').style.display = "block";
});

document.querySelector('.close').addEventListener('click', function() {
    // Hide the modal
    document.getElementById('giftCardModal').style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('giftCardModal')) {
        // Hide the modal if clicked outside of it
        document.getElementById('giftCardModal').style.display = "none";
    }
});

document.getElementById('submitGiftCard').addEventListener('click', function() {
    const giftCardCode = document.getElementById('giftCardInput').value;

    // Validate the gift card (placeholder logic for demonstration)
    if (giftCardCode === "VALID-GIFT-CARD") {
        alert('Purchase successful!');
        document.getElementById('giftCardModal').style.display = "none";
        document.getElementById('linkContainer').classList.remove('hidden');
    } else {
        alert('Invalid gift card code. Please try again.');
    }
});