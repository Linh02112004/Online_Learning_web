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
