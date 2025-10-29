// Xử lý chuyển trang khi bấm menu
const buttons = document.querySelectorAll(".menu-btn");
const pages = document.querySelectorAll(".page");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.getAttribute("data-target");
    pages.forEach((p) => {
      p.classList.remove("active");
      if (p.id === target) p.classList.add("active");
    });
  });
});

// Xử lý hiện form thêm học sinh
const addBtn = document.querySelector(".add-btn");
const modal = document.getElementById("studentModal");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

addBtn.addEventListener("click", () => {
  modal.style.display = "block";
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});

// Xử lý hiện form cập nhật thông tin học sinh
const modalUpdate = document.getElementById("studentModalUpdate");
const closeBtnUpdate = document.getElementById("closeBtnUpdate");
const editButtons = document.querySelectorAll(".edit");

editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modalUpdate.style.display = "block"; // Hiện form
    overlay.style.display = "block";
  });
});

closeBtnUpdate.addEventListener("click", () => {
  modalUpdate.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  modalUpdate.style.display = "none";
  overlay.style.display = "none";
});
