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
