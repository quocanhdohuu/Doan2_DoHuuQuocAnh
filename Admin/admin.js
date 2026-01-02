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

// // Xử lý hiện form thêm học sinh
// const addBtn = document.querySelector(".add-btn");
// const modal = document.getElementById("studentModal");
// const overlay = document.getElementById("overlay");
// const closeBtn = document.getElementById("closeBtn");

// addBtn.addEventListener("click", () => {
//   modal.style.display = "block";
//   overlay.style.display = "block";
// });

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none";
//   overlay.style.display = "none";
// });

// overlay.addEventListener("click", () => {
//   modal.style.display = "none";
//   overlay.style.display = "none";
// });

// // Xử lý hiện form cập nhật thông tin học sinh
// const modalUpdate = document.getElementById("studentModalUpdate");
// const closeBtnUpdate = document.getElementById("closeBtnUpdate");
// const editButtons = document.querySelectorAll(".editStudent");

// editButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     modalUpdate.style.display = "block"; // Hiện form
//     overlay.style.display = "block";
//   });
// });

// closeBtnUpdate.addEventListener("click", () => {
//   modalUpdate.style.display = "none";
//   overlay.style.display = "none";
// });

// overlay.addEventListener("click", () => {
//   modalUpdate.style.display = "none";
//   overlay.style.display = "none";
// });

// // Xử lý hiện form thêm lớp
// const addClassBtn = document.querySelector(".addclass-btn");
// const classModal = document.getElementById("classModal");
// const closeClassBtn = document.getElementById("closeClassBtn");
// const overlayclass = document.getElementById("overlayclass");

// addClassBtn.addEventListener("click", () => {
//   classModal.style.display = "block";
//   overlayclass.style.display = "block";
// });

// closeClassBtn.addEventListener("click", () => {
//   classModal.style.display = "none";
//   overlayclass.style.display = "none";
// });

// overlayclass.addEventListener("click", () => {
//   classModal.style.display = "none";
//   overlayclass.style.display = "none";
// });

// // Xử lý hiện form cập nhật thông tin lớp học
// const classModalUpdate = document.getElementById("classModalUpdate");
// const closeClassBtnUpdate = document.getElementById("closeClassBtnUpdate");
// const editclassBtn = document.querySelectorAll(".editClass");

// editclassBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     classModalUpdate.style.display = "block";
//     overlayclass.style.display = "block";
//   });
// });

// closeClassBtnUpdate.addEventListener("click", () => {
//   classModalUpdate.style.display = "none";
//   overlayclass.style.display = "none";
// });

// overlayclass.addEventListener("click", () => {
//   classModalUpdate.style.display = "none";
//   overlayclass.style.display = "none";
// });

// // Xử lý hiện form thêm giáo viên
// const addTeacherBtn = document.querySelector(".addteacher-btn");
// const teacherModal = document.getElementById("teacherModal");
// const closeTeacherBtn = document.getElementById("closeTeacherBtn");
// const overlayteacher = document.getElementById("overlayteacher");

// addTeacherBtn.addEventListener("click", () => {
//   teacherModal.style.display = "block";
//   overlayteacher.style.display = "block";
// });

// closeTeacherBtn.addEventListener("click", () => {
//   teacherModal.style.display = "none";
//   overlayteacher.style.display = "none";
// });

// overlayteacher.addEventListener("click", () => {
//   teacherModal.style.display = "none";
//   overlayteacher.style.display = "none";
// });
// // Xử lý hiện form sửa thông tin giáo viên
// const teacherModalUpdate = document.getElementById("teacherModalUpdate");
// const closeTeacherBtnUpdate = document.getElementById("closeTeacherBtnUpdate");
// const editteacherBtn = document.querySelectorAll(".editTeacher");

// editteacherBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     teacherModalUpdate.style.display = "block";
//     overlayteacher.style.display = "block";
//   });
// });

// closeTeacherBtnUpdate.addEventListener("click", () => {
//   teacherModalUpdate.style.display = "none";
//   overlayteacher.style.display = "none";
// });

// overlayteacher.addEventListener("click", () => {
//   teacherModalUpdate.style.display = "none";
//   overlayteacher.style.display = "none";
// });

// // Xử lý hiện form thêm lịch học
// const addscheduleBtn = document.querySelector(".addschedule-btn");
// const scheduleModal = document.getElementById("scheduleModal");
// const closeScheduleBtn = document.getElementById("closeScheduleBtn");
// const overlaySchedule = document.getElementById("overlaySchedule");

// addscheduleBtn.addEventListener("click", () => {
//   scheduleModal.style.display = "block";
//   overlaySchedule.style.display = "block";
// });
// closeScheduleBtn.addEventListener("click", () => {
//   scheduleModal.style.display = "none";
//   overlaySchedule.style.display = "none";
// });

// overlaySchedule.addEventListener("click", () => {
//   scheduleModal.style.display = "none";
//   overlaySchedule.style.display = "none";
// });
// // Xử lý hiện form sửa lịch học
// const scheduleModalUpdate = document.getElementById("scheduleModalUpdate");
// const closeScheduleBtnUpdate = document.getElementById(
//   "closeScheduleBtnUpdate"
// );
// const editschedule = document.querySelectorAll(".editschedule");

// editschedule.forEach((button) => {
//   button.addEventListener("click", () => {
//     scheduleModalUpdate.style.display = "block";
//     overlaySchedule.style.display = "block";
//   });
// });

// closeScheduleBtnUpdate.addEventListener("click", () => {
//   scheduleModalUpdate.style.display = "none";
//   overlaySchedule.style.display = "none";
// });

// overlaySchedule.addEventListener("click", () => {
//   scheduleModalUpdate.style.display = "none";
//   overlaySchedule.style.display = "none";
// });

// // Xử lý hiện form thêm sự kiện
// const addEventBtn = document.querySelector(".addevent-btn");
// const eventModal = document.getElementById("eventModal");
// const closeEventBtn = document.getElementById("closeEventBtn");
// const overlayevent = document.getElementById("overlayevent");

// addEventBtn.addEventListener("click", () => {
//   eventModal.style.display = "block";
//   overlayevent.style.display = "block";
// });
// closeEventBtn.addEventListener("click", () => {
//   eventModal.style.display = "none";
//   overlayevent.style.display = "none";
// });

// overlayevent.addEventListener("click", () => {
//   eventModal.style.display = "none";
//   overlayevent.style.display = "none";
// });

// // Xử lý hiện form cập nhật thông tin sự kiện
// const eventModalUpdate = document.getElementById("eventModalUpdate");
// const closeEventBtnUpdate = document.getElementById("closeEventBtnUpdate");
// const editEventBtn = document.querySelectorAll(".editEvent");

// editEventBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     eventModalUpdate.style.display = "block";
//     overlayevent.style.display = "block";
//   });
// });

// closeEventBtnUpdate.addEventListener("click", () => {
//   eventModalUpdate.style.display = "none";
//   overlayevent.style.display = "none";
// });

// overlayevent.addEventListener("click", () => {
//   eventModalUpdate.style.display = "none";
//   overlayevent.style.display = "none";
// });

// Load dữ liệu API trang Overview
$(document).ready(function () {
  loadTotalStudents();
  loadTotalTeachers();
  loadTotalClasses();
  loadTotalAttendences();
});

function loadTotalStudents() {
  $.ajax({
    url: "https://localhost:7010/api-doan2/QLHocSinh/Student_GetTotal",
    type: "GET",
    success: function (res) {
      $("#totalStudents").text(res.totalStudents);
    },
    error: function (err) {
      console.error("Lỗi khi load tổng học sinh", err);
      $("#totalStudents").text("0");
    },
  });
}

function loadTotalTeachers() {
  $.ajax({
    url: "https://localhost:7010/api-doan2/QLGiaoVien/Teacher_GetTotal",
    type: "GET",
    success: function (res) {
      $("#totalTeachers").text(res.totalTeachers);
    },
    error: function (err) {
      console.error("Lỗi khi load tổng giáo viên", err);
      $("#totalTeachers").text("0");
    },
  });
}

function loadTotalClasses() {
  $.ajax({
    url: "https://localhost:7010/api-doan2/QLLopHoc/Class_GetTotal",
    type: "GET",
    success: function (res) {
      $("#totalClasses").text(res.totalClasses);
    },
    error: function (err) {
      console.error("Lỗi khi load tổng lớp học", err);
      $("#totalClasses").text("0");
    },
  });
}

function loadTotalAttendences() {
  $.ajax({
    url: "https://localhost:7010/api-doan2/BaoCao/GetTodaySummary",
    type: "GET",
    success: function (res) {
      $("#totalAttendance").text(res.totalAttendance);
      $("#presentPercent").text(res.presentPercent + "% có mặt");
    },
    error: function (err) {
      console.error("Lỗi lấy dữ liệu chuyên cần", err);
    },
  });
}

//Xử lý Dữ liệu QL Học sinh
var app;
try {
  app = angular.module("QLTruongTieuHocApp");
} catch (e) {
  app = angular.module("QLTruongTieuHocApp", []);
}

app.controller("StudentCtrl", function ($scope, $http, $timeout) {
  // ====== API ======
  const API_GETALL =
    "https://localhost:7010/api-doan2/QLHocSinh/Student_GetAll";
  const API_SEARCH =
    "https://localhost:7010/api-doan2/QLHocSinh/Student_Search";
  const API_BYCLASS =
    "https://localhost:7010/api-doan2/QLHocSinh/Student_GetByClass";
  const API_CREATE =
    "https://localhost:7010/api-doan2/QLHocSinh/Student_Create";
  const API_UPDATE =
    "https://localhost:7010/api-doan2/QLHocSinh/Student_Update";
  const API_DELETE =
    "https://localhost:7010/api-doan2/QLHocSinh/Student_Delete";
  const API_CLASS_GETALL =
    "https://localhost:7010/api-doan2/QLLopHoc/Class_GetAll";

  // ====== STATE ======
  $scope.students = [];
  $scope.classList = [];
  $scope.keyword = "";
  $scope.selectedClass = "";

  $scope.create = {};
  $scope.update = {};

  // ====== DATE HELPERS ======
  function apiDateToInput(iso) {
    // "2018-05-20T00:00:00" -> "2018-05-20"
    if (!iso) return "";
    return String(iso).substring(0, 10);
  }

  function inputToApiDate(dateStr) {
    // "2018-05-20" -> "2018-05-20T00:00:00"
    if (!dateStr) return null;
    return String(dateStr).substring(0, 10) + "T00:00:00";
  }

  // ====== MODAL DOM ======
  const overlay = document.getElementById("overlay");
  const modalCreate = document.getElementById("studentModal");
  const modalUpdate = document.getElementById("studentModalUpdate");
  const closeBtn = document.getElementById("closeBtn");
  const closeBtnUpdate = document.getElementById("closeBtnUpdate");

  function show(el) {
    if (el) el.style.display = "block";
  }
  function hide(el) {
    if (el) el.style.display = "none";
  }

  function openCreateModal() {
    show(overlay);
    show(modalCreate);
    hide(modalUpdate);
  }
  function openUpdateModal() {
    show(overlay);
    show(modalUpdate);
    hide(modalCreate);
  }
  function closeAllModal() {
    hide(overlay);
    hide(modalCreate);
    hide(modalUpdate);
  }

  if (overlay) overlay.addEventListener("click", closeAllModal);
  if (closeBtn) closeBtn.addEventListener("click", closeAllModal);
  if (closeBtnUpdate) closeBtnUpdate.addEventListener("click", closeAllModal);

  // ====== OPEN MODALS ======
  $scope.openCreate = function () {
    $scope.loadClasses();
    $scope.create = {
      studentName: "",
      birthDate: "",
      className: "",
      parentName: "",
      parentPhone: "",
      parentAddress: "",
      status: 1,
    };

    $timeout(function () {
      openCreateModal();
    }, 0);
  };

  $scope.openUpdate = function (s) {
    $scope.loadClasses();
    $scope.update = {
      studentID: s.studentID,
      studentName: s.studentName,
      birthDate: apiDateToInput(s.birthDate),
      className: s.className,
      parentName: s.parentName,
      parentPhone: s.parentPhone,
      parentAddress: s.parentAddress,
      status: s.status,
    };

    $timeout(function () {
      openUpdateModal();
    }, 0);
  };

  // ====== UI helpers ======
  $scope.formatDateVN = function (iso) {
    if (!iso) return "";
    const d = String(iso).substring(0, 10); // yyyy-MM-dd
    const parts = d.split("-");
    if (parts.length !== 3) return d;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  };

  $scope.loadClasses = function () {
    return $http.get(API_CLASS_GETALL).then((res) => {
      const data = Array.isArray(res.data) ? res.data : [];
      // lấy className + loại trùng + sort
      const set = {};
      data.forEach((x) => {
        const name = (x.className || "").trim();
        if (name) set[name] = true;
      });
      $scope.classList = Object.keys(set).sort();
    });
  };

  // ====== LOAD / FILTER ======
  $scope.loadAll = function () {
    return $http.get(API_GETALL).then((res) => {
      $scope.students = Array.isArray(res.data) ? res.data : [];
    });
  };

  $scope.loadByClass = function (className) {
    return $http.get(API_BYCLASS, { params: { className } }).then((res) => {
      $scope.students = Array.isArray(res.data) ? res.data : [];
    });
  };

  $scope.search = function (keyword) {
    return $http.get(API_SEARCH, { params: { keyword } }).then((res) => {
      $scope.students = Array.isArray(res.data) ? res.data : [];
    });
  };

  // ====== SEARCH realtime (debounce) ======
  let t = null;
  $scope.onKeywordChange = function () {
    if (t) $timeout.cancel(t);
    t = $timeout(function () {
      const kw = ($scope.keyword || "").trim();

      if (kw) {
        $scope.search(kw);
        return;
      }

      if ($scope.selectedClass) {
        $scope.loadByClass($scope.selectedClass);
        return;
      }

      $scope.loadAll();
    }, 300);
  };

  $scope.onClassChange = function () {
    const kw = ($scope.keyword || "").trim();
    if (kw) return;

    if ($scope.selectedClass) $scope.loadByClass($scope.selectedClass);
    else $scope.loadAll();
  };

  // ====== CREATE ======
  $scope.createStudent = function (evt) {
    if (evt && evt.preventDefault) evt.preventDefault();

    // lấy ngày từ input DOM
    const dob = document.getElementById("studentDOB")?.value || "";

    const payload = {
      studentName: $scope.create.studentName,
      birthDate: inputToApiDate(dob),
      className: $scope.create.className,
      parentName: $scope.create.parentName,
      parentPhone: $scope.create.parentPhone,
      parentAddress: $scope.create.parentAddress,
      status: 1,
    };

    $http
      .post(API_CREATE, payload)
      .then(() => {
        alert("Thêm Học sinh thành công!");
        closeAllModal();
        $scope.onKeywordChange();
        if (!($scope.keyword || "").trim()) $scope.onClassChange();
      })
      .catch((err) => {
        console.log("Create error:", err);
        alert(
          "Thêm học sinh thất bại. Kiểm tra dữ liệu bắt buộc/định dạng ngày."
        );
      });
  };

  // ====== UPDATE ======
  $scope.updateStudent = function (evt) {
    if (evt && evt.preventDefault) evt.preventDefault();

    // lấy ngày từ input DOM
    const dob = document.getElementById("updateDOB")?.value || "";

    const payload = {
      studentID: $scope.update.studentID,
      studentName: $scope.update.studentName,
      birthDate: inputToApiDate(dob),
      className: $scope.update.className,
      parentName: $scope.update.parentName,
      parentPhone: $scope.update.parentPhone,
      parentAddress: $scope.update.parentAddress,
      status: $scope.update.status ?? 1,
    };

    $http
      .post(API_UPDATE, payload)
      .then(() => {
        alert("Cập nhật Học sinh thành công!");
        closeAllModal();
        $scope.onKeywordChange();
        if (!($scope.keyword || "").trim()) $scope.onClassChange();
      })
      .catch((err) => {
        console.log("Update error:", err);
        alert("Cập nhật thất bại. Kiểm tra API Student_Update.");
      });
  };

  // ====== DELETE ======
  $scope.deleteStudent = function (id) {
    if (!confirm("Bạn chắc chắn muốn xóa học sinh này?")) return;

    $http
      .post(API_DELETE, null, { params: { studentId: id } })
      .then(() => {
        alert("Xoá Học sinh thành công!");
        $scope.onKeywordChange();
        if (!($scope.keyword || "").trim()) $scope.onClassChange();
      })
      .catch((err) => {
        console.log("Delete error:", err);
        alert("Xóa thất bại. Kiểm tra API Student_Delete.");
      });
  };

  // init
  closeAllModal();
  $scope.loadClasses().finally(() => $scope.loadAll());
});

//Xử lý dữ liệu QL Lớp học
var app;
try {
  app = angular.module("QLTruongTieuHocApp");
} catch (e) {
  app = angular.module("QLTruongTieuHocApp", []);
}

app.controller("ClassCtrl", function ($scope, $http, $timeout) {
  // ===== API =====
  const API_CLASS_GETALL =
    "https://localhost:7010/api-doan2/QLLopHoc/Class_GetAll";
  const API_CLASS_ADD = "https://localhost:7010/api-doan2/QLLopHoc/add";
  const API_CLASS_UPDATE = "https://localhost:7010/api-doan2/QLLopHoc/update";
  const API_TEACHER_GETALL =
    "https://localhost:7010/api-doan2/QLGiaoVien/Teacher_GetAll";

  // ===== API TOTAL =====
  const API_CLASS_TOTAL =
    "https://localhost:7010/api-doan2/QLLopHoc/Class_GetTotal";
  const API_STUDENT_TOTAL =
    "https://localhost:7010/api-doan2/QLHocSinh/Student_GetTotal";

  $scope.classes = [];
  $scope.teachers = [];

  $scope.formCreate = {
    className: "",
    grade: "",
    numberOfStudents: 35,
    classroom: "",
    gvcn: "",
    description: "Lớp chọn",
  };

  $scope.formUpdate = {};

  $scope.loadTotals = function () {
    // Tổng lớp
    $http
      .get(API_CLASS_TOTAL)
      .then(function (res) {
        const total = res.data?.totalClasses ?? 0;
        const el = document.getElementById("totalClass_Class");
        if (el) el.innerText = "Tổng: " + total + " lớp";
      })
      .catch(function (err) {
        console.error("Lỗi khi load tổng lớp học", err);
        const el = document.getElementById("totalClass_Class");
        if (el) el.innerText = "Tổng: 0 lớp";
      });

    // Tổng học sinh
    $http
      .get(API_STUDENT_TOTAL)
      .then(function (res) {
        const total = res.data?.totalStudents ?? 0;
        const el = document.getElementById("totalStudents_Class");
        if (el) el.innerText = "Học sinh: " + total;
      })
      .catch(function (err) {
        console.error("Lỗi khi load tổng học sinh", err);
        const el = document.getElementById("totalStudents_Class");
        if (el) el.innerText = "Học sinh: 0";
      });
  };

  // ===== LOAD =====
  $scope.loadTeachers = function () {
    return $http.get(API_TEACHER_GETALL).then(function (res) {
      $scope.teachers = res.data || [];
    });
  };

  $scope.loadClasses = function () {
    return $http.get(API_CLASS_GETALL).then(function (res) {
      $scope.classes = res.data || [];
    });
  };

  // ===== MODAL =====
  let overlay, modalCreate, modalUpdate, closeBtn, closeBtnUpdate;

  function initModalDom() {
    overlay = document.getElementById("overlayclass");
    modalCreate = document.getElementById("classModal");
    modalUpdate = document.getElementById("classModalUpdate");
    closeBtn = document.getElementById("closeClassBtn");
    closeBtnUpdate = document.getElementById("closeClassBtnUpdate");

    if (overlay) overlay.onclick = closeAllModal;
    if (closeBtn) closeBtn.onclick = closeAllModal;
    if (closeBtnUpdate) closeBtnUpdate.onclick = closeAllModal;
  }

  function show(el) {
    if (el) el.style.display = "block";
  }
  function hide(el) {
    if (el) el.style.display = "none";
  }

  function openCreateModal() {
    show(overlay);
    show(modalCreate);
    hide(modalUpdate);
  }

  function openUpdateModal() {
    show(overlay);
    show(modalUpdate);
    hide(modalCreate);
  }

  function closeAllModal() {
    hide(overlay);
    hide(modalCreate);
    hide(modalUpdate);
  }

  // ===== OPEN MODAL =====
  $scope.openCreate = function () {
    $scope.formCreate = {
      className: "",
      grade: "",
      numberOfStudents: 35,
      classroom: "",
      gvcn: "",
      description: "Lớp chọn",
    };

    $timeout(function () {
      if (!overlay || !modalCreate || !modalUpdate) initModalDom();
      openCreateModal();
    }, 0);
  };

  $scope.openUpdate = function (c) {
    $scope.formUpdate = {
      classID: c.classID || c.classId || c.id,
      className: c.className,
      grade: c.grade,
      numberOfStudents: c.numberOfStudents,
      classroom: c.classroom,
      gvcn: c.gvcn,
      description: "Sửa",
    };

    $timeout(function () {
      if (!overlay || !modalCreate || !modalUpdate) initModalDom();
      openUpdateModal();
    }, 0);
  };

  // ===== CREATE =====
  $scope.createClass = function () {
    const p = angular.copy($scope.formCreate);

    if (!p.className || !p.grade || !p.gvcn) {
      return alert("Nhập đủ thông tin!");
    }

    $http
      .post(API_CLASS_ADD, p)
      .then(function () {
        alert("Thêm lớp thành công!");
        closeAllModal();

        // load lại bảng + tổng
        $scope.loadClasses();
        $scope.loadTotals();
      })
      .catch(function (err) {
        console.error(err);
        alert("Thêm lớp thất bại!");
      });
  };

  // ===== UPDATE =====
  $scope.updateClass = function () {
    const p = angular.copy($scope.formUpdate);

    if (!p.classID) return alert("Không xác định lớp!");

    $http
      .post(API_CLASS_UPDATE, p)
      .then(function () {
        alert("Cập nhật lớp thành công!");
        closeAllModal();

        $scope.loadClasses();
        $scope.loadTotals();
      })
      .catch(function (err) {
        console.error(err);
        alert("Cập nhật thất bại!");
      });
  };

  // ===== INIT =====
  (function init() {
    $timeout(function () {
      initModalDom();
    }, 0);

    $scope.loadTeachers();
    $scope.loadClasses();
    $scope.loadTotals();
  })();
});

//Xử lý dữ liệu QL Giáo viên
var app;
try {
  app = angular.module("QLTruongTieuHocApp");
} catch (e) {
  app = angular.module("QLTruongTieuHocApp", []);
}

app.controller("TeacherCtrl", function ($scope, $http, $timeout) {
  // ===== API =====
  const API_TEACHER_GETALL =
    "https://localhost:7010/api-doan2/QLGiaoVien/Teacher_GetAll";
  const API_TEACHER_GETTOTAL =
    "https://localhost:7010/api-doan2/QLGiaoVien/Teacher_GetTotal";
  const API_TEACHER_ADD =
    "https://localhost:7010/api-doan2/QLGiaoVien/Teacher_Add";
  const API_TEACHER_UPDATE =
    "https://localhost:7010/api-doan2/QLGiaoVien/Teacher_Update";
  const API_TEACHER_DELETE =
    "https://localhost:7010/api-doan2/QLGiaoVien/Teacher_Delete";

  const API_SUBJECT_GETALL =
    "https://localhost:7010/api-doan2/QLSubject/GetAll";
  const API_CLASS_GETALL =
    "https://localhost:7010/api-doan2/QLLopHoc/Class_GetAll";

  // ===== State =====
  $scope.teachers = [];
  $scope.subjects = [];
  $scope.classList = [];
  $scope.editingTeacherId = null;

  // =========================
  // ===== LOAD DATA =========
  // =========================
  $scope.loadTeachers = function () {
    return $http.get(API_TEACHER_GETALL).then(function (res) {
      $scope.teachers = res.data || [];
    });
  };

  $scope.loadTotalTeachers = function () {
    return $http
      .get(API_TEACHER_GETTOTAL)
      .then(function (res) {
        const total = res.data?.totalTeachers ?? res.data?.total ?? 0;
        const el = document.getElementById("totalTeacher_Teacher");
        if (el) el.innerText = "Tổng: " + total + " giáo viên";
      })
      .catch(function () {
        const el = document.getElementById("totalTeacher_Teacher");
        if (el) el.innerText = "Tổng: 0 giáo viên";
      });
  };

  $scope.loadSubjects = function () {
    return $http.get(API_SUBJECT_GETALL).then(function (res) {
      $scope.subjects = res.data || [];
    });
  };

  $scope.loadClassList = function () {
    return $http.get(API_CLASS_GETALL).then(function (res) {
      $scope.classList = res.data || [];
    });
  };

  // =========================
  // ===== MODAL DOM =========
  // =========================
  let overlay, modalCreate, modalUpdate, closeBtn, closeBtnUpdate;

  function initModalDom() {
    overlay = document.getElementById("overlayteacher");
    modalCreate = document.getElementById("teacherModal");
    modalUpdate = document.getElementById("teacherModalUpdate");
    closeBtn = document.getElementById("closeTeacherBtn");
    closeBtnUpdate = document.getElementById("closeTeacherBtnUpdate");

    if (overlay) overlay.onclick = closeAllModal;
    if (closeBtn) closeBtn.onclick = closeAllModal;
    if (closeBtnUpdate) closeBtnUpdate.onclick = closeAllModal;
  }

  function show(el) {
    if (el) el.style.display = "block";
  }
  function hide(el) {
    if (el) el.style.display = "none";
  }

  function openCreateModal() {
    show(overlay);
    show(modalCreate);
    hide(modalUpdate);
  }

  function openUpdateModal() {
    show(overlay);
    show(modalUpdate);
    hide(modalCreate);
  }

  function closeAllModal() {
    hide(overlay);
    hide(modalCreate);
    hide(modalUpdate);
  }

  // =========================
  // ===== HELPERS ===========
  // =========================
  function normalizeClassNames(arr) {
    const clean = (arr || []).map((x) => (x || "").trim()).filter(Boolean);

    return Array.from(new Set(clean));
  }

  function getCheckedClasses(containerId) {
    const box = document.getElementById(containerId);
    if (!box) return [];
    const checked = box.querySelectorAll('input[type="checkbox"]:checked');

    const arr = Array.from(checked)
      .map((i) => (i.value || "").trim())
      .filter(Boolean);

    return normalizeClassNames(arr);
  }

  function setCheckedClasses(containerId, classNames) {
    const box = document.getElementById(containerId);
    if (!box) return;

    const set = new Set(normalizeClassNames(classNames));
    const inputs = box.querySelectorAll('input[type="checkbox"]');

    inputs.forEach((inp) => {
      inp.checked = set.has((inp.value || "").trim());
    });
  }

  function resetCreateFormDom() {
    const name = document.getElementById("teacherName");
    const email = document.getElementById("teacherEmail");
    const phone = document.getElementById("teacherSDT");
    const subject = document.getElementById("teacherSubject");

    if (name) name.value = "";
    if (email) email.value = "";
    if (phone) phone.value = "";
    if (subject) subject.value = "";

    const box = document.getElementById("teacherClass");
    if (box)
      box
        .querySelectorAll('input[type="checkbox"]')
        .forEach((i) => (i.checked = false));

    const cn = document.querySelector(".teacherCN");
    if (cn) cn.checked = false;
  }

  // =========================
  // ===== OPEN MODALS =======
  // =========================
  $scope.openCreateTeacher = function () {
    $scope.editingTeacherId = null;

    $timeout(function () {
      if (!overlay || !modalCreate || !modalUpdate) initModalDom();
      resetCreateFormDom();
      openCreateModal();
    }, 0);
  };

  $scope.openUpdateTeacher = function (t) {
    $scope.editingTeacherId = t.teacherID || t.teacherId || t.id;

    $timeout(function () {
      if (!overlay || !modalCreate || !modalUpdate) initModalDom();

      const name = document.getElementById("teacherNameUpdate");
      const email = document.getElementById("teacherEmailUpdate");
      const phone = document.getElementById("teacherSDTUpdate");
      const subject = document.getElementById("teacherSubjectUpdate");

      if (name) name.value = t.fullName || "";
      if (email) email.value = t.email || "";
      if (phone) phone.value = t.phone || "";
      if (subject) subject.value = t.specialization || "";

      setCheckedClasses("teacherClassUpdate", t.classNames || []);

      const cn = document.querySelector(".teacherCNUpdate");
      if (cn) cn.checked = !!t.isCN;

      openUpdateModal();
    }, 0);
  };

  // =========================
  // ===== CREATE ============
  // =========================
  $scope.createTeacher = function () {
    const fullName = (
      document.getElementById("teacherName")?.value || ""
    ).trim();
    const email = (document.getElementById("teacherEmail")?.value || "").trim();
    const phone = (document.getElementById("teacherSDT")?.value || "").trim();
    const specialization = (
      document.getElementById("teacherSubject")?.value || ""
    ).trim();
    const classNames = getCheckedClasses("teacherClass");
    const isCN = !!document.querySelector(".teacherCN")?.checked;

    if (!fullName || !email || !phone || !specialization) {
      return alert("Vui lòng nhập đủ thông tin!");
    }

    const payload = {
      fullName,
      phone,
      email,
      specialization,
      isCN,
      classNames: normalizeClassNames(classNames),
    };

    $http
      .post(API_TEACHER_ADD, payload)
      .then(function () {
        alert("Thêm giáo viên thành công!");
        closeAllModal();
        $scope.loadTeachers();
        $scope.loadTotalTeachers();
      })
      .catch(function (err) {
        console.error("Teacher_Add error:", err);
        alert("Thêm giáo viên thất bại!");
      });
  };

  // =========================
  // ===== UPDATE (FIX) ======
  // =========================
  $scope.updateTeacher = function () {
    const teacherID = $scope.editingTeacherId;

    const fullName = (
      document.getElementById("teacherNameUpdate")?.value || ""
    ).trim();
    const email = (
      document.getElementById("teacherEmailUpdate")?.value || ""
    ).trim();
    const phone = (
      document.getElementById("teacherSDTUpdate")?.value || ""
    ).trim();
    const specialization = (
      document.getElementById("teacherSubjectUpdate")?.value || ""
    ).trim();
    const classNames = getCheckedClasses("teacherClassUpdate");
    const isCN = !!document.querySelector(".teacherCNUpdate")?.checked;

    if (!teacherID) return alert("Không xác định giáo viên cần sửa!");
    if (!fullName || !email || !phone || !specialization) {
      return alert("Vui lòng nhập đủ thông tin!");
    }

    const payload = {
      teacherID: Number(teacherID), // chắc chắn là số
      fullName,
      phone,
      email,
      specialization,
      isCN,
      classNames: normalizeClassNames(classNames),
    };
    console.log("classNames gửi lên =", classNames);
    alert("classNames gửi lên = " + JSON.stringify(classNames));
    $http
      .post(API_TEACHER_UPDATE, payload)
      .then(function () {
        alert("Cập nhật giáo viên thành công!");
        closeAllModal();
        $scope.loadTeachers();
        $scope.loadTotalTeachers();
      })
      .catch(function (err) {
        console.error("Teacher_Update error:", err);
        alert("Cập nhật giáo viên thất bại!");
      });
  };

  // =========================
  // ===== DELETE (FIX) ======
  // =========================
  $scope.deleteTeacher = function (t) {
    const id = t.teacherID || t.teacherId || t.id;
    if (!id) return;

    if (!confirm("Bạn có chắc muốn xóa giáo viên này?")) return;

    $http
      .post(API_TEACHER_DELETE + "?id=" + id)
      .then(function () {
        alert("Xóa giáo viên thành công!");
      })
      .catch(function (err) {
        console.error("Teacher_Delete error:", err);
        alert("Xóa giáo viên thất bại!");
      })
      .finally(function () {
        $scope.loadTeachers();
        $scope.loadTotalTeachers();
      });
  };

  // =========================
  // ===== INIT ==============
  // =========================
  (function init() {
    $timeout(function () {
      initModalDom();
    }, 0);

    $scope.loadTeachers();
    $scope.loadTotalTeachers();

    $scope.loadSubjects();
    $scope.loadClassList();
  })();
});

//Xử lý dữ liệu QL Lịch Học
var app;
try {
  app = angular.module("QLTruongTieuHocApp");
} catch (e) {
  app = angular.module("QLTruongTieuHocApp", []);
}

app.controller("ScheduleCtrl", function ($scope, $http, $timeout) {
  // ===== API =====
  const API_CLASS_GETALL =
    "https://localhost:7010/api-doan2/QLLopHoc/Class_GetAll";

  const API_SUBJECT_GETALL =
    "https://localhost:7010/api-doan2/QLSubject/GetAll";

  const API_TEACHER_GETALL =
    "https://localhost:7010/api-doan2/QLGiaoVien/Teacher_GetAll";

  const API_SCHEDULE_GETBYCLASS =
    "https://localhost:7010/api-doan2/QLLichHoc/GetByClassName";

  const API_SCHEDULE_GETTOTAL_BYCLASS =
    "https://localhost:7010/api-doan2/QLLichHoc/GetTotalByClassName";

  const API_SCHEDULE_ADD = "https://localhost:7010/api-doan2/QLLichHoc/Add";

  const API_SCHEDULE_UPDATE =
    "https://localhost:7010/api-doan2/QLLichHoc/Update";

  const API_SCHEDULE_DELETE =
    "https://localhost:7010/api-doan2/QLLichHoc/Delete";

  // ===== State =====
  $scope.classList = [];
  $scope.subjects = [];
  $scope.teachers = [];
  $scope.schedules = []; // list theo lớp
  $scope.selectedClassName = "";

  $scope.editingScheduleId = null;

  // Table helper: cellMap["day-period"] = row
  $scope.cellMap = {};

  // ===== UI Lists =====
  $scope.dayOfWeekList = [
    { value: 2, label: "Thứ 2" },
    { value: 3, label: "Thứ 3" },
    { value: 4, label: "Thứ 4" },
    { value: 5, label: "Thứ 5" },
    { value: 6, label: "Thứ 6" },
  ];

  $scope.periodList = [
    { value: 1, label: "Tiết 1 (07:00 - 07:35)", time: "07:00 - 07:35" },
    { value: 2, label: "Tiết 2 (07:40 - 08:15)", time: "07:40 - 08:15" },
    { value: 3, label: "Tiết 3 (08:20 - 08:55)", time: "08:20 - 08:55" },
    { value: 4, label: "Tiết 4 (09:00 - 09:35)", time: "09:00 - 09:35" },
    { value: 5, label: "Tiết 5 (09:40 - 10:15)", time: "09:40 - 10:15" },
  ];

  // ===== Modal DOM =====
  let overlay, modalCreate, modalUpdate, closeBtn, closeBtnUpdate;

  function initModalDom() {
    overlay = document.getElementById("overlaySchedule");
    modalCreate = document.getElementById("scheduleModal");
    modalUpdate = document.getElementById("scheduleModalUpdate");
    closeBtn = document.getElementById("closeScheduleBtn");
    closeBtnUpdate = document.getElementById("closeScheduleBtnUpdate");

    if (overlay) overlay.onclick = closeAllModal;
    if (closeBtn) closeBtn.onclick = closeAllModal;
    if (closeBtnUpdate) closeBtnUpdate.onclick = closeAllModal;
  }

  function show(el) {
    if (el) el.style.display = "block";
  }
  function hide(el) {
    if (el) el.style.display = "none";
  }
  function openCreateModal() {
    show(overlay);
    show(modalCreate);
    hide(modalUpdate);
  }
  function openUpdateModal() {
    show(overlay);
    show(modalUpdate);
    hide(modalCreate);
  }
  function closeAllModal() {
    hide(overlay);
    hide(modalCreate);
    hide(modalUpdate);
  }

  // ===== Helpers =====
  function cleanStr(s) {
    return (s || "").toString().trim();
  }

  function rebuildCellMap() {
    const map = {};
    ($scope.schedules || []).forEach((x) => {
      const day = Number(x.dayOfWeek);
      const period = Number(x.period);
      if (!day || !period) return;
      map[`${day}-${period}`] = x;
    });
    $scope.cellMap = map;
  }

  $scope.getCell = function (dayOfWeek, period) {
    return $scope.cellMap[`${dayOfWeek}-${period}`] || null;
  };

  function setTotalText(total) {
    const el = document.getElementById("totalSchedule_Schedule");
    if (el) el.innerText = (total || 0) + " tiết/tuần";
  }

  // ===== Load base data =====
  $scope.loadClassList = function () {
    return $http.get(API_CLASS_GETALL).then(function (res) {
      $scope.classList = res.data || [];
      if (!$scope.selectedClassName && $scope.classList.length) {
        $scope.selectedClassName = $scope.classList[0].className;
      }
    });
  };

  $scope.loadSubjects = function () {
    return $http.get(API_SUBJECT_GETALL).then(function (res) {
      $scope.subjects = res.data || [];
    });
  };

  $scope.loadTeachers = function () {
    return $http.get(API_TEACHER_GETALL).then(function (res) {
      $scope.teachers = res.data || [];
    });
  };

  // ===== Load schedules by class =====
  $scope.loadSchedules = function () {
    const cls = cleanStr($scope.selectedClassName);
    if (!cls) {
      $scope.schedules = [];
      rebuildCellMap();
      setTotalText(0);
      return Promise.resolve();
    }

    return $http
      .get(API_SCHEDULE_GETBYCLASS + "?className=" + encodeURIComponent(cls))
      .then(function (res) {
        $scope.schedules = res.data || [];
        rebuildCellMap();
      })
      .catch(function () {
        $scope.schedules = [];
        rebuildCellMap();
      });
  };

  $scope.loadTotalByClass = function () {
    const cls = cleanStr($scope.selectedClassName);
    if (!cls) return setTotalText(0);

    return $http
      .get(
        API_SCHEDULE_GETTOTAL_BYCLASS + "?className=" + encodeURIComponent(cls)
      )
      .then(function (res) {
        const total = res.data?.totalSchedule ?? res.data?.total ?? 0;
        setTotalText(total);
      })
      .catch(function () {
        setTotalText(0);
      });
  };

  $scope.onChangeClass = function () {
    refreshAll();
  };

  function refreshAll() {
    $scope.loadSchedules();
    $scope.loadTotalByClass();
  }

  // ===== Models for form =====
  $scope.createModel = {
    className: "",
    dayOfWeek: null,
    period: null,
    subjectName: "",
    teacherName: "",
    room: "",
  };

  $scope.updateModel = {
    scheduleID: 0,
    className: "",
    dayOfWeek: null,
    period: null,
    subjectName: "",
    teacherName: "",
    room: "",
  };

  function resetCreateModel() {
    $scope.createModel = {
      className: cleanStr($scope.selectedClassName) || "",
      dayOfWeek: null,
      period: null,
      subjectName: "",
      teacherName: "",
      room: "",
    };
  }

  // ===== Open modals =====
  $scope.openCreateSchedule = function () {
    $scope.editingScheduleId = null;

    $timeout(function () {
      if (!overlay || !modalCreate || !modalUpdate) initModalDom();
      resetCreateModel();
      openCreateModal();
    }, 0);
  };

  $scope.openUpdateSchedule = function (row) {
    const id = row.scheduleID || row.scheduleId || row.id;
    $scope.editingScheduleId = id;

    $timeout(function () {
      if (!overlay || !modalCreate || !modalUpdate) initModalDom();

      $scope.updateModel = {
        scheduleID: Number(id),
        className: cleanStr(row.className),
        dayOfWeek: Number(row.dayOfWeek),
        period: Number(row.period),
        subjectName: cleanStr(row.subjectName),
        teacherName: cleanStr(row.teacherName),
        room: cleanStr(row.room),
      };

      openUpdateModal();
    }, 0);
  };

  // ===== CRUD =====
  $scope.createSchedule = function ($event) {
    if ($event && $event.preventDefault) $event.preventDefault();

    const payload = {
      className: cleanStr($scope.createModel.className),
      dayOfWeek: Number($scope.createModel.dayOfWeek),
      period: Number($scope.createModel.period),
      subjectName: cleanStr($scope.createModel.subjectName),
      teacherName: cleanStr($scope.createModel.teacherName),
      room: cleanStr($scope.createModel.room),
    };

    // tránh lỗi 400 do khoảng trắng / thiếu field
    if (
      !payload.className ||
      !payload.dayOfWeek ||
      !payload.period ||
      !payload.subjectName ||
      !payload.teacherName ||
      !payload.room
    ) {
      return alert("Vui lòng nhập đủ thông tin tiết học!");
    }

    $http
      .post(API_SCHEDULE_ADD, payload)
      .then(function () {
        alert("Thêm tiết học thành công!");
        closeAllModal();
        refreshAll();
      })
      .catch(function (err) {
        console.log("STATUS:", err.status);
        console.log("DATA:", err.data);
        console.log("HEADERS:", err.headers && err.headers());
        alert(
          "Thất bại! " +
            (err.data?.message ||
              err.data?.title ||
              JSON.stringify(err.data) ||
              "Không rõ lỗi")
        );
      });
  };

  $scope.updateSchedule = function ($event) {
    if ($event && $event.preventDefault) $event.preventDefault();

    const id = Number(
      $scope.updateModel.scheduleID || $scope.editingScheduleId
    );
    if (!id) return alert("Không xác định tiết học cần sửa!");

    const payload = {
      scheduleID: id,
      className: cleanStr($scope.updateModel.className),
      dayOfWeek: Number($scope.updateModel.dayOfWeek),
      period: Number($scope.updateModel.period),
      subjectName: cleanStr($scope.updateModel.subjectName),
      teacherName: cleanStr($scope.updateModel.teacherName),
      room: cleanStr($scope.updateModel.room),
    };

    if (
      !payload.className ||
      !payload.dayOfWeek ||
      !payload.period ||
      !payload.subjectName ||
      !payload.teacherName ||
      !payload.room
    ) {
      return alert("Vui lòng nhập đủ thông tin tiết học!");
    }

    $http
      .post(API_SCHEDULE_UPDATE, payload)
      .then(function () {
        alert("Cập nhật tiết học thành công!");
        closeAllModal();
        refreshAll();
      })
      .catch(function (err) {
        console.log("STATUS:", err.status);
        console.log("DATA:", err.data);
        console.log("HEADERS:", err.headers && err.headers());
        alert(
          "Thất bại! " +
            (err.data?.message ||
              err.data?.title ||
              JSON.stringify(err.data) ||
              "Không rõ lỗi")
        );
      });
  };

  $scope.deleteSchedule = function (row) {
    const id = row.scheduleID || row.scheduleId || row.id;
    if (!id) return;

    if (!confirm("Bạn có chắc muốn xóa tiết học này?")) return;

    $http
      .post(API_SCHEDULE_DELETE + "?id=" + id)
      .then(function () {
        alert("Xóa tiết học thành công!");
        refreshAll();
      })
      .catch(function (err) {
        console.error("Schedule_Delete error:", err);
        alert("Xóa tiết học thất bại!");
      });
  };

  // ===== INIT =====
  (function init() {
    $timeout(function () {
      initModalDom();
    }, 0);

    Promise.all([
      $scope.loadClassList(),
      $scope.loadSubjects(),
      $scope.loadTeachers(),
    ])
      .then(function () {
        refreshAll();
      })
      .catch(function () {
        refreshAll();
      });
  })();
});

//Xử lý dữ liệu QL Sự kiện
var app;
try {
  app = angular.module("QLTruongTieuHocApp");
} catch (e) {
  app = angular.module("QLTruongTieuHocApp", []);
}

app.controller("EventCtrl", function ($scope, $http, $timeout) {
  // ===== API =====
  const API_EVENT_GETALL =
    "https://localhost:7010/api-doan2/QLEvent/Event_GetAll";
  const API_EVENT_CREATE =
    "https://localhost:7010/api-doan2/QLEvent/Event_Create";
  const API_EVENT_UPDATE =
    "https://localhost:7010/api-doan2/QLEvent/Event_Update";
  const API_EVENT_DELETE =
    "https://localhost:7010/api-doan2/QLEvent/Event_Delete";
  const API_EVENT_GETTOTAL =
    "https://localhost:7010/api-doan2/QLEvent/Event_GetTotal";
  const API_EVENT_GETUPCOMING =
    "https://localhost:7010/api-doan2/QLEvent/Event_GetUpcoming";

  // ===== State =====
  $scope.events = [];
  $scope.editingEventId = null;

  // =========================
  // ===== LOAD ==============
  // =========================
  $scope.loadEvents = function () {
    return $http.get(API_EVENT_GETALL).then(function (res) {
      $scope.events = res.data || [];
    });
  };

  $scope.loadTotal = function () {
    return $http
      .get(API_EVENT_GETTOTAL)
      .then(function (res) {
        const total = res.data?.totalEvents ?? res.data?.total ?? 0;
        const el = document.getElementById("totalEvent_Event");
        if (el) el.innerText = "Tổng: " + total + " sự kiện";
      })
      .catch(function () {
        const el = document.getElementById("totalEvent_Event");
        if (el) el.innerText = "Tổng: 0 sự kiện";
      });
  };

  $scope.loadUpcoming = function () {
    return $http
      .get(API_EVENT_GETUPCOMING)
      .then(function (res) {
        const up = res.data?.upcomingEvents ?? res.data?.upcoming ?? 0;
        const el = document.getElementById("upcomingEvent_Event");
        if (el) el.innerText = "Sắp tới: " + up;
      })
      .catch(function () {
        const el = document.getElementById("upcomingEvent_Event");
        if (el) el.innerText = "Sắp tới: 0";
      });
  };

  function refreshAll() {
    $scope.loadEvents();
    $scope.loadTotal();
    $scope.loadUpcoming();
  }

  // =========================
  // ===== MODAL DOM =========
  // =========================
  let overlay, modalCreate, modalUpdate, closeBtn, closeBtnUpdate;

  function initModalDom() {
    overlay = document.getElementById("overlayevent");
    modalCreate = document.getElementById("eventModal");
    modalUpdate = document.getElementById("eventModalUpdate");
    closeBtn = document.getElementById("closeEventBtn");
    closeBtnUpdate = document.getElementById("closeEventBtnUpdate");

    if (overlay) overlay.onclick = closeAllModal;
    if (closeBtn) closeBtn.onclick = closeAllModal;
    if (closeBtnUpdate) closeBtnUpdate.onclick = closeAllModal;
  }

  function show(el) {
    if (el) el.style.display = "block";
  }
  function hide(el) {
    if (el) el.style.display = "none";
  }

  function openCreateModal() {
    show(overlay);
    show(modalCreate);
    hide(modalUpdate);
  }

  function openUpdateModal() {
    show(overlay);
    show(modalUpdate);
    hide(modalCreate);
  }

  function closeAllModal() {
    hide(overlay);
    hide(modalCreate);
    hide(modalUpdate);
  }

  // =========================
  // ===== HELPERS ===========
  // =========================
  function pad2(n) {
    n = Number(n) || 0;
    return n < 10 ? "0" + n : "" + n;
  }

  // input "dd/mm/yyyy" -> "yyyy-mm-ddT00:00:00"
  function vnDateToIso(dateStr) {
    const s = (dateStr || "").trim();
    if (!s) return "";

    const parts = s.includes("/") ? s.split("/") : s.split("-");
    if (parts.length !== 3) return "";

    const dd = parseInt(parts[0], 10);
    const mm = parseInt(parts[1], 10);
    const yyyy = parseInt(parts[2], 10);
    if (!dd || !mm || !yyyy) return "";

    return `${yyyy}-${pad2(mm)}-${pad2(dd)}T00:00:00`;
  }

  // ======= FORMAT for UI (dùng trong HTML) =======
  // hiển thị eventDate ISO -> dd/mm/yyyy
  $scope.formatDate = function (isoDate) {
    if (!isoDate) return "";
    const s = String(isoDate).substring(0, 10); // yyyy-mm-dd
    const d = new Date(s + "T00:00:00");
    if (isNaN(d.getTime())) return "" + isoDate;
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
  };

  // hiển thị time "08:00:00" -> "08:00"
  $scope.formatTime = function (t) {
    if (!t) return "--:--";
    const s = String(t);
    return s.length >= 5 ? s.substring(0, 5) : s;
  };

  // ======= Radio helpers =======
  function getRadioValue(name) {
    const checked = document.querySelector(
      `input[type="radio"][name="${name}"]:checked`
    );
    return checked && checked.value ? checked.value.trim() : "";
  }

  function setRadioValue(name, value) {
    const v = (value || "").trim();
    const radios = document.querySelectorAll(
      `input[type="radio"][name="${name}"]`
    );
    radios.forEach((r) => {
      r.checked = (r.value || "").trim() === v;
    });
  }

  function clearRadio(name) {
    const radios = document.querySelectorAll(
      `input[type="radio"][name="${name}"]`
    );
    radios.forEach((r) => (r.checked = false));
  }

  // ======= Upcoming logic (đúng theo Date + Time) =======
  $scope.isUpcoming = function (e) {
    const datePart = String(e?.eventDate || "").substring(0, 10);
    if (!datePart) return false;

    // timePart có thể null => 00:00:00
    let timePart = e?.eventTime ? String(e.eventTime) : "00:00:00";
    if (timePart.length === 5) timePart += ":00"; // "08:00" -> "08:00:00"

    const dt = new Date(datePart + "T" + timePart);
    if (isNaN(dt.getTime())) return false;

    return dt.getTime() >= Date.now();
  };

  // ======= BIND CSS theo giao diện =======
  $scope.getEventCardClass = function (e) {
    return $scope.isUpcoming(e) ? "blue" : "gray";
  };

  $scope.getStatusClass = function (e) {
    return $scope.isUpcoming(e) ? "upcoming" : "ended";
  };

  $scope.getStatusText = function (e) {
    return $scope.isUpcoming(e) ? "Sắp tới" : "Đã kết thúc";
  };

  $scope.getTagClass = function (type) {
    const t = (type || "").trim().toLowerCase();
    if (t.includes("kiểm tra")) return "red";
    if (t.includes("họp")) return "purple";
    if (t.includes("nghỉ")) return "gray";
    if (t.includes("học thuật")) return "blue";
    return "green"; // Khác
  };

  // =========================
  // ===== OPEN MODALS =======
  // =========================
  function resetCreateFormDom() {
    const title = document.getElementById("event-name");
    const desc = document.getElementById("event-description");
    const date = document.getElementById("event-date");
    const time = document.getElementById("event-time");

    if (title) title.value = "";
    if (desc) desc.value = "";
    if (date) date.value = "";
    if (time) time.value = "";

    clearRadio("typeCreate");
  }

  $scope.openCreateEvent = function () {
    $scope.editingEventId = null;

    $timeout(function () {
      if (!overlay || !modalCreate || !modalUpdate) initModalDom();
      resetCreateFormDom();
      openCreateModal();
    }, 0);
  };

  $scope.openUpdateEvent = function (e) {
    $scope.editingEventId = e.eventID || e.eventId || e.id;

    $timeout(function () {
      if (!overlay || !modalCreate || !modalUpdate) initModalDom();

      const title = document.getElementById("event-nameUpdate");
      const desc = document.getElementById("event-descriptionUpdate");
      const date = document.getElementById("event-dateUpdate");
      const time = document.getElementById("event-timeUpdate");

      if (title) title.value = e.title || "";
      if (desc) desc.value = e.description || "";
      if (date) date.value = $scope.formatDate(e.eventDate);
      if (time) time.value = $scope.formatTime(e.eventTime);

      setRadioValue("typeUpdate", e.eventType || "");

      openUpdateModal();
    }, 0);
  };

  // =========================
  // ===== CREATE/UPDATE/DEL ==
  // =========================
  $scope.createEvent = function ($event) {
    if ($event && $event.preventDefault) $event.preventDefault();

    const title = (document.getElementById("event-name")?.value || "").trim();
    const description = (
      document.getElementById("event-description")?.value || ""
    ).trim();
    const dateStr = (document.getElementById("event-date")?.value || "").trim();
    const timeStr = (document.getElementById("event-time")?.value || "").trim();
    const eventType = getRadioValue("typeCreate");

    const eventDate = vnDateToIso(dateStr);

    if (!title || !eventDate || !eventType) {
      return alert("Vui lòng nhập đủ: Tên, Ngày, Loại!");
    }

    const payload = {
      title,
      description,
      eventDate,
      eventTime: timeStr
        ? timeStr.length === 5
          ? timeStr + ":00"
          : timeStr
        : null,
      eventType,
    };

    $http
      .post(API_EVENT_CREATE, payload)
      .then(function () {
        alert("Thêm sự kiện thành công!");
        closeAllModal();
        refreshAll();
      })
      .catch(function (err) {
        console.error("Event_Create error:", err);
        alert("Thêm sự kiện thất bại!");
      });
  };

  $scope.updateEvent = function ($event) {
    if ($event && $event.preventDefault) $event.preventDefault();

    const eventID = $scope.editingEventId;

    const title = (
      document.getElementById("event-nameUpdate")?.value || ""
    ).trim();
    const description = (
      document.getElementById("event-descriptionUpdate")?.value || ""
    ).trim();
    const dateStr = (
      document.getElementById("event-dateUpdate")?.value || ""
    ).trim();
    const timeStr = (
      document.getElementById("event-timeUpdate")?.value || ""
    ).trim();
    const eventType = getRadioValue("typeUpdate");

    const eventDate = vnDateToIso(dateStr);

    if (!eventID) return alert("Không xác định sự kiện cần sửa!");
    if (!title || !eventDate || !eventType) {
      return alert("Vui lòng nhập đủ: Tên, Ngày, Loại!");
    }

    const payload = {
      eventID: Number(eventID),
      title,
      description,
      eventDate,
      eventTime: timeStr
        ? timeStr.length === 5
          ? timeStr + ":00"
          : timeStr
        : null,
      eventType,
    };

    $http
      .post(API_EVENT_UPDATE, payload)
      .then(function () {
        alert("Cập nhật sự kiện thành công!");
        closeAllModal();
        refreshAll();
      })
      .catch(function (err) {
        console.error("Event_Update error:", err);
        alert("Cập nhật sự kiện thất bại!");
      });
  };

  $scope.deleteEvent = function (e) {
    const id = e.eventID || e.eventId || e.id;
    if (!id) return;

    if (!confirm("Bạn có chắc muốn xóa sự kiện này?")) return;

    $http
      .post(API_EVENT_DELETE + "?id=" + id)
      .then(function () {
        alert("Xóa sự kiện thành công!");
        refreshAll();
      })
      .catch(function (err) {
        console.error("Event_Delete error:", err);
        alert("Xóa sự kiện thất bại!");
      });
  };

  // =========================
  // ===== INIT ==============
  // =========================
  (function init() {
    $timeout(function () {
      initModalDom();
    }, 0);

    refreshAll();
  })();
});
