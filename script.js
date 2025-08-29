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

// Form submission handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // For now, just log the values
    console.log('Login attempt:', { email, password, remember });
    
    // Here you would typically send the data to a backend
    alert('Login functionality would be implemented here');
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