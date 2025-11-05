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
//phần học tập
const tabs = document.querySelectorAll(".tab");
const subjects = document.querySelectorAll(".mon-hoc");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Cập nhật trạng thái tab
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const tabType = tab.dataset.tab;

    // Hiển thị theo loại tab
    subjects.forEach(sub => {
      const type = sub.dataset.type;
      const diem = parseFloat(sub.querySelector(".diem-badge").innerText);

      if (tabType === "all") {
        sub.style.display = "block";
      } else if (tabType === "main") {
        sub.style.display = type === "main" ? "block" : "none";
      } else if (tabType === "progress") {
        // Giả lập tiến độ: chỉ hiển thị môn có điểm < 8.5
        sub.style.display = diem < 8.5 ? "block" : "none";
      }
    });
  });
});
