function generateKey() {
    var userIDInput = document.getElementById("userID");
    var userID = parseInt(userIDInput.value);
    var resultDiv = document.getElementById("result");

    // Check if userID is valid
    if (isNaN(userID)) {
        resultDiv.textContent = "Please enter a valid User ID.";
        return;
    }

    // Example condition (change this according to your requirements)
    if (userID === 50) {
        resultDiv.textContent = "User ID 50 is not eligible for a key.";
        return;
    }

    // Generate random password for the key
    var keyPassword = Math.random().toString(36).substr(2, 8);

    // Display the key
    resultDiv.textContent = "Your key password is: " + keyPassword;
}
