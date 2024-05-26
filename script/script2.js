var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
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
setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.getElementById("sreach").addEventListener("keypress", function(event) {//gắn sự kiện enter cho sreach, knao ẩn enter thì hàm sreach() đc thực hiện
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
