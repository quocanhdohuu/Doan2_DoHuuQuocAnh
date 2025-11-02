//------------------Tong Quan--------------------
const btnTONGQUAN = document.querySelector('#btnTongQuan');
const btnDiemDanh=document.querySelector('#btnDieDanh');
const btnSucKhoe=document.querySelector('#btnSucKhoe',);
const btnDiemSo=document.querySelector('#btnDiemSo');
const btnLienLac=document.querySelector('#btnLienLac');
const btnDangXuat=document.querySelector('#btnLogout');
const btnPhuDD=document.querySelectorAll('.btnDiemdanh'); 
const btnPhuND=document.querySelectorAll('.btnNhapDiem');

//HAm an menu
function an(nutbam){
    btnDiemDanh.style.backgroundColor='transparent';
    btnDiemSo.style.backgroundColor='transparent';
    btnLienLac.style.backgroundColor='transparent';
    btnSucKhoe.style.backgroundColor='transparent';
    btnTONGQUAN.style.backgroundColor='transparent';
    nutbam.style.backgroundColor='white';
};
//ham doi trang
function doi(trang1,trang2,trang3,trang4,trang5){
    document.querySelector(trang1).style.display='block';
    document.querySelector(trang2).style.display='none';
    document.querySelector(trang3).style.display='none';
    document.querySelector(trang4).style.display='none';
    document.querySelector(trang5).style.display='none';

}
btnTONGQUAN.addEventListener('click',function(){
    an(btnTONGQUAN);
    doi('#TongQuan','#DieDanh','#SucKhoe','#DiemSo','#LienLac');
});
btnDiemDanh.addEventListener('click',function(){
    an(btnDiemDanh);
    doi('#DieDanh','#TongQuan','#SucKhoe','#DiemSo','#LienLac');
});
btnPhuDD.forEach(btn=>{
    btn.addEventListener('click',function(){
    an(btnDiemDanh);
    doi('#DieDanh','#TongQuan','#SucKhoe','#DiemSo','#LienLac');
});
});
btnDiemSo.addEventListener('click',function(){
    an(btnDiemSo);
    doi('#DiemSo','#TongQuan','#DieDanh','#SucKhoe','#LienLac');
});
btnPhuND.forEach(btn=>{
    btn.addEventListener('click',function(){
        an(btnDiemSo);
        doi('#DiemSo','#TongQuan','#DieDanh','#SucKhoe','#LienLac');
    })
});
btnLienLac.addEventListener('click',function(){
    an(btnLienLac);
    doi('#LienLac','#TongQuan','#DieDanh','#SucKhoe','#DiemSo');
});
btnSucKhoe.addEventListener('click',function(){
    an(btnSucKhoe);
    doi('#SucKhoe','#TongQuan','#DieDanh','#DiemSo','#LienLac');
});

btnDangXuat.addEventListener('click',function(){
    window.location.href = `/index.html`;
});
//---------------------------------Liên lạc------------------------------------
const btnHopThuDenLL = document.querySelector('#btnHopThuDenLL');
const btnTinnhandiLL=document.querySelector('#btnTinNhanDiLL');
const btnDanhBaLL=document.querySelector('#btnDanhBaLL',);
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

//---------------------------------Sức khỏe------------------------------------
const btnThemGhiChuSK=document.querySelector('#ThemGhichuSK');
const btnThoatCuaSoTGCSK=document.querySelector('#btbThoatcsoGCSK');
const btntheGCCSSK=document.querySelector('#btncuasoTGCSK');
btnThemGhiChuSK.addEventListener('click',function(){
    document.querySelector('#CuaSoThemGhiChuSK').style.display='block';
});
btnThoatCuaSoTGCSK.addEventListener('click',function(){
    document.querySelector('#CuaSoThemGhiChuSK').style.display='none';
});
btntheGCCSSK.addEventListener('click',function(){
        themghichuvaobangSK();
         document.querySelector('#CuaSoThemGhiChuSK').style.display='none'
        resetFormNhapDiemSK();
});

function resetFormNhapDiemSK() {

    document.getElementById('chonHocSinhGhiChuSK').selectedIndex = 0;
    document.getElementById('GhichuveTTSK').value= '';
    document.getElementById('GhichuveĐSK').value= '';
    document.getElementById("ckbuaanSK").checked= false;
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
    }else if(tinhTrangSK==="Ốm"){
        ttsk=`<span class="TinhtrangSK2">${tinhTrangSK}</span>`;
    }else if(tinhTrangSK==="Chấn Thương"){
        ttsk=`<span class="TinhtrangSK3">${tinhTrangSK}</span>`;
    }else if(tinhTrangSK==="Đang dùng thuốc"){
        ttsk=`<span class="TinhtrangSK4">${tinhTrangSK}</span>`;
    }
    cell1.innerHTML =`<span">${tenHS}</span><br><span style="color: gray;">HS001</span>`;
    cell2.innerHTML = ttsk;
    cell3.innerHTML = ghiChuSK;
    cell4.innerHTML = cda;
    cell5.innerHTML = ghiChuDD;
    cell6.innerHTML = buaAn
    ? `<span class="BuaAnSKXong">Đã Xong</span>`
    : `<span class="BuaAnSKCXong">Chưa xong</span>`;
    cell7.innerHTML = `<button class="btnGHICHUSK"><i class="fa-solid fa-edit"></i></button>`;
}
//---------------------------------Điểm số------------------------------------
const btnThemDiemSo=document.querySelector('#btnNhapDiemDS');
const btnThoatCuaSoTGCDS=document.querySelector('#btbThoatcsoGCDS');
const btntheGCCDS=document.querySelector('#btncuasoTGCDS');

btnThoatCuaSoTGCDS.addEventListener('click',function(){
    document.querySelector('#CuaSoNĐS').style.display='none';
});
btnThemDiemSo.addEventListener('click',function(){
    document.querySelector('#CuaSoNĐS').style.display='block';
});
btntheGCCDS.addEventListener('click',function(){
    let diemso=document.getElementById('txtDiemSODS').value;
    diemso=parseFloat(diemso);
    if(diemso<0 || diemso>10){
        alert("Điểm số không hợp lệ! Vui lòng nhập lại điểm số từ 0 đến 10.");
        return;
    }
    if( document.getElementById('txtDiemSODS').value===""){
        alert("Vui lòng nhập điểm số!");
        return;
    }else{
        themghichuvaobangDS();
        document.querySelector('#CuaSoNĐS').style.display='none'
        resetFormNhapDiemDS();
    }
        
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
    }else if(diem>=7&&diem<8){
        Diemso=`<span style="color:blue">${Diemso}/10</span>`;
    }else if(diem<7){
        Diemso=`<span style="color:orange">${Diemso}/10</span>`;
    }
    cell1.innerHTML =`<span>${tenHS}</span><br><span style="color: gray;">HS001</span>`;
    cell2.innerHTML = cda;
    cell3.innerHTML = Diemso;
    cell4.innerHTML = Nhanxet;
    cell5.innerHTML = Ngay;
    cell6.innerHTML = `<button class="btnGHICHUSK"><i class="fa-solid fa-edit"></i></button>`;
}