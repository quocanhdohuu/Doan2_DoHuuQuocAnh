document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  if (!form) {
    console.error("Không tìm thấy form loginForm");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("matkhau").value.trim();

    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ email và mật khẩu");
      return;
    }

    const data = {
      username: email,
      password: password,
    };

    fetch("https://localhost:7010/api-doan2/QLUser/User_Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Sai tài khoản hoặc mật khẩu");
        }
        return res.json();
      })
      .then((result) => {
        console.log("LOGIN OK:", result);

        localStorage.setItem("userID", result.userID);
        localStorage.setItem("username", result.username);
        localStorage.setItem("role", result.role);

        switch (result.role) {
          case "admin":
            window.location.href = "../Admin/admin.html";
            break;
          case "teacher":
            window.location.href = "../Giaovien/giaovien.html";
            break;
          case "parent":
            window.location.href = "../Phuhuynh/phuhuynh.html";
            break;
          default:
            alert("Vai trò không hợp lệ: " + result.role);
        }
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  });
});
