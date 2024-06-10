const users = JSON.parse(localStorage.getItem('users')) || [];
const signupForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const signupName = document.getElementById('signup-name');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('password');

function showSignupForm() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = signupName.value;
    const email = signupEmail.value;
    const password = signupPassword.value;
    const confirmPass = confirmPassword.value;
    
    // Kiểm tra mật khẩu nhập lại
    if (password !== confirmPass) {
        errorMessage.textContent = 'Mật khẩu nhập lại chưa đúng.';
        return;
    }

    // Kiểm tra email đã tồn tại
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        errorMessage.textContent = 'Email đã được đăng ký.';
        return;
    }

    // Thêm người dùng mới
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đăng ký thành công.');

    // Tự động chuyển sang trang đăng nhập sau khi đăng ký thành công
    showLoginForm();
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;

    // Xác thực đăng nhập
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        alert('Email hoặc mật khẩu không đúng.');
        return;
    }

    localStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = './index.html';
});
