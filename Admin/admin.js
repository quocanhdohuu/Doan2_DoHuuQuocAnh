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

// Xử lý hiện form thêm lịch học
const addscheduleBtn = document.querySelector(".addschedule-btn");
const scheduleModal = document.getElementById("scheduleModal");
const closeScheduleBtn = document.getElementById("closeScheduleBtn");
const overlaySchedule = document.getElementById("overlaySchedule");

addscheduleBtn.addEventListener("click", () => {
  scheduleModal.style.display = "block";
  overlaySchedule.style.display = "block";
});
closeScheduleBtn.addEventListener("click", () => {
  scheduleModal.style.display = "none";
  overlaySchedule.style.display = "none";
});

overlaySchedule.addEventListener("click", () => {
  scheduleModal.style.display = "none";
  overlaySchedule.style.display = "none";
});
// Xử lý hiện form sửa lịch học
const scheduleModalUpdate = document.getElementById("scheduleModalUpdate");
const closeScheduleBtnUpdate = document.getElementById(
  "closeScheduleBtnUpdate"
);
const editschedule = document.querySelectorAll(".editschedule");

editschedule.forEach((button) => {
  button.addEventListener("click", () => {
    scheduleModalUpdate.style.display = "block";
    overlaySchedule.style.display = "block";
  });
});

closeScheduleBtnUpdate.addEventListener("click", () => {
  scheduleModalUpdate.style.display = "none";
  overlaySchedule.style.display = "none";
});

overlaySchedule.addEventListener("click", () => {
  scheduleModalUpdate.style.display = "none";
  overlaySchedule.style.display = "none";
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

//xử lý QL Lớp học và QL giáo viên

document.addEventListener("DOMContentLoaded", () => {
  // -------------------- STORAGE HELPERS --------------------
  const getTeachers = () =>
    JSON.parse(localStorage.getItem("teachers") || "[]");
  const setTeachers = (data) =>
    localStorage.setItem("teachers", JSON.stringify(data));

  const getClasses = () => JSON.parse(localStorage.getItem("classes") || "[]");
  const setClasses = (data) =>
    localStorage.setItem("classes", JSON.stringify(data));

  // -------------------- TOAST FUNCTION --------------------
  function showToast(type = "success", message = "") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 50);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // -------------------- RENDER FUNCTIONS --------------------
  function renderClasses() {
    const tbody = document.querySelector("#class .class-table tbody");
    const classes = getClasses();
    tbody.innerHTML = "";

    classes.forEach((cls, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${cls.name}</td>
        <td>${cls.grade}</td>
        <td>${cls.homeroom || "Chưa có"}</td>
        <td>${cls.size}</td>
        <td>${cls.room}</td>
        <td><span class="status activeclass">Hoạt động</span></td>
        <td class="actions">
          <button class="edit editClass" data-index="${i}">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
    updateTeacherClassCheckbox();
  }

  function renderTeachers() {
    const tbody = document.querySelector("#teacher .class-table tbody");
    const teachers = getTeachers();
    tbody.innerHTML = "";

    teachers.forEach((t, i) => {
      const classesHTML = t.classes
        .map((c) => `<span class="status activeclass1">${c}</span>`)
        .join(" ");
      const cnHTML = t.isCN
        ? `<span class="status activeclass">${t.classes[0] || ""}</span>`
        : "Không";
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${t.name}</td>
        <td>${t.email}</td>
        <td>${t.phone}</td>
        <td>${t.subject}</td>
        <td>${classesHTML}</td>
        <td>${cnHTML}</td>
        <td><span class="status activeclass">Hoạt động</span></td>
        <td class="actions">
          <button class="edit editTeacher" data-index="${i}">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="delete deleteTeacher" data-index="${i}">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
    updateGVCNSelect();
  }

  function updateGVCNSelect() {
    const selects = [
      document.getElementById("GVCN-class"),
      document.getElementById("GVCN-classUpdate"),
    ];
    const teachers = getTeachers();
    selects.forEach((sel) => {
      sel.innerHTML = `<option value="">Chọn giáo viên</option>`;
      teachers.forEach((t) => {
        const opt = document.createElement("option");
        opt.value = t.name;
        opt.textContent = t.name;
        sel.appendChild(opt);
      });
    });
  }

  function updateTeacherClassCheckbox() {
    const classList = getClasses().map((c) => c.name);
    const areas = [
      document.getElementById("teacherClass"),
      document.getElementById("teacherClassUpdate"),
    ];
    areas.forEach((area) => {
      area.innerHTML = "";
      classList.forEach((cls) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="checkbox" value="${cls}"> ${cls}`;
        area.appendChild(label);
      });
    });
  }

  // -------------------- CLASS FORM --------------------
  const addClassBtn = document.querySelector(".addclass-btn");
  const overlayClass = document.getElementById("overlayclass");
  const modalClass = document.getElementById("classModal");
  const modalClassUpdate = document.getElementById("classModalUpdate");

  addClassBtn.onclick = () => {
    modalClass.style.display = "block";
    overlayClass.style.display = "block";
    updateGVCNSelect();
    document.getElementById("classForm").reset();
  };

  document.getElementById("closeClassBtn").onclick = () => {
    modalClass.style.display = "none";
    overlayClass.style.display = "none";
  };
  document.getElementById("closeClassBtnUpdate").onclick = () => {
    modalClassUpdate.style.display = "none";
    overlayClass.style.display = "none";
  };

  document.getElementById("classForm").onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("className").value.trim();
    const grade = document.getElementById("Khoi").value;
    const homeroom = document.getElementById("GVCN-class").value;
    const size = document.getElementById("siso").value;
    const room = document.getElementById("classroom").value.trim();

    if (!name || !grade || !size || !room) {
      showToast("warning", "Vui lòng nhập đầy đủ thông tin lớp học!");
      return;
    }

    const classes = getClasses();
    if (classes.some((c) => c.name.toLowerCase() === name.toLowerCase())) {
      showToast("error", "Tên lớp đã tồn tại!");
      return;
    }

    classes.push({ name, grade, homeroom, size, room });
    setClasses(classes);
    modalClass.style.display = "none";
    overlayClass.style.display = "none";
    renderClasses();
    showToast("success", "Thêm lớp học thành công!");
  };

  document.querySelector("#class .class-table").onclick = (e) => {
    if (e.target.closest(".editClass")) {
      const index = e.target.closest(".editClass").dataset.index;
      const classes = getClasses();
      const cls = classes[index];
      document.getElementById("classNameUpdate").value = cls.name;
      document.getElementById("KhoiUpdate").value = cls.grade;
      document.getElementById("sisoUpdate").value = cls.size;
      document.getElementById("classroomUpdate").value = cls.room;
      updateGVCNSelect();
      document.getElementById("GVCN-classUpdate").value = cls.homeroom;

      modalClassUpdate.style.display = "block";
      overlayClass.style.display = "block";

      document.getElementById("classFormUpdate").onsubmit = (ev) => {
        ev.preventDefault();
        const newName = document.getElementById("classNameUpdate").value.trim();
        const grade = document.getElementById("KhoiUpdate").value;
        const homeroom = document.getElementById("GVCN-classUpdate").value;
        const size = document.getElementById("sisoUpdate").value;
        const room = document.getElementById("classroomUpdate").value.trim();

        if (!newName || !grade || !size || !room) {
          showToast("warning", "Vui lòng nhập đầy đủ thông tin lớp học!");
          return;
        }

        if (
          classes.some(
            (c, i) =>
              i !== +index && c.name.toLowerCase() === newName.toLowerCase()
          )
        ) {
          showToast("error", "Tên lớp đã tồn tại!");
          return;
        }

        classes[index] = { name: newName, grade, homeroom, size, room };
        setClasses(classes);
        modalClassUpdate.style.display = "none";
        overlayClass.style.display = "none";
        renderClasses();
        showToast("success", "Cập nhật lớp học thành công!");
      };
    }
  };

  // -------------------- TEACHER FORM --------------------
  const addTeacherBtn = document.querySelector(".addteacher-btn");
  const overlayTeacher = document.getElementById("overlayteacher");
  const modalTeacher = document.getElementById("teacherModal");
  const modalTeacherUpdate = document.getElementById("teacherModalUpdate");

  addTeacherBtn.onclick = () => {
    modalTeacher.style.display = "block";
    overlayTeacher.style.display = "block";
    updateTeacherClassCheckbox();
    document.getElementById("teacherForm").reset();
    document
      .querySelectorAll("#teacherClass input")
      .forEach((b) => (b.checked = false));
  };

  document.getElementById("closeTeacherBtn").onclick = () => {
    modalTeacher.style.display = "none";
    overlayTeacher.style.display = "none";
  };
  document.getElementById("closeTeacherBtnUpdate").onclick = () => {
    modalTeacherUpdate.style.display = "none";
    overlayTeacher.style.display = "none";
  };

  document.getElementById("teacherForm").onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("teacherName").value.trim();
    const email = document.getElementById("teacherEmail").value.trim();
    const phone = document.getElementById("teacherSDT").value.trim();
    const subject = document.getElementById("teacherSubject").value;
    const classes = Array.from(
      document.querySelectorAll("#teacherClass input:checked")
    ).map((c) => c.value);
    const isCN = document.querySelector(".teacherCN").checked;

    if (!name || !email || !phone || !subject) {
      showToast("warning", "Vui lòng nhập đầy đủ thông tin giáo viên!");
      return;
    }

    const teachers = getTeachers();
    if (teachers.some((t) => t.email.toLowerCase() === email.toLowerCase())) {
      showToast("error", "Email giáo viên đã tồn tại!");
      return;
    }

    teachers.push({ name, email, phone, subject, classes, isCN });
    setTeachers(teachers);
    modalTeacher.style.display = "none";
    overlayTeacher.style.display = "none";
    renderTeachers();
    showToast("success", "Thêm giáo viên thành công!");
  };

  document.querySelector("#teacher .class-table").onclick = (e) => {
    const editBtn = e.target.closest(".editTeacher");
    const deleteBtn = e.target.closest(".deleteTeacher");
    const teachers = getTeachers();

    if (editBtn) {
      const index = editBtn.dataset.index;
      const t = teachers[index];
      document.getElementById("teacherNameUpdate").value = t.name;
      document.getElementById("teacherEmailUpdate").value = t.email;
      document.getElementById("teacherSDTUpdate").value = t.phone;
      document.getElementById("teacherSubjectUpdate").value = t.subject;
      updateTeacherClassCheckbox();
      const boxes = document.querySelectorAll("#teacherClassUpdate input");
      boxes.forEach((b) => (b.checked = t.classes.includes(b.value)));
      document.querySelector(".teacherCNUpdate").checked = t.isCN;

      modalTeacherUpdate.style.display = "block";
      overlayTeacher.style.display = "block";

      document.getElementById("teacherFormUpdate").onsubmit = (ev) => {
        ev.preventDefault();
        const newName = document
          .getElementById("teacherNameUpdate")
          .value.trim();
        const newEmail = document
          .getElementById("teacherEmailUpdate")
          .value.trim();
        const newPhone = document
          .getElementById("teacherSDTUpdate")
          .value.trim();
        const newSubject = document.getElementById(
          "teacherSubjectUpdate"
        ).value;
        const newClasses = Array.from(
          document.querySelectorAll("#teacherClassUpdate input:checked")
        ).map((c) => c.value);
        const newCN = document.querySelector(".teacherCNUpdate").checked;

        if (!newName || !newEmail || !newPhone || !newSubject) {
          showToast("warning", "Vui lòng nhập đầy đủ thông tin giáo viên!");
          return;
        }

        if (
          teachers.some(
            (t, i) =>
              i !== +index && t.email.toLowerCase() === newEmail.toLowerCase()
          )
        ) {
          showToast("error", "Email giáo viên đã tồn tại!");
          return;
        }

        teachers[index] = {
          name: newName,
          email: newEmail,
          phone: newPhone,
          subject: newSubject,
          classes: newClasses,
          isCN: newCN,
        };
        setTeachers(teachers);
        modalTeacherUpdate.style.display = "none";
        overlayTeacher.style.display = "none";
        renderTeachers();
        showToast("success", "Cập nhật giáo viên thành công!");
      };
    }

    if (deleteBtn) {
      const index = deleteBtn.dataset.index;
      if (confirm("Bạn có chắc muốn xóa giáo viên này?")) {
        teachers.splice(index, 1);
        setTeachers(teachers);
        renderTeachers();
        showToast("success", "Đã xóa giáo viên!");
      }
    }
  };

  // -------------------- INITIAL RENDER --------------------
  renderClasses();
  renderTeachers();
});

// Xử lý Quản lý học sinh
document.addEventListener("DOMContentLoaded", () => {
  // -------------------- STORAGE HELPERS --------------------
  const getClasses = () => JSON.parse(localStorage.getItem("classes") || "[]");
  const getStudents = () =>
    JSON.parse(localStorage.getItem("students") || "[]");
  const setStudents = (data) =>
    localStorage.setItem("students", JSON.stringify(data));

  // -------------------- TOAST --------------------
  function showToast(type = "success", message = "") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 50);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // -------------------- CẬP NHẬT SELECT LỚP --------------------
  function updateClassSelectOptions() {
    const selectFilters = document.querySelector(".student-actions select");
    const formSelects = [
      document.getElementById("studentClass"),
      document.getElementById("updateClass"),
    ];
    const classes = getClasses();

    // Load dropdown lọc
    if (selectFilters) {
      selectFilters.innerHTML = `<option value="">Tất cả các lớp</option>`;
      classes.forEach((c) => {
        const opt = document.createElement("option");
        opt.value = c.name;
        opt.textContent = c.name;
        selectFilters.appendChild(opt);
      });
    }

    // Load dropdown trong form
    formSelects.forEach((sel) => {
      if (!sel) return;
      sel.innerHTML = `<option value="">Chọn lớp</option>`;
      classes.forEach((c) => {
        const opt = document.createElement("option");
        opt.value = c.name;
        opt.textContent = c.name;
        sel.appendChild(opt);
      });
    });
  }

  // -------------------- FORMAT NGÀY --------------------
  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${d.getFullYear()}`;
  }

  // -------------------- HIỂN THỊ DANH SÁCH HỌC SINH --------------------
  function renderStudents(filterClass = "", keyword = "") {
    const tbody = document.querySelector(".student-table tbody");
    const students = getStudents();
    tbody.innerHTML = "";

    let filtered = students;

    // Lọc theo lớp
    if (filterClass) {
      filtered = filtered.filter((s) => s.class === filterClass);
    }

    // Lọc theo từ khóa tìm kiếm
    if (keyword) {
      const lower = keyword.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(lower) ||
          s.parent.toLowerCase().includes(lower)
      );
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;">Không có học sinh nào!</td></tr>`;
      return;
    }

    filtered.forEach((s, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${s.name}</td>
        <td>${s.class}</td>
        <td>${formatDate(s.dob)}</td>
        <td>${s.parent}</td>
        <td>${s.phone}</td>
        <td>${s.address}</td>
        <td><span class="status active">Đang học</span></td>
        <td class="actions">
          <button class="edit editStudent" data-index="${index}">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="delete deleteStudent" data-index="${index}">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // -------------------- FORM THÊM --------------------
  const addBtn = document.querySelector(".add-btn");
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("studentModal");
  const closeBtn = document.getElementById("closeBtn");

  addBtn.onclick = () => {
    updateClassSelectOptions();
    modal.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("studentForm").reset();
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  };

  document.getElementById("studentForm").onsubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const cls = document.getElementById("studentClass").value;
    const dob = document.getElementById("studentDOB").value;
    const parent = document.getElementById("studentParent").value.trim();
    const phone = document.getElementById("studentPhone").value.trim();
    const address = document.getElementById("studentAddress").value.trim();

    if (!name || !cls || !dob || !parent || !phone || !address) {
      showToast("warning", "Vui lòng nhập đầy đủ thông tin học sinh!");
      return;
    }

    const students = getStudents();
    // Kiểm tra trùng tên trong cùng lớp
    if (students.some((s) => s.name === name && s.class === cls)) {
      showToast("error", "Học sinh này đã tồn tại trong lớp!");
      return;
    }

    students.push({ name, class: cls, dob, parent, phone, address });
    setStudents(students);

    modal.style.display = "none";
    overlay.style.display = "none";
    renderStudents();
    showToast("success", "Thêm học sinh thành công!");
  };

  // -------------------- FORM SỬA + XOÁ --------------------
  const updateModal = document.getElementById("studentModalUpdate");
  const closeUpdateBtn = document.getElementById("closeBtnUpdate");
  closeUpdateBtn.onclick = () => {
    updateModal.style.display = "none";
    overlay.style.display = "none";
  };

  document.querySelector(".student-table").onclick = (e) => {
    const editBtn = e.target.closest(".editStudent");
    const deleteBtn = e.target.closest(".deleteStudent");
    const students = getStudents();

    // Sửa học sinh
    if (editBtn) {
      const index = editBtn.dataset.index;
      const s = students[index];
      updateClassSelectOptions();

      document.getElementById("updateName").value = s.name;
      document.getElementById("updateClass").value = s.class;
      document.getElementById("updateDOB").value = s.dob;
      document.getElementById("updateParent").value = s.parent;
      document.getElementById("updatePhone").value = s.phone;
      document.getElementById("updateAddress").value = s.address;

      updateModal.style.display = "block";
      overlay.style.display = "block";

      document.getElementById("studentFormUpdate").onsubmit = (ev) => {
        ev.preventDefault();
        const newName = document.getElementById("updateName").value.trim();
        const newClass = document.getElementById("updateClass").value;
        const newDOB = document.getElementById("updateDOB").value;
        const newParent = document.getElementById("updateParent").value.trim();
        const newPhone = document.getElementById("updatePhone").value.trim();
        const newAddress = document
          .getElementById("updateAddress")
          .value.trim();

        if (
          !newName ||
          !newClass ||
          !newDOB ||
          !newParent ||
          !newPhone ||
          !newAddress
        ) {
          showToast("warning", "Vui lòng nhập đầy đủ thông tin!");
          return;
        }

        // Kiểm tra trùng tên trong cùng lớp
        if (
          students.some(
            (s, i) => i !== +index && s.name === newName && s.class === newClass
          )
        ) {
          showToast("error", "Học sinh này đã tồn tại trong lớp!");
          return;
        }

        students[index] = {
          name: newName,
          class: newClass,
          dob: newDOB,
          parent: newParent,
          phone: newPhone,
          address: newAddress,
        };

        setStudents(students);
        updateModal.style.display = "none";
        overlay.style.display = "none";
        renderStudents();
        showToast("success", "Cập nhật học sinh thành công!");
      };
    }

    // Xóa học sinh
    if (deleteBtn) {
      const index = deleteBtn.dataset.index;
      if (confirm("Bạn có chắc muốn xóa học sinh này?")) {
        students.splice(index, 1);
        setStudents(students);
        renderStudents();
        showToast("success", "Đã xoá học sinh!");
      }
    }
  };

  // -------------------- TÌM KIẾM VÀ LỌC LỚP --------------------
  const searchInput = document.querySelector(".student-actions input");
  const classSelect = document.querySelector(".student-actions select");

  if (searchInput && classSelect) {
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.trim();
      const cls = classSelect.value;
      renderStudents(cls, keyword);
    });

    classSelect.addEventListener("change", () => {
      const keyword = searchInput.value.trim();
      const cls = classSelect.value;
      renderStudents(cls, keyword);
    });
  }

  // -------------------- KHỞI TẠO --------------------
  updateClassSelectOptions();
  renderStudents();
});

// xử lý QL lịch học
// schedule.js — rewritten to match your HTML exactly
document.addEventListener("DOMContentLoaded", () => {
  // ---------- Helpers for localStorage ----------
  const getClasses = () => JSON.parse(localStorage.getItem("classes") || "[]");
  const getTeachers = () =>
    JSON.parse(localStorage.getItem("teachers") || "[]");
  const getSchedule = () =>
    JSON.parse(localStorage.getItem("schedule") || "{}");
  const setSchedule = (s) =>
    localStorage.setItem("schedule", JSON.stringify(s));

  // ---------- Normalizers ----------
  function normalizeClassName(raw) {
    // Accept either "Lớp 1A" or "1A" if some data used different format.
    if (!raw) return "";
    return raw.replace(/\s*Lớp\s*/i, "").trim(); // store internal as "1A"
  }
  function normalizeLesson(raw) {
    // From "Tiết 1 (07:00 - 07:35)" => "Tiết 1"
    if (!raw) return "";
    const parts = raw.split(" ");
    return parts.length >= 2 ? parts[0] + " " + parts[1] : raw;
  }

  // ---------- DOM refs (match your HTML) ----------
  const headerClassSelect = document.querySelector(
    "#schedule .schedule-actions select"
  );
  const totalLessonsEl = document.querySelector(".schedule-header h4");
  const addBtn = document.querySelector(".addschedule-btn");
  const modalAdd = document.getElementById("scheduleModal");
  const modalUpdate = document.getElementById("scheduleModalUpdate");
  const overlay = document.getElementById("overlaySchedule");

  // Add form fields
  const fld_add_class = document.getElementById("schedule-Class");
  const fld_add_day = document.getElementById("schedule-dayofweek");
  const fld_add_lesson = document.getElementById("schedule-lesson");
  const fld_add_subject = document.getElementById("schedule-subject");
  const fld_add_teacher = document.getElementById("schedule-addteacher");
  const fld_add_room = document.getElementById("schedule-addroom");
  const formAdd = document.getElementById("scheduleForm");

  // Update form fields
  const fld_up_class = document.getElementById("schedule-ClassUpdate");
  const fld_up_day = document.getElementById("schedule-dayofweekUpdate");
  const fld_up_lesson = document.getElementById("schedule-lessonUpdate");
  const fld_up_subject = document.getElementById("schedule-subjectUpdate");
  const fld_up_teacher = document.getElementById("schedule-teacherUpdate");
  const fld_up_room = document.getElementById("schedule-roomUpdate");
  const formUpdate = document.getElementById("scheduleFormUpdate");

  // Table rows (we will write into these cells)
  const tableRows = document.querySelectorAll(".schedule-table tbody tr");

  // ---------- Utility: populate class selects (normalizing to "1A" format) ----------
  function populateClassSelects() {
    const classes = getClasses().map((c) =>
      (typeof c === "string" ? c : c.name || "")
        .replace(/\s*Lớp\s*/i, "")
        .trim()
    );
    // header select (first select in schedule-actions)
    if (headerClassSelect) {
      headerClassSelect.innerHTML = `<option value="">Tất cả các lớp</option>`;
      classes.forEach(
        (c) =>
          (headerClassSelect.innerHTML += `<option value="${c}">${c}</option>`)
      );
    }
    // add/update modal selects
    if (fld_add_class) {
      fld_add_class.innerHTML = "";
      classes.forEach(
        (c) => (fld_add_class.innerHTML += `<option value="${c}">${c}</option>`)
      );
    }
    if (fld_up_class) {
      fld_up_class.innerHTML = "";
      classes.forEach(
        (c) => (fld_up_class.innerHTML += `<option value="${c}">${c}</option>`)
      );
    }
  }

  // ---------- Render schedule (for selected class or all) ----------
  function clearTableCells() {
    tableRows.forEach((row, rowIndex) => {
      const cells = row.querySelectorAll("td");
      // cells[0] is "Tiết / time"; days are cells[1..5]
      for (let j = 1; j <= 5; j++) cells[j].innerHTML = "";
    });
  }

  function renderSchedule() {
    clearTableCells();
    const schedule = getSchedule();
    const selectedClass = headerClassSelect ? headerClassSelect.value : "";

    // if selectedClass empty => don't display anything (we keep table empty) OR we can choose to display first class
    if (!selectedClass) {
      updateTotalLessons();
      return;
    }

    const list = schedule[selectedClass] || [];
    // put each item into appropriate cell (row = lessonIndex, col = dayIndex+1)
    list.forEach((item, idx) => {
      const lessonText = normalizeLesson(item.lesson);
      // lesson like "Tiết 1" => index 0
      const lessonIndex = parseInt(lessonText.replace("Tiết ", "")) - 1;
      // day like "Thứ 2" => index 1 for Thứ 2 -> dayIndex = 1? we want col 1 = Thứ2
      const dayIndex = parseInt(item.day.replace("Thứ ", "")) - 1; // 0..4
      if (isNaN(lessonIndex) || isNaN(dayIndex)) return;
      const row = tableRows[lessonIndex];
      if (!row) return;
      const cell = row.querySelectorAll("td")[dayIndex];
      if (!cell) return;

      // create inner HTML
      cell.innerHTML = `
        <div class="schedule-lesson">
          <strong>${item.subject}</strong>
          <div class="schedule-teacher">${item.teacher}</div>
          <span class="badge schedule-room">${item.room}</span>
          <div class="schedule-table-actions">
            <button class="editschedule" data-index="${idx}"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="deleteschedule" data-index="${idx}"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      `;
    });

    updateTotalLessons();
  }

  // ---------- Total lessons update ----------
  function updateTotalLessons() {
    const schedule = getSchedule();
    const selectedClass = headerClassSelect ? headerClassSelect.value : "";
    const total = selectedClass ? (schedule[selectedClass] || []).length : 0;
    if (totalLessonsEl) totalLessonsEl.textContent = `${total} tiết/tuần`;
  }

  // ---------- Duplicate check ----------
  // We standardize both saved items and input using normalizeLesson and normalizeClassName
  function isDuplicate(clsRaw, day, lessonRaw, ignoreIndex = -1) {
    const cls = normalizeClassName(clsRaw);
    const lesson = normalizeLesson(lessonRaw);
    const schedule = getSchedule();
    if (!schedule[cls]) return false;
    return schedule[cls].some((it, idx) => {
      return (
        idx !== ignoreIndex &&
        it.day === day &&
        normalizeLesson(it.lesson) === lesson
      );
    });
  }
  // ---------- Teacher Busy Check ----------
  function isTeacherBusy(
    teacherName,
    day,
    lesson,
    ignoreClass = "",
    ignoreIndex = -1
  ) {
    const schedule = getSchedule();

    for (let cls in schedule) {
      const list = schedule[cls];

      for (let i = 0; i < list.length; i++) {
        const item = list[i];

        if (i === ignoreIndex && cls === ignoreClass) continue;

        if (
          item.teacher === teacherName &&
          item.day === day &&
          normalizeLesson(item.lesson) === normalizeLesson(lesson)
        ) {
          return true; // teacher is teaching somewhere else this period
        }
      }
    }

    return false;
  }

  // ---------- Add new lesson ----------
  formAdd &&
    formAdd.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const rawClass = fld_add_class ? fld_add_class.value : "";
      const cls = normalizeClassName(rawClass);
      const day = fld_add_day ? fld_add_day.value : "";
      const lesson = fld_add_lesson
        ? normalizeLesson(fld_add_lesson.value)
        : "";
      const subject = fld_add_subject ? fld_add_subject.value : "";
      const teacher = fld_add_teacher ? fld_add_teacher.value.trim() : "";
      const room = fld_add_room ? fld_add_room.value.trim() : "";

      if (!cls || !day || !lesson || !subject || !teacher || !room) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
      }

      if (isDuplicate(cls, day, lesson)) {
        alert("Tiết học này đã tồn tại cho lớp này (cùng thứ & cùng tiết).");
        return;
      }
      if (isTeacherBusy(teacher, day, lesson)) {
        alert("Giáo viên này đang dạy lớp khác trong cùng tiết này!");
        return;
      }

      const schedule = getSchedule();
      if (!schedule[cls]) schedule[cls] = [];
      schedule[cls].push({
        day,
        lesson,
        subject,
        teacher,
        room,
      });
      setSchedule(schedule);

      // close modal + refresh
      modalAdd.style.display = "none";
      overlay.style.display = "none";
      formAdd.reset();
      renderSchedule();
    });

  // ---------- Table click: edit / delete ----------
  document.querySelector(".schedule-table").addEventListener("click", (e) => {
    const editBtn = e.target.closest(".editschedule");
    const deleteBtn = e.target.closest(".deleteschedule");
    const selectedClass = headerClassSelect ? headerClassSelect.value : "";
    if (!selectedClass) return;

    const schedule = getSchedule();
    if (editBtn) {
      const idx = Number(editBtn.dataset.index);
      const item = schedule[selectedClass][idx];
      if (!item) return;

      // Pre-fill update modal (ensure lesson normalized)
      fld_up_class.value = selectedClass;
      fld_up_day.value = item.day;
      fld_up_lesson.value = item.lesson; // lesson shown as "Tiết X"
      fld_up_subject.value = item.subject;
      fld_up_teacher.value = item.teacher;
      fld_up_room.value = item.room;

      // Save index on formUpdate element for ignoreIndex
      formUpdate.dataset.editIndex = idx;

      modalUpdate.style.display = "block";
      overlay.style.display = "block";
    }

    if (deleteBtn) {
      const idx = Number(deleteBtn.dataset.index);
      if (!confirm("Bạn có chắc muốn xoá tiết học này?")) return;
      schedule[selectedClass].splice(idx, 1);
      setSchedule(schedule);
      renderSchedule();
    }
  });

  // ---------- Update form submit ----------
  formUpdate &&
    formUpdate.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const selectedClass = headerClassSelect ? headerClassSelect.value : "";
      if (!selectedClass) return;

      const editIndex = Number(formUpdate.dataset.editIndex);
      if (isNaN(editIndex)) return;

      const newClassRaw = fld_up_class ? fld_up_class.value : "";
      const newClass = normalizeClassName(newClassRaw);
      const newDay = fld_up_day ? fld_up_day.value : "";
      const newLesson = fld_up_lesson
        ? normalizeLesson(fld_up_lesson.value)
        : "";
      const newSubject = fld_up_subject ? fld_up_subject.value : "";
      const newTeacher = fld_up_teacher ? fld_up_teacher.value.trim() : "";
      const newRoom = fld_up_room ? fld_up_room.value.trim() : "";

      if (
        !newClass ||
        !newDay ||
        !newLesson ||
        !newSubject ||
        !newTeacher ||
        !newRoom
      ) {
        alert("Vui lòng nhập đầy đủ thông tin khi cập nhật!");
        return;
      }

      // When editing, ignore the current index in duplicate check.
      if (isDuplicate(newClass, newDay, newLesson, editIndex)) {
        alert("Trùng lịch khi cập nhật (cùng thứ & cùng tiết).");
        return;
      }
      if (isTeacherBusy(newTeacher, newDay, newLesson, newClass, editIndex)) {
        alert("Giáo viên này đang dạy lớp khác trong tiết này!");
        return;
      }
      // perform move (if class changed) or update in place
      const schedule = getSchedule();
      // remove original from selectedClass at editIndex
      const originalList = schedule[selectedClass] || [];
      const item = originalList[editIndex];
      if (!item) {
        alert("Không tìm thấy tiết để cập nhật.");
        modalUpdate.style.display = "none";
        overlay.style.display = "none";
        return;
      }

      // remove original
      originalList.splice(editIndex, 1);

      // ensure newClass array exists
      if (!schedule[newClass]) schedule[newClass] = [];
      schedule[newClass].push({
        day: newDay,
        lesson: newLesson,
        subject: newSubject,
        teacher: newTeacher,
        room: newRoom,
      });

      setSchedule(schedule);
      modalUpdate.style.display = "none";
      overlay.style.display = "none";
      formUpdate.reset();
      renderSchedule();
    });

  // ---------- Modal open/close handlers ----------
  addBtn &&
    addBtn.addEventListener("click", () => {
      populateClassSelects(); // refresh class list inside modal
      modalAdd.style.display = "block";
      overlay.style.display = "block";
      formAdd && formAdd.reset();
    });
  document.getElementById("closeScheduleBtn")?.addEventListener("click", () => {
    modalAdd.style.display = "none";
    overlay.style.display = "none";
  });
  document
    .getElementById("closeScheduleBtnUpdate")
    ?.addEventListener("click", () => {
      modalUpdate.style.display = "none";
      overlay.style.display = "none";
    });
  overlay &&
    overlay.addEventListener("click", () => {
      modalAdd.style.display = "none";
      modalUpdate.style.display = "none";
      overlay.style.display = "none";
    });

  // ---------- Autocomplete for teacher inputs ----------
  function setupAutocompleteForInput(inputEl) {
    // create dropdown container
    let box = document.createElement("div");
    box.className = "autocomplete-suggestions";
    box.style.position = "absolute";
    box.style.zIndex = "9999";
    box.style.background = "#fff";
    box.style.border = "1px solid #ddd";
    box.style.display = "none";
    document.body.appendChild(box);

    function positionBox() {
      const rect = inputEl.getBoundingClientRect();
      box.style.left = `${rect.left + window.scrollX}px`;
      box.style.top = `${rect.bottom + window.scrollY}px`;
      box.style.width = `${rect.width}px`;
    }

    inputEl.addEventListener("input", () => {
      const q = inputEl.value.trim().toLowerCase();
      box.innerHTML = "";
      if (!q) {
        box.style.display = "none";
        return;
      }
      const teachers = getTeachers();
      const matches = teachers
        .filter((t) => {
          // support both t.name / t.fullName / t.nameFull...
          const nm = (t.fullName || t.name || t.fullname || "").toLowerCase();
          return nm.includes(q);
        })
        .slice(0, 8);
      if (matches.length === 0) {
        box.style.display = "none";
        return;
      }
      matches.forEach((m) => {
        const div = document.createElement("div");
        div.className = "autocomplete-item";
        div.textContent = m.fullName || m.name;
        div.style.padding = "6px";
        div.style.cursor = "pointer";
        div.addEventListener("click", () => {
          inputEl.value = div.textContent;
          box.style.display = "none";
        });
        box.appendChild(div);
      });
      positionBox();
      box.style.display = "block";
    });

    window.addEventListener("resize", positionBox);
    window.addEventListener("scroll", positionBox);
    document.addEventListener("click", (ev) => {
      if (ev.target !== inputEl) box.style.display = "none";
    });
  }

  // attach to both add and update teacher inputs
  if (fld_add_teacher) setupAutocompleteForInput(fld_add_teacher);
  if (fld_up_teacher) setupAutocompleteForInput(fld_up_teacher);

  // ---------- header select change ----------
  headerClassSelect &&
    headerClassSelect.addEventListener("change", () => {
      renderSchedule();
    });

  // ---------- init ----------
  populateClassSelects();
  renderSchedule();
  updateTotalLessons();
});
