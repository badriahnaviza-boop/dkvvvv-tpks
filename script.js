/* ===========================
   DATA FOTO MAKET
=========================== */

const maket = [
{
    image:"maket2.png",
    title:"Maket 1",
    desc:"Dokumentasi maket perancangan Taman Purbakala Kerajaan Sriwijaya."
},
{
    image:"maket1.png",
    title:"Maket 2",
    desc:"Tampak maket dari sisi lainnya."
},
{
    image:"maket3.png",
    title:"Maket 3",
    desc:"Visual keseluruhan maket."
}
];


/* ===========================
   DATA MEDIA
=========================== */

const media = [

{
image:"media1.jpg",
title:"Gantungan Kunci",
desc:"Digunakan sebagai souvenir praktis yang mudah dibawa dan mengingatkan pada destinasi"
},

{
image:"media2.png",
title:"Topi",
desc:"Dipakai pegawai Museum untuk tour guide pengunjung"
},

{
image:"media3.png",
title:"Maket TPKS",
desc:"Digunakan sebagai media visual tiga dimensi yang ditempatkan di area pusat informasi untuk membantu pengunjung memahami tata letak kawasan"
},

{
image:"media4.png",
title:"T-Shirt",
desc:"Digunakan sebagai merchandise yang dapat dikenakan sehari-hari untuk memperkuat identitas visual destinasi"
},

{
image:"media5.png",
title:"Kartu Nama",
desc:"Digunakan sebagai identitaas pengelola atau instansi, dibagikan kepada pihak terkait atau pengunjung sebagai media informasi personal"
},

{
image:"media6.png",
title:"Signage Petunjuk Arah",
desc:"Dipasang di titik persimpangan atau jalur utama untuk membantu navigasi pengunjung dalam menemukan lokasi tujuan"
},

{
image:"media7.png",
title:"Tumbler",
desc:"Digunakan sebagai media guna ulang yang memiliki fungsi praktis sekaligus memperkuat branding"
},

{
image:"media8.png",
title:"Tiket Masuk",
desc:"Digunakan sebagai aksesoris sekaligus media pengingat yang dikenakan oleh pengunjung"
},

{
image:"media9.png",
title:"Poster",
desc:"Digunakan sebagai media pengenalan awal, ditempatkan di area strategis seperti ruang publik, pusat informasi, atau area sekitar destinasi untuk menarik perhatian pengunjung"
},

{
image:"media10.png",
title:"Lanyard",
desc:"Digunakan sebagai aksesoris untuk menggantung kartu identitas sekaligus menampilkan identitas visual kawasan"
}

];


/* ===========================
   MODAL
=========================== */

const modal=document.getElementById("modal");
const modalImg=document.getElementById("modalImg");
const modalTitle=document.getElementById("modalTitle");
const modalDesc=document.getElementById("modalDesc");

let current=0;
let mode="media";


function show(){

let data;

if(mode==="maket"){

data=maket[current];

}else{

data=media[current];

}

modal.style.display="flex";

modalImg.src=data.image;
modalTitle.innerHTML=data.title;
modalDesc.innerHTML=data.desc;

}


/* ===========================
   FOTO MAKET
=========================== */

function openMaket(index){

mode="maket";
current=index;

show();

}


/* ===========================
   MEDIA
=========================== */

function openMedia(index){

mode="media";
current=index;

show();

}


/* ===========================
   CLOSE
=========================== */

function closeModal(){

modal.style.display="none";

}


/* ===========================
   NEXT PREV
=========================== */

function nextImage(){

if(mode==="maket"){

current++;

if(current>=maket.length){

current=0;

}

}else{

current++;

if(current>=media.length){

current=0;

}

}

show();

}

function prevImage(){

if(mode==="maket"){

current--;

if(current<0){

current=maket.length-1;

}

}else{

current--;

if(current<0){

current=media.length-1;

}

}

show();

}


/* ===========================
   TOMBOL LAMA
=========================== */

function changeSlide(step){

if(step>0){

nextImage();

}else{

prevImage();

}

}


/* ===========================
   TUTUP MODAL
=========================== */

modal.addEventListener("click",function(e){

if(e.target===modal){

closeModal();

}

});


/* ===========================
   KEYBOARD
=========================== */

document.addEventListener("keydown",function(e){

if(modal.style.display!=="flex") return;

if(e.key==="ArrowRight"){

nextImage();

}

if(e.key==="ArrowLeft"){

prevImage();

}

if(e.key==="Escape"){

closeModal();

}

});


/* ===========================
   SLIDER MEDIA
=========================== */

const track=document.querySelector(".slider-track");

let posisi=0;

function slideMedia(arah){

const lebar=270;

const max=-(lebar*(media.length-3));

posisi-=arah*lebar;

if(posisi>0){

posisi=0;

}

if(posisi<max){

posisi=max;

}

track.style.transform=`translateX(${posisi}px)`;

}

function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}