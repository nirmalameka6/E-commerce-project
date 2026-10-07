/* ==========================================================================
   ShopSphere - Simulated Authentication (auth.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Login Form Handler
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;

            if (!email || !password) {
                showToast('Please fill in all required fields.', 'error');
                return;
            }

            // Simulate user object in localStorage
            const user = {
                name: email.split('@')[0] || 'User',
                email: email,
                token: 'simulated_jwt_token_' + Date.now()
            };

            localStorage.setItem('shopsphere_user', JSON.stringify(user));
            showToast('Login successful! Redirecting...', 'success');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }

    // Register Form Handler
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = document.getElementById('reg-name').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const mobile = document.getElementById('reg-mobile').value.trim();
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('reg-confirm-password').value;

            if (!fullName || !email || !mobile || !password) {
                showToast('Please fill in all required fields.', 'error');
                return;
            }

            if (password !== confirmPassword) {
                showToast('Passwords do not match.', 'error');
                return;
            }

            const user = {
                name: fullName,
                email: email,
                mobile: mobile,
                token: 'simulated_jwt_token_' + Date.now()
            };

            localStorage.setItem('shopsphere_user', JSON.stringify(user));
            showToast('Account created successfully! 🎉', 'success');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
});
