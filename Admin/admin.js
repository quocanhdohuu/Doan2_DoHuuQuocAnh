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

// Xử lý hiện form thêm sự kiện
const addEventBtn = document.querySelector(".addevent-btn");
const eventModal = document.getElementById("eventModal");
const closeEventBtn = document.getElementById("closeEventBtn");
const overlayevent = document.getElementById("overlayevent");

addEventBtn.addEventListener("click", () => {
  eventModal.style.display = "block";
  overlayevent.style.display = "block";
});
closeEventBtn.addEventListener("click", () => {
  eventModal.style.display = "none";
  overlayevent.style.display = "none";
});

overlayevent.addEventListener("click", () => {
  eventModal.style.display = "none";
  overlayevent.style.display = "none";
});

// Xử lý hiện form cập nhật thông tin sự kiện
const eventModalUpdate = document.getElementById("eventModalUpdate");
const closeEventBtnUpdate = document.getElementById("closeEventBtnUpdate");
const editEventBtn = document.querySelectorAll(".editEvent");

editEventBtn.forEach((button) => {
  button.addEventListener("click", () => {
    eventModalUpdate.style.display = "block";
    overlayevent.style.display = "block";
  });
});

closeEventBtnUpdate.addEventListener("click", () => {
  eventModalUpdate.style.display = "none";
  overlayevent.style.display = "none";
});

overlayevent.addEventListener("click", () => {
  eventModalUpdate.style.display = "none";
  overlayevent.style.display = "none";
});

//thêm học sinh vào bảng dữ liệu
// Lấy các phần tử cần thiết
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.querySelector(".student-table tbody");
const modalStudent = document.getElementById("studentModal");
const overlayAddStudent = document.getElementById("overlay");

studentForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Ngăn reload trang

  // Lấy dữ liệu từ form
  const name = document.getElementById("studentName").value.trim();
  const className = document.getElementById("studentClass").value;
  const dob = document.getElementById("studentDOB").value;
  const parent = document.getElementById("studentParent").value.trim();
  const phone = document.getElementById("studentPhone").value.trim();
  const address = document.getElementById("studentAddress").value.trim();

  // Kiểm tra dữ liệu cơ bản
  if (
    !name ||
    className === "Chọn lớp" ||
    !dob ||
    !parent ||
    !phone ||
    !address
  ) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Định dạng lại ngày sinh (YYYY-MM-DD → DD/MM/YYYY)
  const formattedDOB = dob.split("-").reverse().join("/");

  // Tạo hàng mới
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${className}</td>
    <td>${formattedDOB}</td>
    <td>${parent}</td>
    <td>${phone}</td>
    <td>${address}</td>
    <td><span class="status active">Đang học</span></td>
    <td class="actions">
        <button class="edit editStudent"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete deleteStudent"><i class="fa-solid fa-trash-can"></i></button>
    </td>
  `;

  // Thêm hàng vào bảng
  studentTableBody.appendChild(newRow);

  // Gán lại sự kiện edit cho nút mới
  newRow.querySelector(".editStudent").addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "block";
    updateModal.style.display = "block";
    currentRow = e.target.closest("tr");
    const cells = currentRow.querySelectorAll("td");

    document.getElementById("updateName").value = cells[0].textContent;
    document.getElementById("updateClass").value = cells[1].textContent;
    const dobParts = cells[2].textContent.split("/");
    const formattedDOB = `${dobParts[2]}-${dobParts[1].padStart(
      2,
      "0"
    )}-${dobParts[0].padStart(2, "0")}`;
    document.getElementById("updateDOB").value = formattedDOB;
    document.getElementById("updateParent").value = cells[3].textContent;
    document.getElementById("updatePhone").value = cells[4].textContent;
    document.getElementById("updateAddress").value = cells[5].textContent;
  });
  // Gán sự kiện delete cho nút mới
  newRow.querySelector(".deleteStudent").addEventListener("click", (e) => {
    e.preventDefault();
    const row = e.target.closest("tr");
    const name = row.querySelector("td").textContent;
    if (confirm(`Bạn có chắc muốn xóa học sinh "${name}" không?`)) {
      row.remove();
    }
  });
  // Reset form
  studentForm.reset();

  // Đóng modal
  modalStudent.style.display = "none";
  if (overlayAddStudent) overlayAddStudent.style.display = "none";
});

// --- SỬA HỌC SINH ---
const editStudentButtons = document.querySelectorAll(".editStudent");
const updateForm = document.getElementById("studentFormUpdate");
const updateModal = document.getElementById("studentModalUpdate");

let currentRow = null; // Biến lưu hàng đang được sửa

// Khi nhấn nút ✏️
editStudentButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "block";
    updateModal.style.display = "block";

    // Lấy dòng hiện tại
    currentRow = e.target.closest("tr");
    const cells = currentRow.querySelectorAll("td");

    // Gán giá trị vào form
    document.getElementById("updateName").value = cells[0].textContent;
    document.getElementById("updateClass").value = cells[1].textContent;

    // Chuyển ngày sinh về định dạng YYYY-MM-DD
    const dobParts = cells[2].textContent.split("/");
    const formattedDOB = `${dobParts[2]}-${dobParts[1].padStart(
      2,
      "0"
    )}-${dobParts[0].padStart(2, "0")}`;
    document.getElementById("updateDOB").value = formattedDOB;

    document.getElementById("updateParent").value = cells[3].textContent;
    document.getElementById("updatePhone").value = cells[4].textContent;
    document.getElementById("updateAddress").value = cells[5].textContent;
  });
});

// Khi bấm nút “Cập nhật”
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!currentRow) return;

  // Lấy dữ liệu mới
  const name = document.getElementById("updateName").value.trim();
  const className = document.getElementById("updateClass").value;
  const dob = document.getElementById("updateDOB").value;
  const parent = document.getElementById("updateParent").value.trim();
  const phone = document.getElementById("updatePhone").value.trim();
  const address = document.getElementById("updateAddress").value.trim();

  // Định dạng lại ngày sinh
  const formattedDOB = dob.split("-").reverse().join("/");

  // Gán lại vào dòng
  const cells = currentRow.querySelectorAll("td");
  cells[0].textContent = name;
  cells[1].textContent = className;
  cells[2].textContent = formattedDOB;
  cells[3].textContent = parent;
  cells[4].textContent = phone;
  cells[5].textContent = address;

  // Đóng modal
  updateModal.style.display = "none";
  overlay.style.display = "none";
});

// --- XÓA HỌC SINH ---
const deleteButtons = document.querySelectorAll(".deleteStudent");

deleteButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const row = e.target.closest("tr");
    const name = row.querySelector("td").textContent;

    if (confirm(`Bạn có chắc muốn xóa học sinh "${name}" không?`)) {
      row.remove();
    }
  });
});

//Xử lý Thêm, sửa, xoá QL sự kiện
const eventForm = document.getElementById("eventForm");
const eventFormUpdate = document.getElementById("eventFormUpdate");
const eventList = document.querySelector(".event-list");

let editIndex = null;

function getEvents() {
  return JSON.parse(localStorage.getItem("events")) || [];
}

function saveEvents(events) {
  localStorage.setItem("events", JSON.stringify(events));
}

function getTagColor(type) {
  switch (type) {
    case "Học thuật":
      return "blue";
    case "Kiểm tra":
      return "red";
    case "Họp":
      return "purple";
    case "Nghỉ lễ":
      return "green";
    default:
      return "gray";
  }
}

// ------------------ HÀM XỬ LÝ NGÀY ------------------
function toISODateString(dateStr) {
  if (!dateStr) return null;
  dateStr = dateStr.trim();

  if (dateStr.includes("/")) {
    const [d, m, y] = dateStr.split("/");
    return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
  }

  if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) return dateStr;

  const parsed = new Date(dateStr);
  if (!isNaN(parsed)) {
    const y = parsed.getFullYear();
    const m = String(parsed.getMonth() + 1).padStart(2, "0");
    const d = String(parsed.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  return null;
}

function getEventStatus(dateStr) {
  const iso = toISODateString(dateStr);
  if (!iso) return { class: "upcoming", text: "Sắp tới" };

  const eventDate = new Date(iso + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (eventDate < today) {
    return { class: "ended", text: "Đã kết thúc" };
  } else {
    return { class: "upcoming", text: "Sắp tới" };
  }
}

function getTagEvent(dateStr) {
  const status = getEventStatus(dateStr);
  switch (status.text) {
    case "Đã kết thúc":
      return "gray";
    case "Sắp tới":
      return "blue";
  }
}

function renderEvents() {
  const events = getEvents();
  eventList.innerHTML = "";

  events.forEach((ev, index) => {
    const div = document.createElement("div");
    div.classList.add(`listevent`, `${getTagEvent(ev.date)}`);

    const status = getEventStatus(ev.date);

    div.innerHTML = `
      <div class="event-content">
        <div class="eventlist-header">
          <h3>${ev.name}</h3>
          <span class="tag ${getTagColor(ev.type)}">${ev.type}</span>
          <span class="status ${status.class}">${status.text}</span>
        </div>
        <p>${ev.desc}</p>
        <div class="eventlist-footer">
          <i class="fa-regular fa-calendar"></i>
          <span>${ev.date}</span>
          <i class="fa-regular fa-clock"></i>
          <span>${ev.time}</span>
        </div>
      </div>
      <div class="eventlist-actions">
        <button class="edit editEvent" data-index="${index}">
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button class="delete deleteEvent" data-index="${index}">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `;
    eventList.appendChild(div);
  });

  attachEventButtons();
}

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("event-name").value.trim();
  const desc = document.getElementById("event-description").value.trim();
  const date = document.getElementById("event-date").value.trim();
  const time = document.getElementById("event-time").value.trim();
  const typeInput = document.querySelector(
    "#eventModal input[name='type']:checked"
  );
  const type = typeInput ? typeInput.nextElementSibling.textContent : "Khác";

  if (!name || !date || !time) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const events = getEvents();
  events.push({ name, desc, date, time, type });
  saveEvents(events);

  renderEvents();
  eventForm.reset();

  document.getElementById("eventModal").style.display = "none";
  document.getElementById("overlayevent").style.display = "none";
});

function attachEventButtons() {
  document.querySelectorAll(".editEvent").forEach((btn) => {
    btn.onclick = () => {
      const index = parseInt(btn.dataset.index);
      const events = getEvents();
      const ev = events[index];
      editIndex = index;

      document.getElementById("event-nameUpdate").value = ev.name;
      document.getElementById("event-descriptionUpdate").value = ev.desc;
      document.getElementById("event-dateUpdate").value = ev.date;
      document.getElementById("event-timeUpdate").value = ev.time;

      document
        .querySelectorAll("#eventModalUpdate input[name='type']")
        .forEach((input) => {
          input.checked = input.nextElementSibling.textContent === ev.type;
        });

      document.getElementById("eventModalUpdate").style.display = "block";
      document.getElementById("overlayevent").style.display = "block";
    };
  });

  document.querySelectorAll(".deleteEvent").forEach((btn) => {
    btn.onclick = () => {
      const index = parseInt(btn.dataset.index);
      const events = getEvents();
      if (confirm("Bạn có chắc muốn xoá sự kiện này không?")) {
        events.splice(index, 1);
        saveEvents(events);
        renderEvents();
      }
    };
  });
}

eventFormUpdate.addEventListener("submit", (e) => {
  e.preventDefault();

  if (editIndex === null) return; // Không có sự kiện nào đang sửa

  const name = document.getElementById("event-nameUpdate").value.trim();
  const desc = document.getElementById("event-descriptionUpdate").value.trim();
  const date = document.getElementById("event-dateUpdate").value.trim();
  const time = document.getElementById("event-timeUpdate").value.trim();
  const typeInput = document.querySelector(
    "#eventModalUpdate input[name='type']:checked"
  );
  const type = typeInput ? typeInput.nextElementSibling.textContent : "Khác";

  const events = getEvents();
  events[editIndex] = { name, desc, date, time, type }; // cập nhật đúng index
  saveEvents(events);

  renderEvents();
  eventFormUpdate.reset();
  editIndex = null;

  document.getElementById("eventModalUpdate").style.display = "none";
  document.getElementById("overlayevent").style.display = "none";
});

document.addEventListener("DOMContentLoaded", renderEvents);
