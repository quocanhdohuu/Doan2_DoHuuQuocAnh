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
//---------------------------------Điểm danh------------------------------------
