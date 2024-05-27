function showTab(tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';
}

// Show the home tab by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
});

// JavaScript function to navigate back to the previous page
function goBack() {
    window.history.back();
}