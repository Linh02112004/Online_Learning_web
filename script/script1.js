const users = JSON.parse(localStorage.getItem('users')) || [];

function showSignupForm() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');
      
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Mật khẩu nhập lại chưa đúng.';
        return;
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('Email đã được đăng ký.');
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đăng ký thành công.');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        alert('Email hoặc mật khẩu không đúng.');
        return;
    }

    localStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = './index.html';
});

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = './index.html';
}