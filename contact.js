document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('success-message');

    // Allow spaces in real-time (no restriction)
    fullName.addEventListener('input', function() {
        // Optional: Prevent multiple consecutive spaces or leading spaces during typing
        const value = this.value;
        if (value !== value.trimStart()) {
            this.value = value.trimStart(); // Remove leading spaces
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Reset error states
        [fullName, email, subject, message].forEach(input => {
            input.setAttribute('aria-invalid', 'false');
            const errorElement = document.getElementById(`error-${input.id}`);
            if (errorElement) errorElement.setAttribute('hidden', '');
        });
        successMessage.setAttribute('hidden', '');

        // === FULL NAME VALIDATION ===
        const nameValue = fullName.value.trim();
        if (!nameValue) {
            setError(fullName, 'error-name', 'Name is required');
            isValid = false;
        } else if (nameValue.length < 2) {
            setError(fullName, 'error-name', 'Name must be at least 2 characters');
            isValid = false;
        } else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(nameValue)) {
            // Optional: Allow only letters and single spaces between words
            setError(fullName, 'error-name', 'Please enter a valid name (letters and spaces only)');
            isValid = false;
        }

        // === EMAIL VALIDATION ===
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = email.value.trim();
        if (!emailValue || !emailRegex.test(emailValue)) {
            setError(email, 'error-email', 'Please enter a valid email address');
            isValid = false;
        }

        // === SUBJECT VALIDATION ===
        const subjectValue = subject.value.trim();
        if (!subjectValue) {
            setError(subject, 'error-subject', 'Subject is required');
            isValid = false;
        }

        // === MESSAGE VALIDATION ===
        const messageValue = message.value.trim();
        if (!messageValue || messageValue.length < 10) {
            setError(message, 'error-message', 'Message must be at least 10 characters');
            isValid = false;
        }

        // === ON SUCCESS ===
        if (isValid) {
            successMessage.removeAttribute('hidden');
            form.reset();
            // Optional: Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    function setError(input, errorId, message) {
        input.setAttribute('aria-invalid', 'true');
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.removeAttribute('hidden');
        }
    }
});