// Sử dụng JavaScript để thêm cuộn mượt cho các liên kết đến các phần tử ID
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const logoLogin = document.querySelector('.logo_login');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (loggedInUser) {
        showLoggedInUserInfo(loggedInUser);
    } else {
        showLoginOptions();
    }
  
  function showLoginOptions() {
      // Hiển thị các tùy chọn đăng nhập và đăng ký
      const loginOptions = document.createElement('div');
      loginOptions.classList.add('login-options');
      loginOptions.innerHTML = '<a href="./index1_dangnhap.html">Đăng nhập</a>';
      logoLogin.appendChild(loginOptions);
  }
  
  function showLoggedInUserInfo(user) {
    // Hiển thị tên người dùng và nút đăng xuất
    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');
    userInfo.innerHTML = 'Xin chào '  + user.name + '<button class="logout-button">Đăng xuất</button>';
    logoLogin.appendChild(userInfo);
  }
  
    // Thêm sự kiện mouseover cho logo login
    logoLogin.addEventListener('mouseover', function() {
        const userInfo = document.querySelector('.user-info');
        const loginOptions = document.querySelector('.login-options');
  
        // Nếu thông tin người dùng hoặc tùy chọn đăng nhập đã được hiển thị, không làm gì cả
        if (userInfo || loginOptions) {
            return;
        }
  
        // Kiểm tra xem người dùng đã đăng nhập hay chưa và hiển thị thông tin tương ứng
        if (loggedInUser) {
            showLoggedInUserInfo(loggedInUser);
        } else {
            showLoginOptions();
        }
    });
  
    // Thêm sự kiện click listener cho nút đăng xuất
    document.addEventListener('click', function(event) {
        if (event.target && event.target.matches('.logout-button')) {
            logout();
        }
    });
  
  
  });
  
  function logout() {
    // Xóa thông tin người dùng đã đăng nhập và chuyển hướng về trang chính
    localStorage.removeItem('loggedInUser');
    window.location.href = './index.html';
}