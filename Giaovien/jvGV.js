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

document.getElementById('btnSuaTT').addEventListener('click', function() {
    alert("Sửa thông tin thành công!");
});
document.getElementById('btnDoiMatKhau').addEventListener('click', function() {
    document.querySelector('#doimk').style.display='block';
    document.querySelector('#TTCNGV').style.display='none';
});
document.getElementById('btnHuyDoiMK').addEventListener('click', function() {
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

    alert("Đổi mật khẩu thành công!");
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
window.onload = function() {
    loadTinDaGui();
    loadTinDen();
}
document.getElementById('btnXuatEDS').addEventListener('click', function() { 
    alert("Đã hoàn thành!");
});
document.getElementById('btnPhieuDiemDS').addEventListener('click', function() { 
    alert("Đã hoàn thành!");
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
let andu=0
document.getElementById('DanhSachSK').addEventListener('click', function (e) {
    const btn = e.target.closest('.btnGHICHUSK');
    if (btn) {
        suaghichu(btn);
    }
});
btnThemGhiChuSK.addEventListener('click',function(){
    document.querySelector('#CuaSoThemGhiChuSK').style.display='block';
});
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

btnsuadiemDS.addEventListener('click',function(){
    const row = document.querySelector('#DanhSachDS tr.selected');
    if (!row) return;

    
    row.cells[0].querySelector('span').innerText =
        document.getElementById('chonHocSinhGhiChuDSSUA').value;

   
    const loaidiemRadios = document.getElementsByName('LDSUA');
    for (let i = 0; i < loaidiemRadios.length; i++) {
        if (loaidiemRadios[i].checked) {
            const ld = loaidiemRadios[i].value;

            let className = "LoaiDiemDS"; 
            if (ld === "15 phút") className = "LoaiDiemDS2";
            else if (ld === "1 tiết") className = "LoaiDiemDS3";
            else if (ld === "Học kỳ") className = "LoaiDiemDS4";

            row.cells[1].innerHTML = `<span class="${className}">${ld}</span>`;
        }
    }

   
    row.cells[2].querySelector('span').innerText =
        document.getElementById('txtDiemSODSSUA').value + "/10";

   
    row.cells[3].querySelector('span').innerText =
        document.getElementById('NhanxetblDSSUA').value;

    document.querySelector('#CuaSoNĐSSUA').style.display = 'none';
});
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
btnThemDiemSo.addEventListener('click',function(){
    document.querySelector('#CuaSoNĐS').style.display='block';
});
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
btnLUUDIEMDANHDD.addEventListener('click',function(){
    alert("Đã lưu điểm danh");
});
btncomatDsDD.forEach(btn => {
  btn.addEventListener('click', function() {
    let row = this.closest('tr'); 
    let span = row.cells[4].querySelector('span');
    span.innerHTML = '<i class="fa-solid fa-circle-check"></i>Có mặt';
    span.style.color='green';
    span.style.backgroundColor='#D8F6E0';
    span.style.padding='2px 6px';
    span.style.borderRadius='10px';    

    let btnVangmatDsDD = row.querySelector('.btnDDVangMat');
    let btnDiMuonDsDD = row.querySelector('.btnDDDiMuon');
    let btncomatDsDD = row.querySelector('.btnDDComat');

    btnVangmatDsDD.style.backgroundColor='transparent';
    btnVangmatDsDD.style.color='black';
    btnDiMuonDsDD.style.backgroundColor='transparent';
    btnDiMuonDsDD.style.color='black';
    btncomatDsDD.style.backgroundColor='green';
    btncomatDsDD.style.color='white';

     
   
     let trangthaiCu = row.getAttribute('data-trangthai'); 

   
    if (trangthaiCu !== 'comat') {
      if (trangthaiCu === 'vang' && soVangmat > 0) {
        soVangmat -= 1;
      }
      if (trangthaiCu === 'dimuon' && soDimuon > 0) {
        soDimuon -= 1;
      }
      soComat += 1;
    }

    
    row.setAttribute('data-trangthai', 'comat');

   
    TScomatDD.innerText = soComat;
    TSvangDD.innerText = soVangmat;
    TSdimuonDD.innerText = soDimuon;

})});

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
btnSTLL.addEventListener('click',function(){
    document.querySelector('#CuaSoSoanTinLL').style.display='block';
})
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
});

let tinDen = {
    tenNguoiGui: "Nguyễn Thị B",
    tenPH: "Nguyễn Văn A",
    tieuDe: "Hỏi về bài tập",
    noiDung: "Thầy ơi...",
    thoiGian: "08:30:00 23/12/2024",
    moi: true  
};

let ds = JSON.parse(localStorage.getItem("TinDen") || "[]");
ds.push(tinDen);
localStorage.setItem("TinDen", JSON.stringify(ds));
function taoHTMLTinDen(tin) {
    return `
        <div class="TinDenLL">
            <span class="tieuDeTin">
                <div>
                    ${tin.tenNguoiGui}
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