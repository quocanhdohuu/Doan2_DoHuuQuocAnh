const buttons = document.querySelectorAll('.menu button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
// Lấy tất cả nút menu và các phần nội dung
const button = document.querySelectorAll('.menu button');
const sections = document.querySelectorAll('.tab-content');

// Lặp qua từng nút menu
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // 1. Bỏ active ở tất cả nút
    buttons.forEach(btn => btn.classList.remove('active'));

    // 2. Thêm active cho nút được chọn
    button.classList.add('active');

    // 3. Ẩn tất cả phần nội dung
    sections.forEach(section => section.classList.remove('active'));

    // 4. Hiện phần tương ứng với nút được chọn
    const targetId = button.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});
// Phần điểm danh — lịch tương tác
document.querySelectorAll(".ngay div").forEach(ngay => {
  ngay.addEventListener("click", () => {
    document.querySelectorAll(".ngay div").forEach(n => n.classList.remove("chon"));
    ngay.classList.add("chon");
    document.querySelector(".hop-chi-tiet-ngay h4").innerHTML = `📅 Chi tiết ngày ${ngay.innerText}/10/2025`;
  });
});

// Phần thao tác nhanh (.Toigian) — điều hướng đến các mục menu
document.querySelectorAll('.Luachon-chucnang').forEach((item, index) => {
  item.addEventListener('click', () => {
    const menuItems = ['diemdanh', 'suckhoe', 'hoctap', 'hoso'];
    const target = menuItems[index] || 'tongquan';
    
    // click menu button tương ứng
    const btn = document.querySelector(`.menu button[data-target="${target}"]`);
    if (btn) btn.click();
  });
});

// Phần học tập — Quản lý tabs + sections
(function(){
  const tabs = document.querySelectorAll('.tab');
  const sectionAll = document.querySelector('.tatcamonhoc');
  const sectionMain = document.querySelector('.monchinh');
  const sectionProgress = document.querySelector('.tiendo');

  function showSection(tabType) {
    // Ẩn tất cả sections
    if (sectionAll) sectionAll.style.display = 'none';
    if (sectionMain) sectionMain.style.display = 'none';
    if (sectionProgress) sectionProgress.style.display = 'none';

    // Hiện section tương ứng
    if (tabType === 'all' && sectionAll) sectionAll.style.display = 'block';
    else if (tabType === 'main' && sectionMain) sectionMain.style.display = 'block';
    else if (tabType === 'progress' && sectionProgress) sectionProgress.style.display = 'block';

    // Cập nhật trạng thái active của tabs
    tabs.forEach(tab => {
      if (tab.dataset.tab === tabType) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  // Gắn sự kiện cho từng tab
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabType = tab.dataset.tab;
      showSection(tabType);
    });
  });

  // Khởi tạo: hiện tab active hoặc "all" mặc định
  const activeTab = document.querySelector('.tab.active');
  if (activeTab) {
    showSection(activeTab.dataset.tab);
  } else {
    showSection('all');
  }
})();
// ====== DATA ======
const chats = [
    { name: "Nguyễn Văn A", key: "chat_NguyenVanA", unread: 1 },
    { name: "Trần Thị B", key: "chat_TranThiB", unread: 1 }
];

let currentChatIndex = 0;
function openChat() {
    document.getElementById("chatOverlay").style.display = "flex";
    selectChat(currentChatIndex);
}

function closeChat() {
    document.getElementById("chatOverlay").style.display = "none";
}
function selectChat(index) {
    currentChatIndex = index;

    document.querySelectorAll(".chat-item").forEach((item, i) => {
        item.classList.toggle("active", i === index);

        if (i === index) {
            const badge = item.querySelector(".badge");
            if (badge) badge.style.display = "none";
            chats[i].unread = 0;
        }
    });

    renderMessages();
}
function getMessages() {
    const key = chats[currentChatIndex].key;
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveMessage(sender, text) {
    const key = chats[currentChatIndex].key;
    const messages = getMessages();

    messages.push({
        sender: sender, // "parent" | "teacher"
        text: text,
        time: new Date().toLocaleString("vi-VN")
    });

    localStorage.setItem(key, JSON.stringify(messages));
}
function renderMessages() {
    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = "";

    getMessages().forEach(msg => {
        const div = document.createElement("div");
        div.className = `message ${msg.sender === "parent" ? "sent" : "received"}`;
        div.innerText = msg.text;
        messagesDiv.appendChild(div);
    });

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
function sendMessage() {
    const input = document.getElementById("messageInput");
    const text = input.value.trim();

    if (!text) return;

    saveMessage("parent", text);
    renderMessages();
    input.value = "";
}
function receiveMessage(chatIndex, text) {
    const key = chats[chatIndex].key;
    const messages = JSON.parse(localStorage.getItem(key)) || [];

    messages.push({
        sender: "teacher",
        text: text,
        time: new Date().toLocaleString("vi-VN")
    });

    localStorage.setItem(key, JSON.stringify(messages));

    if (chatIndex === currentChatIndex &&
        document.getElementById("chatOverlay").style.display === "flex") {
        renderMessages();
    } else {
        chats[chatIndex].unread = 1;
        const badge = document.querySelectorAll(".chat-item")[chatIndex]
            .querySelector(".badge");
        badge.style.display = "inline";
        badge.innerText = "1";
    }
}

setTimeout(() => {
    receiveMessage(1, "Nhớ nộp bài trước 10h nhé");
}, 3000);
function makeEditable(btn) {
        const span = btn.previousElementSibling;
        const originalValue = span.textContent.trim();

        span.contentEditable = true;
        span.focus();

        // Hiển thị nút Lưu & Hủy khi bắt đầu chỉnh sửa
        document.getElementById('saveAllBtn').style.display = 'inline-block';
        document.getElementById('cancelBtn').style.display = 'inline-block';

        // Lưu giá trị gốc để có thể hủy
        span.dataset.original = originalValue;
    }

    // Lưu tất cả thay đổi vào localStorage
    document.getElementById('saveAllBtn').addEventListener('click', () => {
        const items = document.querySelectorAll('#contactSection .gia-tri');
        items.forEach(item => {
            if (item.contentEditable === 'true') {
                const field = item.dataset.field;
                const value = item.textContent.trim();
                localStorage.setItem(`contact_${field}`, value);
                item.contentEditable = false;
                item.style.background = '';
                item.style.border = '';
            }
        });

        document.getElementById('saveAllBtn').style.display = 'none';
        document.getElementById('cancelBtn').style.display = 'none';
        alert('Đã lưu tất cả thay đổi!');
    });

    // Hủy tất cả chỉnh sửa đang mở
    document.getElementById('cancelBtn').addEventListener('click', () => {
        const items = document.querySelectorAll('#contactSection .gia-tri');
        items.forEach(item => {
            if (item.contentEditable === 'true') {
                item.textContent = item.dataset.original || '';
                item.contentEditable = false;
                item.style.background = '';
                item.style.border = '';
            }
        });

        document.getElementById('saveAllBtn').style.display = 'none';
        document.getElementById('cancelBtn').style.display = 'none';
    });

    // Tải dữ liệu đã lưu từ localStorage khi mở trang
    window.addEventListener('load', () => {
        const fields = ['address', 'parent', 'phone', 'email', 'emergency'];
        fields.forEach(field => {
            const saved = localStorage.getItem(`contact_${field}`);
            if (saved) {
                const span = document.querySelector(`[data-field="${field}"]`);
                if (span) span.textContent = saved;
            }
        });
    });
const students = {
    1: {
        schedule: [
            ["Thứ 2", "Toán", "1-2", "7:30 - 9:00", "Cô Lan"],
            ["Thứ 3", "Tiếng Việt", "3-4", "9:10 - 10:40", "Thầy Minh"]
        ]
    },
    2: {
        schedule: [
            ["Thứ 2", "Toán", "1", "7:30 - 8:15", "Cô Hoa"],
            ["Thứ 4", "Tự nhiên", "2", "8:20 - 9:00", "Thầy Long"]
        ]
    }
};

function toggleStudentList() {
    const list = document.getElementById("studentList");
    list.style.display = list.style.display === "block" ? "none" : "block";
}

function switchStudent(id) {
    currentStudentId = id;
    document.getElementById("studentName").innerText = students[id].name;
    document.getElementById("studentList").style.display = "none";
    renderAttendance();
    renderSchedule();
}

function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".menu button").forEach(b => b.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    event.target.classList.add("active");
}

function renderAttendance() {
    const ul = document.getElementById("attendanceData");
    ul.innerHTML = "";
    students[currentStudentId].attendance.forEach(a => {
        const li = document.createElement("li");
        li.innerText = a;
        ul.appendChild(li);
    });
}

function renderSchedule() {
    const tbody = document.getElementById("scheduleData");
    tbody.innerHTML = "";
    students[currentStudentId].schedule.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(col => {
            const td = document.createElement("td");
            td.innerText = col;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

// Load mặc định
renderAttendance();
renderSchedule();
function toggleStudentList(event) {
    event.stopPropagation();
    const dropdown = document.getElementById("studentDropdown");
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
}
function changeStudent(studentId) {
    currentStudentId = studentId;

    document.getElementById("studentName").innerText =
        studentData[studentId].name;

    document.getElementById("studentDropdown").style.display = "none";

    loadAttendance();
    loadSchedule();
}
document.addEventListener("click", function () {
    document.getElementById("studentDropdown").style.display = "none";
});
const API_BASE = "https://localhost:7010/api/phuhuynh";
let currentStudentId = null;

/* ================= LOAD DANH SÁCH HỌC SINH ================= */
async function loadStudents(parentId) {
    const res = await fetch(`${API_BASE}/student/parent/${parentId}`);
    const students = await res.json();

    const dropdown = document.getElementById("studentDropdown");
    dropdown.innerHTML = "";

    students.forEach(s => {
        const li = document.createElement("li");
        li.innerText = `${s.fullName} - Lớp ${s.className}`;
        li.onclick = () => changeStudent(s.studentID);
        dropdown.appendChild(li);
    });

    if (students.length > 0) {
        changeStudent(students[0].studentID);
    }
}

/* ================= ĐỔI HỌC SINH ================= */
function changeStudent(studentId) {
    currentStudentId = studentId;
    loadDashboard(studentId);
    loadProfile(studentId);
    loadSchedule(studentId);
}

/* ================= TỔNG QUAN ================= */
async function loadDashboard(studentId) {
    const res = await fetch(`${API_BASE}/dashboard/${studentId}`);
    const data = await res.json();

    document.getElementById("attendanceStatus").innerText = data.attendance;
    document.getElementById("healthStatus").innerText = data.health;
    document.getElementById("newMessageCount").innerText = data.newMessages;
}

/* ================= HỒ SƠ ================= */
async function loadProfile(studentId) {
    const res = await fetch(`${API_BASE}/student/${studentId}`);
    const s = await res.json();

    document.querySelector('[data-profile="fullName"]').innerText = s.fullName;
    document.querySelector('[data-profile="className"]').innerText = s.className;
    document.querySelector('[data-profile="teacher"]').innerText = s.teacher;
    document.querySelector('[data-profile="teacherPhone"]').innerText = s.teacherPhone;
    document.querySelector('[data-profile="address"]').innerText = s.address;
    document.querySelector('[data-profile="parent"]').innerText = s.parent;
    document.querySelector('[data-profile="phone"]').innerText = s.phone;
    document.querySelector('[data-profile="email"]').innerText = s.email;

    document.getElementById("studentName").innerText =
        `${s.fullName} - Lớp ${s.className}`;
}

/* ================= LỊCH HỌC ================= */
async function loadSchedule(studentId) {
    const res = await fetch(`${API_BASE}/schedule/${studentId}`);
    const data = await res.json();

    const tbody = document.getElementById("scheduleData");
    tbody.innerHTML = "";

    data.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.day}</td>
                <td>${item.subject}</td>
                <td>${item.period}</td>
                <td>${item.time}</td>
                <td>${item.teacher}</td>
            </tr>
        `;
    });
}

/* ================= KHỞI TẠO ================= */
document.addEventListener("DOMContentLoaded", () => {
    const parentId = 1; // lấy từ login
    loadStudents(parentId);
});

    // Base API URL - chỉnh lại theo server của bạn
    const baseApiUrl = window.BASE_API_URL || '/api';

    // Utility to fetch JSON and handle errors
    async function getJson(url) {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    }

    // Render parent + students list
    async function loadParent(parentId = 1) {
        try {
            const data = await getJson(`${baseApiUrl}/parents/${parentId}`);

            // Expected shape (example):
            // { parentName, students: [{id,name,clazz}], selectedStudentId, contact: {...}, summary: {...}, schedule: [...], messages: [...] }

            document.getElementById('parentName').textContent = `Phụ huynh: ${data.parentName || '—'}`;

            const dropdown = document.getElementById('studentDropdown');
            dropdown.innerHTML = '';
            (data.students || []).forEach(s => {
                const li = document.createElement('li');
                li.textContent = `${s.name} - Lớp ${s.clazz || ''}`.trim();
                li.onclick = () => selectStudent(s.id);
                dropdown.appendChild(li);
            });

            const sel = (data.students || []).find(x => x.id === data.selectedStudentId) || (data.students || [])[0];
            if (sel) setActiveStudent(sel);

            // Render contact info
            if (data.contact) {
                for (const key of ['address','parent','phone','email','emergency']) {
                    const el = document.querySelector(`[data-field="${key}"]`);
                    if (el && data.contact[key] !== undefined) el.textContent = data.contact[key];
                }
            }

            // Render schedule
            renderSchedule(data.schedule || []);

            // Render attendance/summary boxes if provided
            // (example: update elements by id or class here)

            // Render chat/messages
            renderChats(data.messages || []);

        } catch (err) {
            console.error('loadParent error', err);
        }
    }

    function setActiveStudent(student) {
        document.getElementById('studentName').textContent = `${student.name} - Lớp ${student.clazz || ''}`;
    }

    function selectStudent(id) {
        // Toggle dropdown hide
        const dd = document.getElementById('studentDropdown');
        dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
        // Load data for student if needed (call parent endpoint again or student-specific)
        // Example: getJson(`${baseApiUrl}/students/${id}`).then(...)
    }

    function toggleStudentList(e) {
        const dd = document.getElementById('studentDropdown');
        dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
    }

    function renderSchedule(rows) {
        const tbody = document.getElementById('scheduleData');
        tbody.innerHTML = '';
        rows.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${r.day || ''}</td>
                <td>${r.subject || ''}</td>
                <td>${r.period || ''}</td>
                <td>${r.time || ''}</td>
                <td>${r.teacher || ''}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    function renderChats(messages) {
        const list = document.getElementById('chatList');
        const msgs = document.getElementById('messages');
        list.innerHTML = '';
        msgs.innerHTML = '';

        const grouped = {};
        (messages || []).forEach(m => {
            grouped[m.conversationId] = grouped[m.conversationId] || [];
            grouped[m.conversationId].push(m);
        });

        Object.keys(grouped).forEach((convId, idx) => {
            const item = document.createElement('div');
            item.className = 'chat-item';
            item.onclick = () => showConversation(convId);
            item.innerHTML = `<span class="name">${grouped[convId][0].fromName || 'Chat ' + (idx+1)}</span>`;
            list.appendChild(item);
        });

        function showConversation(convId) {
            msgs.innerHTML = '';
            (grouped[convId] || []).forEach(m => {
                const d = document.createElement('div');
                d.className = 'message';
                d.innerHTML = `<strong>${m.fromName}:</strong> ${m.text}`;
                msgs.appendChild(d);
            });
        }
    }

    function openChat() {
        document.getElementById('chatOverlay').style.display = 'block';
    }

    function closeChat() {
        document.getElementById('chatOverlay').style.display = 'none';
    }

    function sendMessage() {
        const input = document.getElementById('messageInput');
        const text = input.value.trim();
        if (!text) return;
        // Example POST to API
        fetch(`${baseApiUrl}/messages`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({text}) })
            .then(r => r.ok && r.json())
            .then(() => { input.value = ''; loadParent(); })
            .catch(console.error);
    }

    // Start loading on page ready
    document.addEventListener('DOMContentLoaded', () => loadParent(1));
