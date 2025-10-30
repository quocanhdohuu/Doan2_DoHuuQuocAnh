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
const editButtons = document.querySelectorAll(".editStudent");

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

// Xử lý hiện form thêm lớp
const addClassBtn = document.querySelector(".addclass-btn");
const classModal = document.getElementById("classModal");
const closeClassBtn = document.getElementById("closeClassBtn");
const overlayclass = document.getElementById("overlayclass");

addClassBtn.addEventListener("click", () => {
  classModal.style.display = "block";
  overlayclass.style.display = "block";
});

closeClassBtn.addEventListener("click", () => {
  classModal.style.display = "none";
  overlayclass.style.display = "none";
});

overlayclass.addEventListener("click", () => {
  classModal.style.display = "none";
  overlayclass.style.display = "none";
});

// Xử lý hiện form cập nhật thông tin lớp học
const classModalUpdate = document.getElementById("classModalUpdate");
const closeClassBtnUpdate = document.getElementById("closeClassBtnUpdate");
const editclassBtn = document.querySelectorAll(".editClass");

editclassBtn.forEach((button) => {
  button.addEventListener("click", () => {
    classModalUpdate.style.display = "block";
    overlayclass.style.display = "block";
  });
});

closeClassBtnUpdate.addEventListener("click", () => {
  classModalUpdate.style.display = "none";
  overlayclass.style.display = "none";
});

overlayclass.addEventListener("click", () => {
  classModalUpdate.style.display = "none";
  overlayclass.style.display = "none";
});

// Xử lý hiện form thêm giáo viên
const addTeacherBtn = document.querySelector(".addteacher-btn");
const teacherModal = document.getElementById("teacherModal");
const closeTeacherBtn = document.getElementById("closeTeacherBtn");
const overlayteacher = document.getElementById("overlayteacher");

addTeacherBtn.addEventListener("click", () => {
  teacherModal.style.display = "block";
  overlayteacher.style.display = "block";
});

closeTeacherBtn.addEventListener("click", () => {
  teacherModal.style.display = "none";
  overlayteacher.style.display = "none";
});

overlayteacher.addEventListener("click", () => {
  teacherModal.style.display = "none";
  overlayteacher.style.display = "none";
});
// Xử lý hiện form sửa thông tin giáo viên
const teacherModalUpdate = document.getElementById("teacherModalUpdate");
const closeTeacherBtnUpdate = document.getElementById("closeTeacherBtnUpdate");
const editteacherBtn = document.querySelectorAll(".editTeacher");

editteacherBtn.forEach((button) => {
  button.addEventListener("click", () => {
    teacherModalUpdate.style.display = "block";
    overlayteacher.style.display = "block";
  });
});

closeTeacherBtnUpdate.addEventListener("click", () => {
  teacherModalUpdate.style.display = "none";
  overlayteacher.style.display = "none";
});

overlayteacher.addEventListener("click", () => {
  teacherModalUpdate.style.display = "none";
  overlayteacher.style.display = "none";
});
