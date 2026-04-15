document.addEventListener('DOMContentLoaded', function() {
    // Update current time every second
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    function updateTime() {
        timeElement.textContent = Date.now();
    }
    updateTime();
    setInterval(updateTime, 1000);

    // Handle avatar click for file upload
    const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
    const uploadInput = document.getElementById('avatar-upload');

    avatarImg.addEventListener('click', function() {
        // Directly trigger file input
        uploadInput.click();
    });

    uploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            avatarImg.src = imageUrl;
            avatarImg.alt = `Uploaded profile avatar of Promise Jacob`;
        }
    });

    // Make avatar image keyboard-accessible
    avatarImg.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            avatarImg.click();
        }
    });
});