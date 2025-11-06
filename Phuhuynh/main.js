const buttons = document.querySelectorAll('.menu button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
// Lấy tất cả nút menu và các phần nội dung
const button = document.querySelectorAll('.menu button');
const sections = document.querySelectorAll('.tab-content');

// Lặp qua từng nút menu
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // 1. Bỏ active ở tất cả nút
    buttons.forEach(btn => btn.classList.remove('active'));

    // 2. Thêm active cho nút được chọn
    button.classList.add('active');

    // 3. Ẩn tất cả phần nội dung
    sections.forEach(section => section.classList.remove('active'));

    // 4. Hiện phần tương ứng với nút được chọn
    const targetId = button.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});
// phần điểm danh
document.querySelectorAll(".ngay div").forEach(ngay => {
  ngay.addEventListener("click", () => {
    document.querySelectorAll(".ngay div").forEach(n => n.classList.remove("chon"));
    ngay.classList.add("chon");
    document.querySelector(".hop-chi-tiet-ngay h4").innerHTML = `📅 Chi tiết ngày ${ngay.innerText}/10/2025`;
  });
});
// Phần học tập: sửa tabs để điều khiển các phần tử .subject
const tabs = document.querySelectorAll('.tab');
// Danh sách subject nhỏ ở cuối phần Học tập (class .subject)
const subjects = document.querySelectorAll('.subject');

function updateSubjectVisibility(tabType) {
  subjects.forEach(sub => {
    const type = sub.dataset.type || '';
    // score có thể nằm trong .score-box hoặc .diem-badge (dự phòng)
    const scoreEl = sub.querySelector('.score-box') || sub.querySelector('.diem-badge');
    const score = scoreEl ? parseFloat(scoreEl.innerText) : NaN;

    if (tabType === 'all') {
      sub.style.display = 'block';
    } else if (tabType === 'main') {
      sub.style.display = (type === 'main') ? 'block' : 'none';
    } else if (tabType === 'progress') {
      // Hiển thị môn có điểm trung bình < 8.5 (nếu không có score thì ẩn)
      sub.style.display = (!isNaN(score) && score < 8.5) ? 'block' : 'none';
    } else {
      sub.style.display = 'block';
    }
  });
}
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const tabType = tab.dataset.tab;
    updateSubjectVisibility(tabType);
  });
});
// Khởi tạo trạng thái hiển thị dựa trên tab active (nếu có)
const activeTab = document.querySelector('.tab.active');
if (activeTab) updateSubjectVisibility(activeTab.dataset.tab);
// --- Hiển thị/ẩn 3 phần chính trong khu vực Học tập ---
const sectionAll = document.querySelector('.tatcamonhoc');
const sectionMain = document.querySelector('.monchinh');
const sectionProgress = document.querySelector('.tiendo');
function updateTabSections(tabType) {
  // Nếu các section không tồn tại, không làm gì
  if (!sectionAll && !sectionMain && !sectionProgress) return;
  // Mặc định ẩn cả 3
  if (sectionAll) sectionAll.style.display = 'none';
  if (sectionMain) sectionMain.style.display = 'none';
  if (sectionProgress) sectionProgress.style.display = 'none';
  if (tabType === 'all') {
    if (sectionAll) sectionAll.style.display = 'block';
  } else if (tabType === 'main') {
    if (sectionMain) sectionMain.style.display = 'block';
  } else if (tabType === 'progress') {
    if (sectionProgress) sectionProgress.style.display = 'block';
  } else {
    // fallback: show all
    if (sectionAll) sectionAll.style.display = 'block';
  }
}
// Kết hợp: khi thay đổi tab, cập nhật cả subject list và các section lớn
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabType = tab.dataset.tab;
    updateTabSections(tabType);
  });
});
// Khởi tạo hiển thị section lớn theo tab active
if (activeTab) updateTabSections(activeTab.dataset.tab);
