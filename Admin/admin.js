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
