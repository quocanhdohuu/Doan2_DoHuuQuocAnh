document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".dangnhap-button");

  button.addEventListener("click", function () {
    const role = document.getElementById("vaitro").value;

    let basePath = window.location.origin; // http://127.0.0.1:5500
    let projectRoot = "/Doan2_DoHuuQuocAnh"; // tên repo

    if (
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "localhost"
    ) {
      // Khi chạy local (Live Server)
      projectRoot = "";
    }

    if (role === "admin") {
      window.location.href = `${basePath}${projectRoot}/Admin/admin.html`;
    } else if (role === "giaovien") {
      window.location.href = `${basePath}${projectRoot}/Giaovien/giaovien.html`;
    } else if (role === "phuhuynh") {
      window.location.href = `${basePath}${projectRoot}/Phuhuynh/phuhuynh.html`;
    }
  });
});
