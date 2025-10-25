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

//biểu đồ chuyên cần theo lớp
const ctx1 = document.getElementById("bieudo");

new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["1A", "1B", "1C", "1D", "2A", "2B"],
    datasets: [
      {
        label: "Có mặt",
        data: [32, 30, 28, 29, 32, 33],
        backgroundColor: "#28a745",
      },
      {
        label: "Vắng",
        data: [3, 4, 2, 1, 0, 1],
        backgroundColor: "#dc3545",
      },
      {
        label: "Muộn",
        data: [1, 2, 1, 0, 0, 1],
        backgroundColor: "#f0ad4e",
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 9 },
      },
    },
    plugins: {
      legend: { position: "bottom" },
    },
  },
});

//biểu đồ phân bố học lực
const ctx2 = document.getElementById("bieudoTron");

new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["Giỏi: 21%", "Khá: 42%", "Trung bình: 31%", "Yếu: 6%"],
    datasets: [
      {
        data: [21, 42, 31, 6],
        backgroundColor: ["#28a745", "#4285f4", "#f39c12", "#e74c3c"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#333",
          font: { size: 10 },
        },
      },
      title: {
        display: false,
      },
    },
  },
});

//biểu đồ xu hướng chuyên cần
const ct3 = document.getElementById("bieudoThang");

new Chart(ct3, {
  type: "bar",
  data: {
    labels: ["T9", "T10", "T11", "T12"],
    datasets: [
      {
        label: "Tỉ lệ chuyên cần (%)",
        data: [94, 96, 93.5, 94.2],
        backgroundColor: "#4285f4",
        borderRadius: 4,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        min: 90,
        max: 100,
        ticks: {
          stepSize: 3,
        },
        grid: {
          color: "#eee",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.parsed.y + "%";
          },
        },
      },
    },
  },
});
