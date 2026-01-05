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