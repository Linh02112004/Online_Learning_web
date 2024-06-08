var acc = document.getElementsByClassName("accordion");
var i;
var timer; // Biến để lưu trữ thời gian chờ trước khi đóng accordion

function closeAllAccordions() {
  var allAccordions = document.getElementsByClassName("accordion");
  for (var j = 0; j < allAccordions.length; j++) {
    var panel = allAccordions[j].nextElementSibling;
    allAccordions[j].classList.remove("active");
    panel.style.display = "none";
  }
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("mouseenter", function() {
    closeAllAccordions();

    // Mở accordion hiện tại
    this.classList.add("active");
    var panel = this.nextElementSibling;
    panel.style.display = "block";
  });

  // Thêm sự kiện mouseover cho accordion
  acc[i].addEventListener("mouseover", function() {
    clearTimeout(timer); // Xóa bộ đếm nếu đã được đặt trước đó
    var panel = this.nextElementSibling;
    panel.style.display = "block";
  });

  // Thêm sự kiện mouseout cho accordion
  acc[i].addEventListener("mouseout", function() {
    var panel = this.nextElementSibling;
    // Đặt một thời gian chờ trước khi đóng accordion
    timer = setTimeout(function() {
      panel.style.display = "none";
    }, 1000);
  });

  var panel = acc[i].nextElementSibling;
  panel.addEventListener("mouseover", function() {
    clearTimeout(timer);
  });

  panel.addEventListener("mouseout", function() {
    var panel = this;
    timer = setTimeout(function() {
      panel.style.display = "none";
    }, 1000);
  });
}

let slideIndex = 0;
showSlides();
function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 2000);
}

document.getElementById("sreach").addEventListener("keypress", function(event) {//gắn sự kiện enter cho sreach, knao ấn enter thì hàm sreach() đc thực hiện
    if (event.key === "Enter") {
      search();
    }
  });

function search() {
    var tukhoa = document.getElementById("sreach").value.toLowerCase();//lấy giá trị của từ khóa mà ta nhập vào
    var divs = document.querySelectorAll('.panel');//chọn panel bởi vì mục đích là tìm kiếm các chương trình học, lấy tất cả phần tử bên trong panel lưu vào 1 mảng
    divs.forEach(function(div) {//forEach na ná mảng, duyệt qua từng dsach(panel)
        var listItems = div.querySelectorAll('li');//lấy phần tử li trong dach sách đã duyệt qua ở trên
        listItems.forEach(function(item) {//duyệt qua từng phần tử li trng listItems(vòng lặp)
            // Lưu trữ các liên kết (nếu có) trong mỗi mục <li>
            var links = item.querySelectorAll('a');
            var linkHTML = '';
            links.forEach(function(link) {
                linkHTML += link.outerHTML; // Lưu trữ HTML của liên kết
            });
            var itemContent = item.textContent;//lấy ndung
            if (itemContent.toLowerCase().includes(tukhoa)) {//nếu có
                item.innerHTML =  linkHTML;//cho link vào
                item.style.display = "block";//hiện li đó lên
            } else {
                item.innerHTML =  linkHTML;
                item.style.display = "none";//nếu không thì ẩn
            }
        });
        div.style.display = "block";//hiệnr thị div có ptu li khi tìm kiếm
    });
}

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

