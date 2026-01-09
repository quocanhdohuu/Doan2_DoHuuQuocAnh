var current_url = "https://localhost:7010/api-doan2";
var app = angular.module('GiaoVien', []);
var teacherId = 1;
app.controller("ThongTinGV_Ctrl", function ($scope, $http) {

    $scope.teacher = {};
    const teacherId = 1;

    $scope.LoadTeacher = function () {
        $http.get(current_url + "/GiaoVien_TC/Tea_GetByID?id=" + teacherId)
            .then(function (res) {
                console.log("DATA:", res.data); 
                $scope.teacher = res.data;
            }, function (err) {
                console.error("ERROR:", err);
                alert("Không lấy được thông tin giáo viên");
            });
    };
    
     $scope.editTeacher = function () {

        $http.put(current_url + "/GiaoVien_TC/Tea_Update", $scope.teacher)
            .then(function () {
                alert("Cập nhật thông tin thành công!");
            }, function (err) {
                console.error(err);
                alert("Cập nhật thông tin thất bại!");
            });
    };
    $scope.ChangePassword = function () {
    $http.put(current_url + "/QLUser/User_ChangePassword?id=" + $scope.teacher.userID, {
        oldPassword: $scope.oldPassword,
        newPassword: $scope.newPassword
    }).then(function () {
        alert("Đổi mật khẩu thành công");
    }, function (err) {
        alert("Đổi mật khẩu thất bại");
    });
    };
    $scope.LoadTeacher();
});
//----------------------------Điểm danh-------------------------------
app.controller("DiemDanhCtrl", function ($scope, $http) {

    $scope.dsHocSinh = [];
    $scope.today = new Date().toISOString().split('T')[0];

    $scope.loadHocSinh = function () {
    if (!$scope.lopDangChon) return;

    $http.get(
        "https://localhost:7010/api-doan2/GiaoVien_Stu/Stu_GetAll?id=" + $scope.lopDangChon
    )
    .then(function (res) {

        // Gán trạng thái mặc định = có mặt
        $scope.dsHocSinh = res.data.map(hs => {
            hs.trangthai = 'comat';
            return hs;
        });

        // reset phân trang
        $scope.currentPage = 1;

    }, function () {
        alert("Không lấy được danh sách học sinh theo lớp");
    });
     };

    
    $scope.setcolor = function (hs) {
        if (hs.trangthai === 'comat') {
            return 'green';
        } else if (hs.trangthai === 'vang') {
            return 'red';
        } else if (hs.trangthai === 'dimuon') {
            return 'orange';
        }
    };
    $scope.getBtnStyle = function (hs, type) {
    if (hs.trangthai === type) {
        if (type === 'comat') return { background: 'green', color: 'white' };
        if (type === 'vang') return { background: 'red', color: 'white' };
        if (type === 'dimuon') return { background: 'orange', color: 'white' };
    }
    return { background: 'transparent', color: 'black' };
};
    $scope.getClassTrangThai = function (hs) {
        return {
            'tt-comat': hs.trangthai === 'comat',
            'tt-vang': hs.trangthai === 'vang',
            'tt-dimuon': hs.trangthai === 'dimuon'
        };
    };
    $scope.getTextTrangThai = function (hs) {
        switch (hs.trangthai) {
            case 'comat': return 'Có mặt';
            case 'vang': return 'Vắng';
            case 'dimuon': return 'Đi muộn';
            default: return '';
        }
    };
    $scope.updateCount = function() {
    $scope.slgcomatDD = $scope.dsHocSinh.filter(hs => hs.trangthai === 'comat').length;
    $scope.slgvangDD = $scope.dsHocSinh.filter(hs => hs.trangthai === 'vang').length;
    $scope.slgdimuonDD = $scope.dsHocSinh.filter(hs => hs.trangthai === 'dimuon').length;
    };
    $scope.setTrangThai = function (hs, trangthai) {
    hs.trangthai = trangthai;
    $scope.updateCount();
    };

    
    $scope.luuDiemDanh = function () {
        if (!$scope.lopDangChon) {
        alert("Vui lòng chọn lớp trước khi lưu điểm danh!");
        return;
    }
    if (!$scope.ngayDiemDanh) {
        alert("Vui lòng chọn ngày điểm danh!");
        return;
    }
    $scope.dsHocSinh.forEach(hs => {
        const data = {
            studentID: hs.studentID,
            classID: parseInt($scope.lopDangChon),
            date: $scope.ngayDiemDanh,
            status: hs.trangthai,
            note: hs.note || ""
        };

        $http.post(current_url + "/GiaoVien_Attendance/AT_SaveAten", data);
    });

    alert("Lưu điểm danh xong");
    };
    $scope.luuDiemDanhle = function (hs) {
        if (!$scope.lopDangChon) {
        alert("Vui lòng chọn lớp trước khi lưu điểm danh!");
        return;
    }
    if (!$scope.ngayDiemDanh) {
        alert("Vui lòng chọn ngày điểm danh!");
        return;
    }
        const data = {
            studentID: hs.studentID,
            classID: parseInt($scope.lopDangChon),
            date: $scope.ngayDiemDanh,
            status: hs.trangthai,
            note: hs.note || ""
        };

    $http.post(current_url + "/GiaoVien_Attendance/AT_SaveAten", data);

    alert("Lưu điểm danh xong");
    };
    $scope.loadclass=function(){
    $http.get(current_url + "/GiaoVien_TCLass/TC_GetClass?teacherId=" + teacherId)
        .then(function (res) {
            $scope.dsLop=res.data;
        }, function (err) {
            console.error(err);
            alert("Không lấy được danh sách lớp");
        });
    };    
    $scope.ghiChuDDVisible = false;
    $scope.loadclass();
    $scope.loadHocSinh();

    $scope.currentPage = 1;      
    $scope.pageSize = 5;         

    $scope.numberOfPages = function() {
    return Math.ceil($scope.dsHocSinh.length / $scope.pageSize);
    
};
});

//------------------SỨc khỏe--------------------------------------
app.controller("SucKhoeCtrl", function ($scope, $http) {
    $scope.currentPage = 1;   
    $scope.pageSize = 5; 
  
    $scope.today = new Date().toISOString().split('T')[0];
    $scope.healthList = [];
    $scope.dsHocSinh = [];

    // Load danh sách lớp
    $scope.loadclass = function() {
        $http.get(current_url + "/GiaoVien_TCLass/TC_GetClass?teacherId=" + teacherId)
            .then(function (res) {
                $scope.dsLop = res.data;
            }, function (err) {
                console.error(err);
                alert("Không lấy được danh sách lớp");
            });
    };
    $scope.loadclass();

    // Khi chọn lớp → load học sinh lớp đó
    $scope.loadHealthDaily = function () {
        if (!$scope.lopDangChon) return;

        $http.get(current_url + "/GiaoVien_Stu/Stu_GetAll?id=" + $scope.lopDangChon)
            .then(function (res) {
                // Tạo healthList mới, chỉ có studentID + fullName
                $scope.healthList = res.data.map(hs => ({
                    studentID: hs.studentID,
                    fullName: hs.fullName,
                    healthStatus: "",      // để giáo viên nhập
                    teacherNote: "",
                    mealStatus: "",
                    nutritionNote: ""
                }));
                console.log("Health List:", $scope.healthList);
            }, function (err) {
                console.error(err);
                alert("Không lấy được danh sách học sinh lớp");
            });
    };
    $scope.loadHocSinh = function () {
        $http.get(current_url + "/GiaoVien_Stu/Stu_GetAll")
            .then(function (res) {
                $scope.dsHocSinh = res.data;
                console.log("DS HỌC SINH:", res.data);
            }, function (err) {
                console.error(err);
            });
    };
    $scope.slgTBYQSK = 0; // Tổng ghi chú
    $scope.slgKMTQSK = 0; // Khỏe mạnh
    $scope.slgCYTQSK = 0; // Cần chú ý
    $scope.slgADTQSK = 0; // Ăn đầy đủ
    $scope.updateThongKe = function () {
    $scope.slgTBYQSK = $scope.healthList.length;
        
    $scope.slgKMTQSK = $scope.healthList.filter(h =>
        h.healthStatus === 'Khỏe mạnh'
    ).length;

    $scope.slgCYTQSK = $scope.healthList.filter(h =>
        h.healthStatus === 'Ốm'
    ).length;

    $scope.slgADTQSK = $scope.healthList.filter(h =>
        h.mealStatus === 'Ăn đầy đủ'
    ).length;
    };

$scope.luuGhiChuSK = function () {
    if (!$scope.lopDangChon) {
        alert("Vui lòng chọn lớp trước khi lưu ghi chú sức khỏe!");
        return;
    }
    if (!$scope.ngaySucKhoe) {
        alert("Vui lòng chọn ngày sức khỏe!");
        return;
    }
    $scope.healthList.forEach(h => {
       const data = {
            StudentID: h.studentID,
            ClassID: parseInt($scope.lopDangChon),
            Date: $scope.ngaySucKhoe,
            HealthStatus: h.healthStatus || "Khỏe mạnh",
            TeacherNote: h.teacherNote || "",
            MealStatus: h.mealStatus|| "Ăn đầy đủ",
};
        $http.post(current_url + "/GiaoVien_HD/HD_Create", data);
    });
    alert("Lưu ghi chú sức khỏe xong");
};
$scope.luuGhiChule = function (h) {
    if (!$scope.lopDangChon) {
        alert("Vui lòng chọn lớp trước khi lưu ghi chú sức khỏe!");
        return;
    }
    if (!$scope.ngaySucKhoe) {
        alert("Vui lòng chọn ngày sức khỏe!");
        return;
    }
       const data = {
            StudentID: h.studentID,
            ClassID: parseInt($scope.lopDangChon),
            Date: $scope.ngaySucKhoe,
            HealthStatus: h.healthStatus || "Khỏe mạnh",
            TeacherNote: h.teacherNote || "",
            MealStatus: h.mealStatus|| "Ăn đầy đủ",
        };
        $http.post(current_url + "/GiaoVien_HD/HD_Create", data);
    alert("Lưu ghi chú sức khỏe xong");
};
$scope.numberOfPages = function() {
    return Math.ceil($scope.healthList.length / $scope.pageSize);
};
    $scope.loadHocSinh();
    $scope.loadHealthDaily();
});
app.filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) return [];
        start = +start; // chuyển sang số
        return input.slice(start);
    }
});


// -------------------------Điểm số------------------------- 
app.controller("ScoreCtrl", function ($scope, $http) {
    $scope.dsHocSinh = [];
    $scope.loadHocSinh = function () {
        $http.get(current_url + "/GiaoVien_Stu/Stu_GetAll?id=" + $scope.lopDangChon)
            .then(function (res) {
                $scope.dsHocSinh = res.data;
                $scope.dsHocSinh.forEach(ph => {
                    $http.get(current_url+"/GiaoVien_Sco/Score_GetByID?stuid="+ph.studentID+"&id="+$scope.lopDangChon+"&term="+$scope.loaiDiemDangChon)
                    .then(res => {
                            ph.Diemht = res.data.score; 
                        })
                        .catch(err => console.error("Không lấy được điểm:", err));
                 })
            }, function (err) {
                console.error(err);
            });
    };

$scope.loadclass = function() {
        $http.get(current_url + "/GiaoVien_TCLass/TC_GetClass?teacherId=" + teacherId)
            .then(function (res) {
                $scope.dsLop = res.data;
            }, function (err) {
                console.error(err);
                alert("Không lấy được danh sách lớp");
            });
    };
    
$scope.SaveDiem = function () {
    if (!$scope.lopDangChon) {
        alert("Vui lòng chọn lớp!");
        return;
    }
    if (!$scope.loaiDiemDangChon) {
        alert("Vui lòng chọn loại điểm!");
        return;
    }

    let promises = [];

    $scope.dsHocSinh.forEach(hs => {
        if (hs.scoreValue !== undefined && hs.scoreValue !== null && hs.scoreValue !== '' && hs.scoreValue !== 0&& !isNaN(hs.scoreValue) && hs.scoreValue >= 0 && hs.scoreValue <= 10) {
            const hsData = {
            studentID: hs.studentID,
            subject: "Math",                
            score: hs.scoreValue,            
            term: $scope.loaiDiemDangChon,   
            date: new Date(),               
            teacherID: teacherId,
            classID: parseInt($scope.lopDangChon)
            };
            promises.push(
                $http.post(current_url + "/GiaoVien_Sco/Score_Create", hsData)
            );
        }
    });

    if (promises.length === 0) {
        alert("Không có học sinh nào được nhập điểm!");
        return;
    }

    Promise.all(promises)
        .then(() => {
            alert("Lưu điểm thành công!");
        })
        .catch(err => {
            console.error(err);
            alert("Có lỗi xảy ra khi lưu điểm!");
        });
    };

$scope.saveScorele = function(hs) {
    if (!hs.scoreValue) {
        alert("Điểm không hợp lệ! Vui lòng nhập điểm từ 0 đến 10.");
        return;
    }
    if (!$scope.lopDangChon) {
        alert("Vui lòng chọn lớp!");
        return;
    }
    if (!$scope.loaiDiemDangChon) {
        alert("Vui lòng chọn loại điểm!");
        return;
    }
    if (isNaN(hs.scoreValue) || hs.scoreValue < 0 || hs.scoreValue > 10) {
        alert("Điểm không hợp lệ! Vui lòng nhập điểm từ 0 đến 10.");
        return;
    }
    const hsData = {
    studentID: hs.studentID,
    subject: "Math",                
    score: hs.scoreValue,            
    term: $scope.loaiDiemDangChon,   
    date: new Date(),               
    teacherID: teacherId,
    classID: parseInt($scope.lopDangChon)
    };

    $http.post(current_url + "/GiaoVien_Sco/Score_Create", hsData)
        .then(() => {
            alert("Lưu điểm thành công!");
        })
        .catch(err => {
            console.error(err);
            alert("Lưu điểm thất bại!, đã tồn tại điểm này");
        });
    };
    $scope.cancelEdit = function(hs) {
    hs.scoreValue = null;
    };
$scope.exportExcel = function () {
    const data = $scope.dsHocSinh.map(hs => ({
        "Học sinh": hs.fullName,
        "Loại điểm": $scope.loaiDiemDangChon,
        "Điểm": hs.Diemht ?? ""
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "DanhSachDS");
    XLSX.writeFile(wb, "DanhSachDS.xlsx");
};

    $scope.loadclass();
    $scope.loadHocSinh();
    
    $scope.currentPage = 1;
    $scope.pageSize = 5;
    $scope.numberOfPages = function() {
    return Math.ceil($scope.dsHocSinh.length / $scope.pageSize);
};
});
app.controller("LichHocCtrl", function ($scope, $http) {

    $scope.scheduleList = []; // danh sách gốc

    $scope.loadSchedule = function () {
        $http.get(current_url + "/GiaoVien_SD/SD_GetAll")
            .then(function (res) {
                $scope.scheduleList = res.data;
                 $scope.scheduleList.forEach(ph => {
                    $http.get(current_url+"/GiaoVien_SD/SD_GetByID?id="+ph.classID)
                    .then(res => {
                            ph.ClassName = res.data.className; 
                        })
                        .catch(err => console.error("Không lấy được tên lớp:", err));
                 })

            }, function (err) {
                console.error(err);
                alert("Không tải được lịch học");
            });
    };

    $scope.loadSchedule();

});
app.controller("LienLacCtrl", function ($scope, $http) {

    $scope.Tinden = [];
    $scope.TinGui = [];
    $scope.dsLop = [];
    $scope.danhba = [];

    $scope.loadclass = function () {
        $http.get(current_url + "/GiaoVien_TCLass/TC_GetClass?teacherId=" + teacherId)
            .then(res => {
                $scope.dsLop = res.data;
            });
    };

    $scope.loadDTinden = function () {
    $http.get(current_url + "/GiaoVien_Mess/Mse_GetRe?id="+teacherId)
        .then(res => {
            console.log(res.data); // kiểm tra dữ liệu
            $scope.Tinden = res.data;
            $scope.Tinden.forEach(ph => {
                $http.get(current_url + "/GiaoVien_pa/pr_GetByID?id=" + ph.senderID)
                    .then(res => {
                        ph.ParenName = res.data.fullName; 
                        ph.studentID= res.data.studentID; 
                        $scope.Tinden.forEach(ph => {
                        $http.get(current_url + "/GiaoVien_Stu/Stu_GetByID?id=" + ph.studentID)
                            .then(res => {
                                ph.studentName = res.data.fullName; 
                            })
                            .catch(err => console.error("Không lấy được tên học sinh:", err));
                        });
                    })
                    .catch(err => console.error("Không lấy được tên học sinh:", err));
            });
            
        }, err => {
            console.error(err);
            alert("Không tải được tin nhắn");
        });
};
    $scope.loadDTinGui = function () {
    $http.get(current_url + "/GiaoVien_Mess/Mse_GetSen?id="+teacherId)
        .then(res => {
            console.log(res.data); // kiểm tra dữ liệu
            $scope.TinGui= res.data;
            $scope.TinGui.forEach(ph => {
                $http.get(current_url + "/GiaoVien_pa/pr_GetByID?id=" + ph.receiverID)
                    .then(res => {
                        ph.ParenName = res.data.fullName; 
                        ph.studentID= res.data.studentID; 
                        $scope.TinGui.forEach(ph => {
                        $http.get(current_url + "/GiaoVien_Stu/Stu_GetByID?id=" + ph.studentID)
                            .then(res => {
                                ph.studentName = res.data.fullName; 
                            })
                            .catch(err => console.error("Không lấy được tên học sinh:", err));
                        });
                    })
                    .catch(err => console.error("Không lấy được tên học sinh:", err));
            });
        }, err => {
            console.error(err);
            alert("Không tải được tin nhắn");
        });
};
    $scope.loadDanhBa = function () {
    if (!$scope.lopDangChon) return;

    $http.get(current_url + "/GiaoVien_pa/pr_GetAll?classid=" + $scope.lopDangChon)
        .then(res => {
            $scope.danhba = res.data;
            $scope.danhba.forEach(ph => {
                $http.get(current_url + "/GiaoVien_Stu/Stu_GetByID?id=" + ph.studentID)
                    .then(res => {
                        ph.studentName = res.data.fullName; 
                    })
                    .catch(err => console.error("Không lấy được tên học sinh:", err));
            });
        })
        .catch(err => {
            console.error(err);
            alert("Không tải được danh bạ");
        });
};
    $scope.hienSoanTin = false;

    $scope.moSoanTin = function () {
    $scope.hienSoanTin = true;
};
    $scope.moSoanTin2 = function (hs) {
        $scope.Phunhuynh=hs.parentID;
    $scope.hienSoanTin = true;
};

    $scope.dongSoanTin = function () {
    $scope.hienSoanTin = false;
};
    $scope.SenMess = function () {
        if (!$scope.Phunhuynh) {
        alert("Vui lòng chọn phụ huynh");
        return;
    }

    if (!$scope.NDgui || $scope.NDgui.trim() === "") {
        alert("Vui lòng nhập nội dung tin nhắn");
        return;
    }

    const data = {
        senderID: teacherId,
        receiverID: $scope.Phunhuynh,
        sentTime: new Date(),
        content: $scope.NDgui,
        isRead: false
    };

    $http.post(current_url + "/GiaoVien_Mess/Mse_Create", data)
        .then(res => {
            alert("Gửi tin nhắn thành công");
            $scope.NDgui = "";
        })
        .catch(err => {
            console.error(err);
            alert("Gửi tin nhắn thất bại");
        });
};
    $scope.loadclass();
    $scope.loadDTinden();
    $scope.loadDTinGui();
    $scope.loadDanhBa();


    $scope.timKiemLL = function () {
    const tukhoa = ($scope.tuKhoaTim || "").toLowerCase().trim();

    if (!tukhoa) {
        $scope.loadDTinGui();
        $scope.loadDanhBa();
        return;
    }

    let coKetQua = false;

    // Tin đã gửi
    document.querySelectorAll('#DaGuiLL .ngNhanll').forEach(item => {
        const text = item.innerText.toLowerCase();
        const divCha = item.closest('div');

        if (text.includes(tukhoa)) {
            divCha.style.display = 'block';
            coKetQua = true;
        } else {
            divCha.style.display = 'none';
        }
    });

    // Danh bạ
    document.querySelectorAll('#DabaLL .ten').forEach(item => {
        const text = item.innerText.toLowerCase();
        const divCha = item.closest('.DBaLL');
        const hs = divCha.querySelector('.hocSinh')?.innerText.toLowerCase() || '';

        if (text.includes(tukhoa) || hs.includes(tukhoa)) {
            divCha.style.display = 'flex';
            coKetQua = true;
        } else {
            divCha.style.display = 'none';
        }
    });

    // Hộp thư đến
    document.querySelectorAll('#HopThuDenLL .nhanNguoiGui').forEach(item => {
        const text = item.innerText.toLowerCase();
        const divCha = item.closest('.TinDenLL');
        const ph = divCha.querySelector('.PHGui')?.innerText.toLowerCase() || '';

        if (!divCha) return;

        if (text.includes(tukhoa) || ph.includes(tukhoa)) {
            divCha.style.display = 'block';
            coKetQua = true;
        } else {
            divCha.style.display = 'none';
        }
    });
};
});
//------------------Tong Quan--------------------
const btnTONGQUAN = document.querySelector('#btnTongQuan');
const btnDiemDanh=document.querySelector('#btnDieDanh');
const btnSucKhoe=document.querySelector('#btnSucKhoe',);
const btnDiemSo=document.querySelector('#btnDiemSo');
const btnLienLac=document.querySelector('#btnLienLac');
const btnDangXuat=document.querySelector('#btnLogout');
const btnPhuDD=document.querySelectorAll('.btnDiemdanh'); 
const btnPhuND=document.querySelectorAll('.btnNhapDiem');
const btnLichday=document.querySelector('#btnLichDay');
const btnTTCN=document.querySelector('#btnTTCN');

function hdgan(button){
    let viec='';
    let loaiviec='';
    if(button===document.getElementById('btnLuuDiemDanh')){
        viec='Điểm danh lớp 6A';
        loaiviec='Điểm danh';
    } else if(button===document.getElementById('btnCSSTLL')){
        viec='Gửi tin cho phụ huynh Nguyễn Thị B về học sinh Nguyễn Văn A';
        loaiviec='Tin nhắn';
    } else if(button===document.getElementById('btncuasoTGCDS')){
        viec='Cập nhật điểm kiểm tra 15 phút lớp 7A';
        loaiviec='Điểm số';
    }
    object={
        viec: viec,
        loaiviec: loaiviec,
        thoigian: new Date().toLocaleString('vi-VN')
    }
        // Lấy danh sách đã có (hoặc mảng rỗng)
    let dsTin = JSON.parse(localStorage.getItem("HoatDongGan") || "[]");
    // Thêm tin mới vào mảng
    dsTin.push(object);
    // Lưu lại LocalStorage
    localStorage.setItem("HoatDongGan", JSON.stringify(dsTin));
}
function loadhdgan(){
    let dsTin = JSON.parse(localStorage.getItem("HoatDongGan") || "[]");
    let index = 0;
    dsTin.slice().reverse().forEach(tin => {
        if(index >= 3) return; // chỉ hiện tối đa 3
        let iddiv = '#HD' + (index + 1);
        let tinDiv = document.querySelector(iddiv); 
        let clss='';
        if(tin.loaiviec==='Điểm danh'){
            clss='diemdanhhd';
        } else if(tin.loaiviec==='Tin nhắn'){
            clss='tinnhanhd';
        } else if(tin.loaiviec==='Điểm số'){
            clss='diemsohd';
        }
        tinDiv.innerHTML=`
            
                <h3 >
                    <span>${tin.viec}</span>
                    <span  class="${clss}" >${tin.loaiviec}</span>
                </h3>
                <span style="color: gray;">${tin.thoigian}</span>
            
        `;
        index++;
    });
}
// document.getElementById('chonNgayLD').addEventListener('change', function () {
//     if(this.value<2010 || this.value===""||this.value>2100){
//         alert("Năm học phải lớn hơn hoặc bằng 2010 và bé hơn hoặc bằng 2100!");
//         this.value = "";
//     }
// });
document.getElementById('btnLocLichDay').addEventListener('click', function () {
    

     if(document.getElementById('chonNgayLD').value===""){
        alert("Vui lòng chọn tuần học để lọc!");
        return;
        }
        if(document.getElementById('chonKyHocLich').value===""){
        alert("Vui lòng chọn năm học để lọc!");
        return;
        }
    const kydangchon = document.getElementById('chonNgayLD').value;
    document.querySelectorAll('#DanhSachLich tr').forEach(tr => {
        const kyTrongBang = tr.querySelector('.KyHoc');
       
        if (!kyTrongBang) return;
        else if(kydangchon==="0"){
            tr.style.display = 'table-row';
        } else
        if (Number(kyTrongBang.textContent.trim()) === Number(kydangchon)) {
            tr.style.display = 'table-row';
        } else {
            tr.style.display = 'none';
        }
    });
     alert("Lọc lịch dạy thành công!");

});
document.getElementById('btnSuaTT').addEventListener('click', function() {
    if(document.getElementById('emailGV').value.trim() === '' ||
         document.getElementById('sdtGV').value.trim() === '' ||
            document.getElementById('chuyenMonGV').value.trim() === '' ||
            document.getElementById('ngaySinhGV').value.trim() === '' ||
            document.getElementById('maGV').value.trim() === ''||
            document.getElementById('tenGV').value.trim() === ''){
        alert("Vui lòng điền đầy đủ thông tin!");}
    else{
        luutt();
        alert("Sửa thông tin thành công!");
    }
    
});
function luutt(){
    object={
        email: document.getElementById('emailGV').value.trim(),
        sdt: document.getElementById('sdtGV').value.trim(),
        chuyenmon: document.getElementById('chuyenMonGV').value.trim(),
        ngaysinh: document.getElementById('ngaySinhGV').value.trim(),
        magv: document.getElementById('maGV').value.trim(),
        tengv: document.getElementById('tenGV').value.trim()}
    
         // Lấy danh sách đã có (hoặc mảng rỗng)
    let dsTin = JSON.parse(localStorage.getItem("TTGiaoVien") || "[]");

    // Thêm tin mới vào mảng
    dsTin.push(object);

    // Lưu lại LocalStorage
    localStorage.setItem("TTGiaoVien", JSON.stringify(dsTin));
    
}
// function loadTTGV() {
//     let dsTin = JSON.parse(localStorage.getItem("TTGiaoVien") || "[]");
//     let lastTT = dsTin[dsTin.length - 1];
//     if (!lastTT) return;
//     document.getElementById('emailGV').value = lastTT.email;
//     document.getElementById('sdtGV').value = lastTT.sdt;
//     document.getElementById('chuyenMonGV').value = lastTT.chuyenmon;
//     document.getElementById('ngaySinhGV').value = lastTT.ngaysinh;
//     document.getElementById('maGV').value = lastTT.magv;
//     document.getElementById('tenGV').value = lastTT.tengv;
//     document.getElementById('TenGiaoVien').innerText ='Giáo Viên - ' + lastTT.tengv;
// }
 
document.getElementById('btnbochan').addEventListener('click', function() {
    document.querySelectorAll('#doimk input').forEach(input => {
        input.type = input.type === 'password' ? 'text' : 'password';
    });
});
document.getElementById('btnDoiMatKhau').addEventListener('click', function() {
    document.querySelectorAll('#doimk input').forEach(input => {
        input.value = '';
    });
    document.querySelector('#doimk').style.display='block';
    document.querySelector('#TTCNGV').style.display='none';
});
document.getElementById('btnHuyDoiMK').addEventListener('click', function() {
    document.querySelectorAll('#doimk input').forEach(input => {
        input.value = '';
    });
     document.querySelector('#doimk').style.display='none';
    document.querySelector('#TTCNGV').style.display='block';
});
document.getElementById('btnXacNhanDoiMatKhau').addEventListener('click', function () {
    let mkMoi = document.getElementById('makmoi').value.trim();
    let mkNhapLai = document.getElementById('mkmoinl').value.trim();
     let mkcu = document.getElementById('mkcu').value.trim();

    if (mkMoi === '' || mkNhapLai === ''||mkcu === '') {
        alert("Vui lòng điền đầy đủ các ô!");
        return;
    }

    if (mkMoi !== mkNhapLai) {
        alert("Mật khẩu mới và xác nhận mật khẩu mới không khớp!");
        return;
    }

    document.querySelector('#doimk').style.display = 'none';
    document.querySelector('#TTCNGV').style.display = 'block';
});  
//ham xoa ghi chu
function xoaGhiChu(button) {
    button.closest('tr').remove();
}
document.getElementById('btxoa').addEventListener('click', function() {
    const row = document.querySelector('#DanhSachDS').querySelector('tr.selected');
    if (row) {
        let diemText = row.cells[2].innerText; 
        let diem = parseFloat(diemText);

        tdds -= 1;

        if (diem >= 8) Gioids -= 1;
        else if (diem >= 6.5) Khads -= 1;
        else if (diem >= 5) Trungbinhds -= 1;
        else Yeuds -= 1;

        if (tdds > 0) {
            diemtbds = (
                (diemtbds * (tdds + 1) - diem) / tdds
         ).toFixed(2);
        } else {
            diemtbds = 0;
        }

        TongDiemTSDS.innerText = tdds;
        DTBTSDS.innerText = diemtbds;
        GioiTSDS.innerText = Gioids;
        KhaTSDS.innerText = Khads;
        TrungBinhTSDS.innerText = Trungbinhds;
        YeuTSDS.innerText = Yeuds;

        xoaGhiChu(row.querySelector('.btnSuaDS'));
        document.querySelector('#CuaSoNĐSSUA').style.display = 'none';

    }
    
});
document.getElementById('btnxoask').addEventListener('click', function() {
    const row = document.querySelector('#DanhsachSK').querySelector('tr.selected');
    if (row) {
        const tinhTrang = row.cells[1].innerText;
        const buaAn = row.cells[5].innerText;

        tongghichu -= 1;

        if (tinhTrang === "Khỏe mạnh") khoemanh -= 1;
        else chuy -= 1;

        if (buaAn === "Đã Xong") andu -= 1;

        TSTongGCSK.innerText = tongghichu;
        TSKhoemanhSK.innerText = khoemanh;
        TSChuYSK.innerText = chuy;
        TSAnDuSK.innerText = andu;

        xoaGhiChu(row.querySelector('.btnGHICHUSK'));
        document.querySelector('#CuaSoSUAGhiChuSK').style.display = 'none';
    }
});
//HAm an menu
function an(nutbam){
    btnDiemDanh.style.backgroundColor='transparent';
    btnDiemSo.style.backgroundColor='transparent';
    btnLienLac.style.backgroundColor='transparent';
    btnSucKhoe.style.backgroundColor='transparent';
    btnTONGQUAN.style.backgroundColor='transparent';
    btnLichday.style.backgroundColor='transparent';
    btnTTCN.style.backgroundColor='transparent';
    nutbam.style.backgroundColor='white';
};
//ham doi trang
function doi(trang1,trang2,trang3,trang4,trang5,trang6,trang7){
    document.querySelector(trang1).style.display='block';
    document.querySelector(trang2).style.display='none';
    document.querySelector(trang3).style.display='none';
    document.querySelector(trang4).style.display='none';
    document.querySelector(trang5).style.display='none';
    document.querySelector(trang6).style.display='none';
    document.querySelector(trang7).style.display='none';

}
btnTTCN.addEventListener('click',function(){
    an(btnTTCN);
    doi('#ThongTinCaNhan','#TongQuan','#DieDanh','#SucKhoe','#DiemSo','#LienLac','#LichDay');
});
btnLichday.addEventListener('click',function(){
    an(btnLichday);
    doi('#LichDay','#TongQuan','#DieDanh','#SucKhoe','#DiemSo','#LienLac','#ThongTinCaNhan');
});
btnTONGQUAN.addEventListener('click',function(){
    an(btnTONGQUAN);
    doi('#TongQuan','#DieDanh','#SucKhoe','#DiemSo','#LienLac','#LichDay','#ThongTinCaNhan');
});

btnDiemDanh.addEventListener('click',function(){
    an(btnDiemDanh);
    doi('#DieDanh','#TongQuan','#SucKhoe','#DiemSo','#LienLac','#LichDay','#ThongTinCaNhan');
});
btnPhuDD.forEach(btn=>{
    btn.addEventListener('click',function(){
    an(btnDiemDanh);
    doi('#DieDanh','#TongQuan','#SucKhoe','#DiemSo','#LienLac','#LichDay','#ThongTinCaNhan');
});
});
btnDiemSo.addEventListener('click',function(){
    an(btnDiemSo);
    doi('#DiemSo','#TongQuan','#DieDanh','#SucKhoe','#LienLac','#LichDay','#ThongTinCaNhan');
});
btnPhuND.forEach(btn=>{
    btn.addEventListener('click',function(){
        an(btnDiemSo);
        doi('#DiemSo','#TongQuan','#DieDanh','#SucKhoe','#LienLac','#LichDay','#ThongTinCaNhan');
    })
});
btnLienLac.addEventListener('click',function(){
    an(btnLienLac);
    doi('#LienLac','#TongQuan','#DieDanh','#SucKhoe','#DiemSo','#LichDay','#ThongTinCaNhan');
});
btnSucKhoe.addEventListener('click',function(){
    an(btnSucKhoe);
    doi('#SucKhoe','#TongQuan','#DieDanh','#DiemSo','#LienLac','#LichDay','#ThongTinCaNhan');
});

//---------------------------------Liên lạc------------------------------------
const btnHopThuDenLL = document.querySelector('#btnHopThuDenLL');
const btnTinnhandiLL=document.querySelector('#btnTinNhanDiLL');
const btnDanhBaLL=document.querySelector('#btnDanhBaLL',);
const btnguitincsLL=document.querySelector('#btnCSSTLL')
//HAm an menuLL
function anLL(nutbam){
    btnHopThuDenLL.style.backgroundColor='transparent';
    btnTinnhandiLL.style.backgroundColor='transparent';
    btnDanhBaLL.style.backgroundColor='transparent';
    nutbam.style.backgroundColor='white';
};
function doiLL(trang1,trang2,trang3){
    document.querySelector(trang1).style.display='block';
    document.querySelector(trang2).style.display='none';
    document.querySelector(trang3).style.display='none';
}
btnHopThuDenLL.addEventListener('click',function(){
    anLL(btnHopThuDenLL);
    doiLL('#HopThuDenLL','#DaGuiLL','#DanhBaLL');
});
btnTinnhandiLL.addEventListener('click',function(){
    anLL(btnTinnhandiLL); 
    doiLL('#DaGuiLL','#HopThuDenLL','#DanhBaLL');
});
btnDanhBaLL.addEventListener('click',function(){
    anLL(btnDanhBaLL);
    doiLL('#DanhBaLL','#HopThuDenLL','#DaGuiLL');
});

btnguitincsLL.addEventListener('click',function(){
    themtindagui();
    resetST();
    hdgan(btnguitincsLL);
});
function resetST() {
    document.getElementById('txttieudeSTLL').value = ''; 
    document.getElementById('TXTNDSTLL').value = ''; 
}
let sotingui=0
function themtindagui() {

  const phuhuynh = document.querySelector('#chonPHSTLL').value;
  const tieude = document.querySelector('#txttieudeSTLL').value;
  const noidung = document.querySelector('#TXTNDSTLL').value;
  const thoigian = new Date().toLocaleString('vi-VN');

  if(sotingui>=10){
    sotingui=0;
  }
  let iddiv='#TNGuiLL'+(10-sotingui);
  const tinMoi = document.querySelector(iddiv);

  
  tinMoi.querySelector('.ngNhanll').innerText = `Gửi đến: ${phuhuynh}`;
  tinMoi.querySelector('.tieudeLL').innerText = tieude;
  tinMoi.querySelector('.ndguiLL').innerText = noidung;
  tinMoi.querySelector('.tgguiLL').innerText = thoigian;

  
  tinMoi.style.display = 'block';

  
  document.querySelector('#CuaSoSoanTinLL').style.display = 'none';
  sotingui++;
  // Tạo object tin mới
    let obj = {
    phuhuynh: phuhuynh,
    tieude: tieude,
    noidung: noidung,
    thoigian: thoigian
    };

    // Lấy danh sách đã có (hoặc mảng rỗng)
    let dsTin = JSON.parse(localStorage.getItem("TinDaGui") || "[]");

    // Thêm tin mới vào mảng
    dsTin.push(obj);

    // Lưu lại LocalStorage
    localStorage.setItem("TinDaGui", JSON.stringify(dsTin));
}

// document.getElementById('btnXuatEDS').addEventListener('click', function() { 
//     alert("Đã hoàn thành!");
//     const table = document.getElementById('DanhSachDS');

//     const wb = XLSX.utils.book_new();

//     const ws = XLSX.utils.table_to_sheet(table);

//     XLSX.utils.book_append_sheet(wb, ws, "DanhSachDS");

//     XLSX.writeFile(wb, "DanhSachDS.xlsx");
// });
document.getElementById('btnPhieuDiemDS').addEventListener('click', function() { 
    alert("Đã hoàn thành!");
     const { jsPDF } = window.jspdf;
     const doc = new jsPDF();

    const table = document.getElementById('DanhSachDS');
    
    doc.autoTable({
        html: table
    });

    doc.save("DanhSachDS.pdf");
});
function loadTinDaGui() {
    let dsTin = JSON.parse(localStorage.getItem("TinDaGui") || "[]");

    let index = 0;

    dsTin.forEach(tin => {
        if(index >= 10) return; // chỉ hiện tối đa 10

        let iddiv = '#TNGuiLL' + (10 - index);
        let tinDiv = document.querySelector(iddiv);

        tinDiv.querySelector('.ngNhanll').innerText = `Gửi đến: ${tin.phuhuynh}`;
        tinDiv.querySelector('.tieudeLL').innerText = tin.tieude;
        tinDiv.querySelector('.ndguiLL').innerText = tin.noidung;
        tinDiv.querySelector('.tgguiLL').innerText = tin.thoigian;
        tinDiv.style.display = 'block';

        index++;
    });
}
//---------------------------------Sức khỏe------------------------------------
const btnThemGhiChuSK=document.querySelector('#ThemGhichuSK');
const btnThoatCuaSoTGCSK=document.querySelectorAll('#btbThoatcsoGCSK');
const btntheGCCSSK=document.querySelector('#btncuasoTGCSK');
const TSTongGCSK=document.querySelector('#slgTBYQSK');
const TSKhoemanhSK=document.querySelector('#slgKMTQSK');
const TSChuYSK=document.querySelector('#slgCYTQSK');
const TSAnDuSK=document.querySelector('#slgADTQSK');
const capnhatghichusk=document.querySelector('#btncuasoTGCSKSUA');


let tongghichu=1;
let khoemanh=1;
let chuy=0;
let andu=1;

// document.getElementById('timLL').addEventListener('click', function () {
//     const tukhoa = document.getElementById('tentimkiem').value.toLowerCase().trim();

//     if (tukhoa === "") {
//         alert("Vui lòng nhập từ khóa để tìm kiếm!");
//         return;
//     }

//     let coKetQua = false;

//     // Tin đã gửi
//     document.querySelectorAll('#DaGuiLL .ngNhanll').forEach(item => {
//         const text = item.innerText.toLowerCase();
//         const divCha = item.closest('div');

//         if (text.includes(tukhoa)) {
//             divCha.style.display = 'block';
//             coKetQua = true;
//         } else {
//             divCha.style.display = 'none';
//         }
//     });

//     // Danh bạ
//     document.querySelectorAll('#DabaLL .ten').forEach(item => {
//         const text = item.innerText.toLowerCase();
//         const divCha = item.closest('.DBaLL');
//          const hs = divCha.querySelector('.hocSinh')?.innerText.toLowerCase().trim() || '';

//         if (text.includes(tukhoa)|| hs.includes(tukhoa)) {
//             divCha.style.display = 'flex';
//             coKetQua = true;
//         } else {
//             divCha.style.display = 'none';
//         }
//     });

//     // Hộp thư đến
//     document.querySelectorAll('#HopThuDenLL .nhanNguoiGui').forEach(item => {
//     const text = item.innerText.toLowerCase().trim();
//     const divCha = item.closest('.TinDenLL');
//      const ph = divCha.querySelector('.PHGui')?.innerText.toLowerCase().trim() || '';

//     if (!divCha) return;

//     if (text.includes(tukhoa) || ph.includes(tukhoa)) {
//         divCha.style.display = 'block';
//         coKetQua = true;
//     } else {
//         divCha.style.display = 'none';
//     }
// });
//     // if (!coKetQua) {
//     //     alert("Không tìm thấy kết quả phù hợp!");
//     // }
// });
document.getElementById('tentimkiem').addEventListener('input', function () {
    if (this.value.trim() === "") {
        loadTinDaGui();
        document.querySelectorAll('#DabaLL .DBaLL').forEach(item => {
            item.style.display = 'flex';
        });
        document.querySelectorAll('#HopThuDenLL .TinDenLL').forEach(item => {
            item.style.display = 'block';
        });}
});
document.getElementById('DanhSachSK').addEventListener('click', function (e) {
    const btn = e.target.closest('.btnGHICHUSK');
    if (btn) {
        suaghichu(btn);
    }
});
// btnThemGhiChuSK.addEventListener('click',function(){
//     document.querySelector('#CuaSoThemGhiChuSK').style.display='block';
// });
btnThoatCuaSoTGCSK.forEach(btn=>{
btn.addEventListener('click',function(){
    document.querySelector('#CuaSoThemGhiChuSK').style.display='none';
    document.querySelector('#CuaSoSUAGhiChuSK').style.display='none';
    resetFormNhapDiemSK();
})});
btntheGCCSSK.addEventListener('click',function(){
        themghichuvaobangSK();
         document.querySelector('#CuaSoThemGhiChuSK').style.display='none'
        resetFormNhapDiemSK();
});
function suaghichu(button) {
    document.querySelector('#CuaSoSUAGhiChuSK').style.display = 'block';
    const row = button.closest('tr');
    
    document.querySelectorAll('#DanhSachSK tr').forEach(tr => tr.classList.remove('selected'));
    
    row.classList.add('selected');

    document.getElementById('chonHocSinhGhiChuSKSUA').value = row.cells[0].querySelector('span').innerText;
    document.getElementById('GhichuveTTSKSUA').value = row.cells[2].querySelector('span').innerText;
    document.getElementById('GhichuveĐSKSUA').value = row.cells[4].querySelector('span').innerText;

    const buaAnStatus = row.cells[5].querySelector('span').innerText;
    document.getElementById("ckbuaanSKSUA").checked = (buaAnStatus === "Đã Xong");

    const tinhTrangSK = row.cells[1].querySelector('span').innerText;
    const tinhTrangRadios = document.getElementsByName('suckhoeSUA');
    for (let i = 0; i < tinhTrangRadios.length; i++) {
        tinhTrangRadios[i].checked = (tinhTrangRadios[i].value === tinhTrangSK);
    }

    const chedoan = row.cells[3].querySelector('span').innerText;
    const chedoanRadios = document.getElementsByName('BuaANSUA');
    for (let i = 0; i < chedoanRadios.length; i++) {
        chedoanRadios[i].checked = (chedoanRadios[i].value === chedoan);
    }
}
capnhatghichusk.addEventListener('click',function(){
    const row = document.querySelector('#DanhSachSK').querySelector('tr.selected');
    if (!row) return;

    row.cells[0].querySelector('span').innerText = document.getElementById('chonHocSinhGhiChuSKSUA').value;
    row.cells[2].querySelector('span').innerText = document.getElementById('GhichuveTTSKSUA').value;
    row.cells[4].querySelector('span').innerText = document.getElementById('GhichuveĐSKSUA').value;

    const buaAnChecked = document.getElementById("ckbuaanSKSUA").checked;
    row.cells[5].innerHTML = buaAnChecked
        ? `<span class="BuaAnSKXong">Đã Xong</span>`
        : `<span class="BuaAnSKCXong">Chưa xong</span>`;

        
    const tinhTrangRadios = document.getElementsByName('suckhoeSUA');
     for (let i = 0; i < tinhTrangRadios.length; i++) {
        if (tinhTrangRadios[i].checked) {
            const tinhTrang = tinhTrangRadios[i].value;
            let className = "TinhtrangSK";
            if (tinhTrang === "Ốm") className = "TinhtrangSK2";
            else if (tinhTrang === "Chấn Thương") className = "TinhtrangSK3";
            else if (tinhTrang === "Đang dùng thuốc") className = "TinhtrangSK4";

            row.cells[1].innerHTML = `<span class="${className}">${tinhTrang}</span>`;
            break;
        }}

    const chedoanRadios = document.getElementsByName('BuaANSUA');
    for (let i = 0; i < chedoanRadios.length; i++) {
        if (chedoanRadios[i].checked) {
            const cda = chedoanRadios[i].value;
            let className = "CheDoAnSK";
            if (cda === "Dị Ứng") className = "CheDoAnSK2";
            else if (cda === "Chế độ ăn đặc biệt") className = "CheDoAnSK3";

            row.cells[3].innerHTML = `<span class="${className}">${cda}</span>`;
            break;
        }}

    document.querySelector('#CuaSoSUAGhiChuSK').style.display = 'none';
    resetFormNhapDiemSK();
});

    
function resetFormNhapDiemSK() {

    document.getElementById('chonHocSinhGhiChuSK').selectedIndex = 0;
    document.getElementById('GhichuveTTSK').value= '';
    document.getElementById('GhichuveĐSK').value= '';
    document.getElementById("ckbuaanSK").checked= false;
     document.getElementById('chonHocSinhGhiChuSKSUA').selectedIndex = 0;
    document.getElementById('GhichuveTTSKSUA').value= '';
    document.getElementById('GhichuveĐSKSUA').value= '';
    document.getElementById("ckbuaanSKSUA").checked= false;
    
}
function themghichuvaobangSK(){
    let table=document.getElementById('DanhSachSK');
    let row=table.insertRow(-1);

    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    let cell5=row.insertCell(4);
    let cell6=row.insertCell(5);
    let cell7=row.insertCell(6);

    let tenHS = document.getElementById('chonHocSinhGhiChuSK').value;
    let tinhTrangSK = document.querySelector('input[name="suckhoe"]:checked')?.value || "";
    let ghiChuSK = document.getElementById('GhichuveTTSK').value;
    let cheDoAn = document.querySelector('input[name="BuaAN"]:checked')?.value || "";
    let ghiChuDD = document.getElementById('GhichuveĐSK').value;
    let buaAn = document.getElementById("ckbuaanSK").checked ;

    let cda="";
    if(cheDoAn==="Bình thường"){
        cda=`<span class="CheDoAnSK">${cheDoAn}</span>`;
    }else if(cheDoAn==="Dị Ứng"){
        cda=`<span class="CheDoAnSK2">${cheDoAn}</span>`;
    }else if(cheDoAn==="Chế độ ăn đặc biệt"){
        cda=`<span class="CheDoAnSK3">${cheDoAn}</span>`;
    }
     let ttsk="";
    if(tinhTrangSK==="Khỏe mạnh"){
        ttsk=`<span class="TinhtrangSK">${tinhTrangSK}</span>`;
        khoemanh+=1;
        TSKhoemanhSK.innerText=khoemanh;
    }else if(tinhTrangSK==="Ốm"){
        ttsk=`<span class="TinhtrangSK2">${tinhTrangSK}</span>`;
        chuy+=1;
        TSChuYSK.innerText=chuy;
    }else if(tinhTrangSK==="Chấn Thương"){
        ttsk=`<span class="TinhtrangSK3">${tinhTrangSK}</span>`;
        chuy+=1;
        TSChuYSK.innerText=chuy;
    }else if(tinhTrangSK==="Đang dùng thuốc"){
        ttsk=`<span class="TinhtrangSK4">${tinhTrangSK}</span>`;
        chuy+=1;
        TSChuYSK.innerText=chuy;
    }

   
    if (buaAn) {
  andu += 1;
  TSAnDuSK.innerText = andu;}

    cell1.innerHTML =`<span>${tenHS}</span>`;
    cell2.innerHTML = ttsk;
    cell3.innerHTML = `<span>${ghiChuSK}</span>`; 
    cell4.innerHTML = cda;
    cell5.innerHTML = `<span>${ghiChuDD}</span>`;
    cell6.innerHTML = buaAn
    ? `<span class="BuaAnSKXong">Đã Xong</span>`
    : `<span class="BuaAnSKCXong">Chưa xong</span>`;
    cell7.innerHTML = `<button class="btnGHICHUSK"><i class="fa-solid fa-edit"></i></button>`;

    tongghichu+=1;
    TSTongGCSK.innerText=tongghichu;

}
//---------------------------------Điểm số------------------------------------
const btnThemDiemSo=document.querySelector('#btnNhapDiemDS');
const btnThoatCuaSoTGCDS=document.querySelector('#btbThoatcsoGCDS');
const btnThoatCuaSoTGCDSSUA=document.querySelector('#btbThoatcsoGCDSSUA');
const btntheGCCDS=document.querySelector('#btncuasoTGCDS');
const TongDiemTSDS=document.querySelector('#TongdiemTSDS');
const DTBTSDS=document.querySelector('#DiemTBTSDS');
const GioiTSDS=document.querySelector('#GioiTSDS');
const KhaTSDS=document.querySelector('#KhaTSDS');
const TrungBinhTSDS=document.querySelector('#TrungBinhTSDS');
const YeuTSDS=document.querySelector('#YeuTSDS');
const btnSuadiemDS=document.querySelectorAll('.btnSuaDS');
const btnsuadiemDS=document.querySelector('#btncuasoTGCDSSUA');

let tdds=parseFloat(TongDiemTSDS.innerText);
let diemtbds=parseFloat(DTBTSDS.innerText)
let Gioids=parseFloat(GioiTSDS.innerText)
let Khads=parseFloat(KhaTSDS.innerText)
let Yeuds=parseFloat(YeuTSDS.innerText)
let Trungbinhds=parseFloat(TrungBinhTSDS.innerText)

// btnsuadiemDS.addEventListener('click',function(){
//     const row = document.querySelector('#DanhSachDS tr.selected');
//     if (!row) return;

    
//     row.cells[0].querySelector('span').innerText =
//         document.getElementById('chonHocSinhGhiChuDSSUA').value;

   
//     const loaidiemRadios = document.getElementsByName('LDSUA');
//     for (let i = 0; i < loaidiemRadios.length; i++) {
//         if (loaidiemRadios[i].checked) {
//             const ld = loaidiemRadios[i].value;

//             let className = "LoaiDiemDS"; 
//             if (ld === "15 phút") className = "LoaiDiemDS2";
//             else if (ld === "1 tiết") className = "LoaiDiemDS3";
//             else if (ld === "Học kỳ") className = "LoaiDiemDS4";

//             row.cells[1].innerHTML = `<span class="${className}">${ld}</span>`;
//         }
//     }

   
//     row.cells[2].querySelector('span').innerText =
//         document.getElementById('txtDiemSODSSUA').value + "/10";

   
//     row.cells[3].querySelector('span').innerText =
//         document.getElementById('NhanxetblDSSUA').value;

//     document.querySelector('#CuaSoNĐSSUA').style.display = 'none';
// });
function suaghichuDS(button) {
    document.querySelector('#CuaSoNĐSSUA').style.display = 'block';
    const row = button.closest('tr');
    
    document.querySelectorAll('#DanhSachDS tr').forEach(tr => tr.classList.remove('selected'));
    
    row.classList.add('selected');

    document.getElementById('chonHocSinhGhiChuDSSUA').value = row.cells[0].querySelector('span').innerText;
    document.getElementById('txtDiemSODSSUA').value =parseFloat(row.cells[2].querySelector('span').innerText) ;
    document.getElementById('NhanxetblDSSUA').value = row.cells[3].querySelector('span').innerText;

    const loaidiem = row.cells[1].querySelector('span').innerText;
    const loaidiemRadios = document.getElementsByName('LDSUA');
    for (let i = 0; i < loaidiemRadios.length; i++) {
        loaidiemRadios[i].checked = (loaidiemRadios[i].value === loaidiem);
    }

}
document.getElementById('DanhSachDS').addEventListener('click', function (e) {
    const btn = e.target.closest('.btnSuaDS');
    if (btn) {
        suaghichuDS(btn);
    }
});
btnThoatCuaSoTGCDS.addEventListener('click',function(){
    document.querySelector('#CuaSoNĐS').style.display='none';
});
btnThoatCuaSoTGCDSSUA.addEventListener('click',function(){
    document.querySelector('#CuaSoNĐSSUA').style.display='none';
});
// btnThemDiemSo.addEventListener('click',function(){
//     document.querySelector('#CuaSoNĐS').style.display='block';
// });
btntheGCCDS.addEventListener('click',function(){
    let diemso = document.getElementById('txtDiemSODS').value;

    // 1. Kiểm tra rỗng (bắt buộc để không bị NaN)
    if(diemso === ""){
        alert("Vui lòng nhập điểm số!");
        return;
    }

    // 2. Parse sau khi chắc chắn không rỗng
    diemso = parseFloat(diemso);

    // 3. Kiểm tra hợp lệ
    if(diemso < 0 || diemso > 10){
        alert("Điểm số không hợp lệ! Vui lòng nhập lại từ 0-10.");
        return;
    }

    // 4. Khi hợp lệ
    themghichuvaobangDS();
    document.querySelector('#CuaSoNĐS').style.display = 'none'; // TỰ TẮT
    resetFormNhapDiemDS();
    hdgan(btntheGCCDS);
});

function resetFormNhapDiemDS() {
    document.getElementById('chonHocSinhGhiChuDS').selectedIndex = 0; 
    document.getElementById('txtDiemSODS').value = ''; 
    document.getElementById('NhanxetblDS').value = ''; 
}
function themghichuvaobangDS(){
    let table=document.getElementById('DanhSachDS');
    let row=table.insertRow(-1);

    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    let cell5=row.insertCell(4);
    let cell6=row.insertCell(5);

    let tenHS = document.getElementById('chonHocSinhGhiChuDS').value;
    let LoaiDiem = document.querySelector('input[name="LD"]:checked')?.value || "";
    let Diemso = document.getElementById('txtDiemSODS').value;
    let Nhanxet= document.getElementById('NhanxetblDS').value;
    let now = new Date();
    let Ngay = now.toLocaleDateString('vi-VN');
    let cda="";
    if(LoaiDiem==="Miệng"){
        cda=`<span class="LoaiDiemDS">${LoaiDiem}</span>`;
    }else if(LoaiDiem==="15 phút"){
        cda=`<span class="LoaiDiemDS2">${LoaiDiem}</span>`;
    }else if(LoaiDiem==="1 tiết"){
        cda=`<span class="LoaiDiemDS3">${LoaiDiem}</span>`;
    }else if(LoaiDiem==="Học kỳ"){
        cda=`<span class="LoaiDiemDS4">${LoaiDiem}</span>`;
    }
    
    let diem=parseFloat(Diemso);
    if(diem>=8){
        Diemso=`<span style="color:green">${Diemso}/10</span>`;
        Gioids+=1;
    }else if(diem>=6.5&&diem<8){
        Diemso=`<span style="color:blue">${Diemso}/10</span>`;
        Khads+=1;
    }else if(diem<6.5&&diem>=5){
        Diemso=`<span style="color:orange">${Diemso}/10</span>`;
        Trungbinhds+=1;
    }else if(diem<5){
        Diemso=`<span style="color:red">${Diemso}/10</span>`;
        Yeuds+=1;
    }
   
    tdds+=1;
    diemtbds=((diemtbds*(tdds-1)+diem)/tdds).toFixed(2);

    cell1.innerHTML =`<span>${tenHS}</span>`;
    cell2.innerHTML = cda;
    cell3.innerHTML = Diemso;
    cell4.innerHTML = `<span>${Nhanxet}</span>`;
    cell5.innerHTML = Ngay;
    cell6.innerHTML = `<button class="btnSuaDS"><i class="fa-solid fa-edit"></i></button>`;

    TongDiemTSDS.innerText=tdds;
    DTBTSDS.innerText=diemtbds;
    GioiTSDS.innerText=Gioids;
    KhaTSDS.innerText=Khads;
    TrungBinhTSDS.innerText=Trungbinhds;
    YeuTSDS.innerText=Yeuds;
}
//---------------------------------Điểm danh------------------------------------
const btnghichuDD=document.querySelectorAll('.btnGHICHUDD');
const btnluuGCDD = document.querySelector('#btnluuGCDD');
const btncomatDsDD=document.querySelectorAll('.btnDDComat');
const btnVangmatDsDD=document.querySelectorAll('.btnDDVangMat');
const btnDiMuonDsDD=document.querySelectorAll('.btnDDDiMuon');
const TScomatDD=document.querySelector('#slgcomatDD');
const TSvangDD=document.querySelector('#slgvangDD');
const TSdimuonDD=document.querySelector('#slgdimuonDD');
const btnLUUDIEMDANHDD=document.querySelector('#btnLuuDiemDanh')



 let soComat = 0;
 let soVangmat = 0;
 let soDimuon = 0;

let currentRow = null;
document.getElementById('btbThoatcsoGCDD').addEventListener('click', function (e) {
    document.querySelector('#CuaSoGCDD').style.display = 'none';
});
// btnLUUDIEMDANHDD.addEventListener('click', function () {
//     if(document.getElementById('chonNgay').value===""){
//         alert("Vui lòng chọn ngày điểm danh!");
//         return;
//     }
// });
// btnLUUDIEMDANHDD.addEventListener('click', function () {
//     alert("Đã lưu điểm danh");
//     hdgan(btnLUUDIEMDANHDD);
// });
// btncomatDsDD.forEach(btn => {
//   btn.addEventListener('click', function() {
//     let row = this.closest('tr'); 
//     let span = row.cells[4].querySelector('span');
//     span.innerHTML = '<i class="fa-solid fa-circle-check"></i>Có mặt';
//     span.style.color='green';
//     span.style.backgroundColor='#D8F6E0';
//     span.style.padding='2px 6px';
//     span.style.borderRadius='10px';    

//     let btnVangmatDsDD = row.querySelector('.btnDDVangMat');
//     let btnDiMuonDsDD = row.querySelector('.btnDDDiMuon');
//     let btncomatDsDD = row.querySelector('.btnDDComat');

//     btnVangmatDsDD.style.backgroundColor='transparent';
//     btnVangmatDsDD.style.color='black';
//     btnDiMuonDsDD.style.backgroundColor='transparent';
//     btnDiMuonDsDD.style.color='black';
//     btncomatDsDD.style.backgroundColor='green';
//     btncomatDsDD.style.color='white';

     
   
//      let trangthaiCu = row.getAttribute('data-trangthai'); 

   
//     if (trangthaiCu !== 'comat') {
//       if (trangthaiCu === 'vang' && soVangmat > 0) {
//         soVangmat -= 1;
//       }
//       if (trangthaiCu === 'dimuon' && soDimuon > 0) {
//         soDimuon -= 1;
//       }
//       soComat += 1;
//     }

    
//     row.setAttribute('data-trangthai', 'comat');

   
//     TScomatDD.innerText = soComat;
//     TSvangDD.innerText = soVangmat;
//     TSdimuonDD.innerText = soDimuon;

// })});
btnDiMuonDsDD.forEach(btn => {
  btn.addEventListener('click', function() {
    let row = this.closest('tr'); 
    let span = row.cells[4].querySelector('span');
    span.innerHTML = '<i class="fa-solid fa-clock"></i>Đi muộn';
    span.style.color='orange';
    span.style.backgroundColor='#FFF4E5';
    span.style.padding='2px 6px';
    span.style.borderRadius='10px';

    let btnVangmatDsDD = row.querySelector('.btnDDVangMat');
    let btnDiMuonDsDD = row.querySelector('.btnDDDiMuon');
    let btncomatDsDD = row.querySelector('.btnDDComat');

    btnVangmatDsDD.style.backgroundColor='transparent';
    btnVangmatDsDD.style.color='black';
    btncomatDsDD.style.backgroundColor='transparent';
    btncomatDsDD.style.color='black';
    btnDiMuonDsDD.style.backgroundColor='orange';
    btnDiMuonDsDD.style.color='white';

    
    
     let trangthaiCu = row.getAttribute('data-trangthai'); 

   
    if (trangthaiCu !== 'dimuon') {
      if (trangthaiCu === 'vang' && soVangmat > 0) {
        soVangmat -= 1;
      }
      if (trangthaiCu === 'comat' && soComat > 0) {
        soComat -= 1;
      }
      soDimuon += 1;
    }

    
    row.setAttribute('data-trangthai', 'dimuon');

   
    TScomatDD.innerText = soComat;
    TSvangDD.innerText = soVangmat;
    TSdimuonDD.innerText = soDimuon;

})})

btnVangmatDsDD.forEach(btn => {
  btn.addEventListener('click', function() {
    let row = this.closest('tr'); 
    let span = row.cells[4].querySelector('span');
    span.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>Vắng mặt';
    span.style.color='red';
    span.style.backgroundColor='#FFE5E5';
    span.style.padding='2px 6px';
    span.style.borderRadius='10px';

    let btnVangmatDsDD = row.querySelector('.btnDDVangMat');
    let btnDiMuonDsDD = row.querySelector('.btnDDDiMuon');
    let btncomatDsDD = row.querySelector('.btnDDComat');

    btnVangmatDsDD.style.backgroundColor='red';
    btnVangmatDsDD.style.color='white';
    btncomatDsDD.style.backgroundColor='transparent';
    btncomatDsDD.style.color='black';
    btnDiMuonDsDD.style.backgroundColor='transparent';
    btnDiMuonDsDD.style.color='black';

   
    
    let trangthaiCu = row.getAttribute('data-trangthai'); 

   
    if (trangthaiCu !== 'vang') {
      if (trangthaiCu === 'coma' && soComat > 0) {
        soComat -= 1;
      }
      if (trangthaiCu === 'dimuon' && soDimuon > 0) {
        soDimuon -= 1;
      }
      soVangmat += 1;
    }

    
    row.setAttribute('data-trangthai', 'vang');

   
    TScomatDD.innerText = soComat;
    TSvangDD.innerText = soVangmat;
    TSdimuonDD.innerText = soDimuon;

})})
btnghichuDD.forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelector('#CuaSoGCDD').style.display = 'block';
    currentRow = this.closest('tr'); 
  });
});
btnluuGCDD.addEventListener('click',function(){
    lughichu();
    document.querySelector('#CuaSoGCDD').style.display='none';
});
function lughichu() {
  if (!currentRow) return;

  let ghichu = document.getElementById('GhichuDD').value;
  if (ghichu.trim() === "") {
    alert("Vui lòng nhập ghi chú trước khi lưu.");
    return;
  }else{
    let span = currentRow.cells[5].querySelector('span');
    span.innerHTML = ghichu;
  }

  document.getElementById('GhichuDD').value = "";
  currentRow = null;
}

//---------------------------------Liên lạc------------------------------------
const btntlSTLL=document.querySelectorAll('.btnSTHTD');
const btnThoatCSSTLL=document.querySelector('#btbThoatCSSTLL');
const btnSTLL=document.querySelector('#btnSoanTinLL');
const btnchuyencan=document.querySelectorAll('.btnCCLL');
const btndienso=document.querySelectorAll('.btnDSLL');
const btnST=document.querySelectorAll('.btnSTLL');

btnchuyencan.forEach(function(btn) {
    btn.addEventListener('click', function() {
        an(btnDiemDanh);
        doi('#DieDanh','#TongQuan','#SucKhoe','#DiemSo','#LienLac','#LichDay');
    });
});
btndienso.forEach(function(btn) {
    btn.addEventListener('click', function() {
        an(btnDiemSo);
        doi('#DiemSo','#TongQuan','#DieDanh','#SucKhoe','#LienLac','#LichDay');
    });
});
btnST.forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelector('#CuaSoSoanTinLL').style.display='block';
    });
});
// btnSTLL.addEventListener('click',function(){
//     document.querySelector('#CuaSoSoanTinLL').style.display='block';
// })
btnThoatCSSTLL.addEventListener('click',function(){
    document.querySelector('#CuaSoSoanTinLL').style.display='none';
});

btntlSTLL.forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelector('#CuaSoSoanTinLL').style.display = 'block';
    });
})
document.getElementById('btnXuatLichDay').addEventListener('click', function() {
    alert('Xuất lịch dạy theo ngày thành công!');
    const table = document.getElementById('DanhSachLich');

    const wb = XLSX.utils.book_new();

    const ws = XLSX.utils.table_to_sheet(table);

    XLSX.utils.book_append_sheet(wb, ws, "DanhSachLich");

    XLSX.writeFile(wb, "DanhSachLich.xlsx");
});

// let tinDen = {
//     tenNguoiGui: "Nguyễn Thị B",
//     tenPH: "Nguyễn Văn A",
//     tieuDe: "Hỏi về bài tập",
//     noiDung: "Thầy ơi...",
//     thoiGian: "08:30:00 23/12/2024",
//     moi: true  
// };

// let ds = JSON.parse(localStorage.getItem("TinDen") || "[]");
// ds.push(tinDen);
// localStorage.setItem("TinDen", JSON.stringify(ds));
function taoHTMLTinDen(tin) {
    return `
        <div class="TinDenLL">
            <span class="tieuDeTin">
                <div>
                    <span class="PHGui">${tin.tenNguoiGui}</span>
                    ${tin.moi ? `<span class="nhanMoi">Mới</span>` : ``}
                    <span class="nhanNguoiGui">${tin.tenPH}</span>
                </div>
                <button class="btnSTHTD"><i class="fa-solid fa-reply"></i></button>
            </span>

            <p class="tieuDeNoiDung">${tin.tieuDe}</p>
            <p>${tin.noiDung}</p>
            <span class="thoiGian">${tin.thoiGian}</span>
        </div>
    `;
}
function loadTinDen() {
    let ds = JSON.parse(localStorage.getItem("TinDen") || "[]");

    let hopThu = document.querySelector("#HopThuDenLL");
    let i=0;

        ds.slice(-3).forEach(tin => {
        hopThu.innerHTML += taoHTMLTinDen(tin);
        i+=1;
    });
}


window.onload = function() {
    // loadTinDaGui();
    // loadTinDen();
    loadTTGV();
    loadhdgan();
}

