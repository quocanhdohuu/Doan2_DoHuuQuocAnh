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
// --- Lấy các phần tử cần thao tác ---
const tabs = document.querySelectorAll('.tab'); // 3 nút tab
const sectionAll = document.querySelector('.tatcamonhoc'); // phần "Tất cả môn học"
const sectionMain = document.querySelector('.monchinh');   // phần "Môn chính"
const sectionProgress = document.querySelector('.tiendo'); // phần "Tiến độ"

// --- Hàm cập nhật hiển thị theo tab ---
function showSection(tabType) {
  // 1️⃣ Ẩn tất cả các phần trước
  sectionAll.style.display = 'none';
  sectionMain.style.display = 'none';
  sectionProgress.style.display = 'none';

  // 2️⃣ Hiện phần tương ứng với tab đang chọn
  if (tabType === 'all') {
    sectionAll.style.display = 'block';
  } else if (tabType === 'main') {
    sectionMain.style.display = 'block';
  } else if (tabType === 'progress') {
    sectionProgress.style.display = 'block';
  }

  // 3️⃣ Cập nhật trạng thái active của tab
  tabs.forEach(tab => {
    if (tab.dataset.tab === tabType) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}

// --- Gắn sự kiện click cho từng tab ---
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabType = tab.dataset.tab; // Lấy loại tab (all / main / progress)
    showSection(tabType);            // Cập nhật hiển thị
  });
});

// --- Khi tải trang, tự kích hoạt tab đang active ban đầu ---
const activeTab = document.querySelector('.tab.active');
if (activeTab) {
  showSection(activeTab.dataset.tab);
} else {
  // Nếu chưa có tab active, mặc định là "Tất cả môn học"
  showSection('all');
}
