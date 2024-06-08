const form = document.getElementById('support-form');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    errorMessages.forEach((errorMessage) => {
        errorMessage.textContent = '';
    });

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const descriptionInput = document.getElementById('description');

    if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.closest('.form-group').querySelector('.error-message').textContent = 'Vui lòng điền tên';
    }

    if (!isValidEmail(emailInput.value)) {
        isValid = false;
        emailInput.closest('.form-group').querySelector('.error-message').textContent = 'Email không hợp lệ';
    }

    if (!phoneInput.value.trim()) {
        isValid = false;
        phoneInput.closest('.form-group').querySelector('.error-message').textContent = 'Vui lòng điền số điện thoại';
    }

    if (!descriptionInput.value.trim()) {
        isValid = false;
        descriptionInput.closest('.form-group').querySelector('.error-message').textContent = 'Vui lòng mô tả vấn đề cần trợ giúp';
    }

    if (isValid) {
        // Lấy các giá trị từ các ô input
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const description = descriptionInput.value;
        const attachment = document.getElementById('attachment').files[0];

        // Hiển thị thông báo "Gửi thành công"
        alert('Gửi thành công!');

        // Xóa dữ liệu trong các ô input
        form.reset();
    }
});

function isValidEmail(email) {
    // Kiểm tra định dạng email hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}