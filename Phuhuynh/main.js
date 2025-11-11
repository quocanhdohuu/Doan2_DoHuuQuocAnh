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
// Phần điểm danh — lịch tương tác
document.querySelectorAll(".ngay div").forEach(ngay => {
  ngay.addEventListener("click", () => {
    document.querySelectorAll(".ngay div").forEach(n => n.classList.remove("chon"));
    ngay.classList.add("chon");
    document.querySelector(".hop-chi-tiet-ngay h4").innerHTML = `📅 Chi tiết ngày ${ngay.innerText}/10/2025`;
  });
});

// Phần thao tác nhanh (.Toigian) — điều hướng đến các mục menu
document.querySelectorAll('.Luachon-chucnang').forEach((item, index) => {
  item.addEventListener('click', () => {
    const menuItems = ['diemdanh', 'suckhoe', 'hoctap', 'hoso'];
    const target = menuItems[index] || 'tongquan';
    
    // click menu button tương ứng
    const btn = document.querySelector(`.menu button[data-target="${target}"]`);
    if (btn) btn.click();
  });
});

// Phần học tập — Quản lý tabs + sections
(function(){
  const tabs = document.querySelectorAll('.tab');
  const sectionAll = document.querySelector('.tatcamonhoc');
  const sectionMain = document.querySelector('.monchinh');
  const sectionProgress = document.querySelector('.tiendo');

  function showSection(tabType) {
    // Ẩn tất cả sections
    if (sectionAll) sectionAll.style.display = 'none';
    if (sectionMain) sectionMain.style.display = 'none';
    if (sectionProgress) sectionProgress.style.display = 'none';

    // Hiện section tương ứng
    if (tabType === 'all' && sectionAll) sectionAll.style.display = 'block';
    else if (tabType === 'main' && sectionMain) sectionMain.style.display = 'block';
    else if (tabType === 'progress' && sectionProgress) sectionProgress.style.display = 'block';

    // Cập nhật trạng thái active của tabs
    tabs.forEach(tab => {
      if (tab.dataset.tab === tabType) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  // Gắn sự kiện cho từng tab
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabType = tab.dataset.tab;
      showSection(tabType);
    });
  });

  // Khởi tạo: hiện tab active hoặc "all" mặc định
  const activeTab = document.querySelector('.tab.active');
  if (activeTab) {
    showSection(activeTab.dataset.tab);
  } else {
    showSection('all');
  }
})();
