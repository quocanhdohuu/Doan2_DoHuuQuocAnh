document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".dangnhap-button");

  button.addEventListener("click", function () {
    const role = document.getElementById("vaitro").value;

    if (role === "admin") {
      window.location.href = "/Admin/admin.html";
    } else if (role === "giaovien") {
      window.location.href = "/Giaovien/giaovien.html";
    } else if (role === "phuhuynh") {
      window.location.href = "/Phuhuynh/phuhuynh.html";
    }
  });
});
