const form = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

form.addEventListener('submit', function(event) {
            let isValid = true;

            // Validate name
            if (nameField.value.trim() === '') {
                nameError.textContent = 'Name is required';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailField.value.trim())) {
                emailError.textContent = 'Invalid email address';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Validate message
            if (messageField.value.trim() === '') {
                messageError.textContent = 'Message is required';
                isValid = false;
            } else {
                messageError.textContent = '';
            }

            // Prevent form submission if validation fails
            if (!isValid) {
                event.preventDefault();
            }