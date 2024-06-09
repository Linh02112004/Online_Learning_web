const classButtons = document.querySelectorAll('.class-btn');
const testArea = document.getElementById('test-area');
const testTitle = document.getElementById('test-title');
const startTestBtn = document.getElementById('start-test');
let selectedClass = 0;

// Đối tượng ánh xạ số lớp sang tên tệp HTML tương ứng
const classFileMapping = {
  1: 'tu_luyen/Lop1/index1.html',
  2: 'tu_luyen/Lop2/index2.html',
  3: 'tu_luyen/Lop3/index3.html',
  4: 'tu_luyen/Lop4/index4.html',
  5: 'tu_luyen/Lop5/index5.html',
  6: 'tu_luyen/Lop6/index6.html',
  7: 'tu_luyen/Lop7/index7.html',
  8: 'tu_luyen/Lop8/index8.html',
  9: 'tu_luyen/Lop9/index9.html',
  10: 'tu_luyen/Lop10/index10.html',
  11: 'tu_luyen/Lop11/index11.html',
  12: 'tu_luyen/Lop12/index12.html'
};

classButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    selectedClass = parseInt(btn.textContent.match(/\d+/)[0]);
    showStartButton(selectedClass);
  });
});

function showStartButton(classNum) {
  testTitle.textContent = `Bài kiểm tra toán lớp ${classNum}`;
  testArea.style.display = 'block';
}

startTestBtn.addEventListener('click', () => {
  if (selectedClass > 0) {
    const classFileName = classFileMapping[selectedClass];
    if (classFileName) {
      window.location.href = classFileName;
    } else {
      console.error(`Không tìm thấy tệp HTML cho lớp ${selectedClass}.`);
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const logoLogin = document.querySelector('.logo_login');
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  if (loggedInUser) {
      showLoggedInUserInfo(loggedInUser);
  } else {
    window.location.href = "./index1_dangnhap.html";
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

  function showLoggedInUserInfo(user) {
      // Hiển thị tên người dùng và nút đăng xuất
      const userInfo = document.createElement('div');
      userInfo.classList.add('user-info');
      userInfo.innerHTML = 'Xin chào '  + user.name + '<br>' + '<button class="logout-button">Đăng xuất</button>';
      logoLogin.appendChild(userInfo);
  }

  function showLoginOptions() {
      // Hiển thị các tùy chọn đăng nhập và đăng ký
      const loginOptions = document.createElement('div');
      loginOptions.classList.add('login-options');
      loginOptions.innerHTML = '<a href="./index1_dangnhap.html">Đăng nhập</a>';
      logoLogin.appendChild(loginOptions);
  }
});

function logout() {
  // Xóa thông tin người dùng đã đăng nhập và chuyển hướng về trang chính
  localStorage.removeItem('loggedInUser');
  window.location.href = './index.html';
}
