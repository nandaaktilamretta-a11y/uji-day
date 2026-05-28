/* =======================================================
                        ELEMENTS
======================================================= */

const introScreen =
document.getElementById("introScreen");

const openingSection =
document.getElementById("openingSection");

const mainContent =
document.getElementById("mainContent");

const photoSection =
document.getElementById("photoSection");

const videoSection =
document.getElementById("videoSection");

const music =
document.getElementById("music");

const voice =
document.getElementById("voice");

const video =
document.getElementById("videoPlayer");

const typingText =
document.getElementById("typingText");

const slides =
document.querySelectorAll(".slide");

const openButton =
document.querySelector(".open-button");

/* =======================================================
                    MESSAGE TEXT
======================================================= */

const fullMessage = `

Haiii Ujiii 🤍

Maaf yaa aku telat satu hari ngucapinnya 😭
Dan maaf juga akhir-akhir ini aku sibuk terus sampai rasanya kita jadi jarang main lagi kayak dulu.

Padahal jujur…
kadang aku kangen banget masa-masa SMP kita 😭

Kangen waktu hampir tiap hari ketemu.
Kangen cerita hal random di sekolah.
Kangen ketawa gak jelas.
Kangen hari-hari yang rasanya simpel banget karena selalu ada kamu di situ.

Sekarang semuanya udah beda yaa…
kita sama-sama sibuk sama hidup masing-masing.
Dan ada banyak hari yang akhirnya gak aku lewatin sama kamu lagi.

Tapi meskipun begitu,
aku harap kamu tau kalau kamu tetap jadi salah satu orang paling berarti buat aku 🤍

Happy 21st birthday yaa Ujiii ✨

Makasih karena udah bertahan sejauh ini.
Makasih karena udah selalu ada buat aku selama ini.

Makasih karena selalu dengerin cerita-cerita random aku.
Makasih karena selalu sabar sama aku.
Dan makasih karena udah jadi salah satu rumah ternyaman yang pernah aku punya.

Uji…
aku gak tau berapa banyak hal yang udah kamu lewatin sendirian sampai hari ini.
Tapi aku harap di umur yang baru ini,
hidup bisa lebih lembut sama kamu.

Aku gak mau lagi liat kamu sedih cuma karena orang yang gak ngerti cara menghargai hati kamu.

Karena sejujurnya…
kamu itu manusia yang indah banget.

Dan kadang aku kesel sendiri kalau ada orang yang bikin kamu ngerasa gak cukup,
padahal kamu sepantas itu buat dicintai dengan baik.

Aku harap suatu hari nanti ada seseorang yang hadir bukan buat ninggalin luka,
tapi buat nemenin kamu pulang dengan tenang.

Seseorang yang ngerti kalau hati kamu selembut itu 🤍

Dan sampai hari itu datang…
tolong jangan capek jadi diri kamu sendiri ya Uji.

Karena aku suka banget cara kamu jadi manusia.
Cara kamu peduli sama orang lain.
Cara kamu berusaha keliatan kuat meskipun sebenarnya capek.

Thank you for surviving this far ✨

21 tahun bukan waktu yang sebentar…
dan aku bangga banget karena kamu masih ada sampai sekarang.

Semoga di umur yang baru ini,
hari-hari kamu lebih banyak tawanya dibanding sedihnya.

Lebih banyak bahagianya dibanding kecewanya.

Dan semoga hal-hal baik pelan-pelan datang ke hidup kamu 🤍

Happy birthday once again, Ujiii 🌙✨

Dan kalau suatu hari nanti kamu lupa kalau kamu berharga…
tolong inget ya,
ada aku yang selalu percaya kalau kamu itu seindah itu.

`;

/* =======================================================
                    INTRO SCREEN
======================================================= */

setTimeout(()=>{

introScreen.style.opacity = "0";

setTimeout(()=>{

introScreen.style.display = "none";

},1000);

},5000);

/* =======================================================
                    OPEN WEBSITE
======================================================= */

openButton.addEventListener("click", ()=>{

openingSection.style.opacity = "0";

setTimeout(()=>{

openingSection.style.display = "none";

mainContent.style.display = "block";

},1000);

});

/* =======================================================
                    MUSIC TOGGLE
======================================================= */

function toggleMusic(){

if(music.paused){

music.play();

}else{

music.pause();

}

}

/* =======================================================
                    SHOW PHOTOS
======================================================= */

function showPhotos(){

/* SHOW PHOTO */

photoSection.classList.remove("hidden");

/* HIDE VIDEO */

videoSection.classList.add("hidden");

/* STOP VIDEO */

video.pause();

video.currentTime = 0;

/* RESET TEXT */

typingText.innerHTML = "";

/* RESET AUDIO */

voice.currentTime = 0;
music.currentTime = 0;

/* VOLUME */

voice.volume = 0.85;
music.volume = 0.45;

/* PLAY AUDIO */

music.play();
voice.play();

/* START */

wordIndex = 0;

typeMessage();

startSlideshow();

/* SCROLL */

window.scrollTo({

top:photoSection.offsetTop,
behavior:"smooth"

});

}

/* =======================================================
                    SHOW VIDEO
======================================================= */

function showVideo(){

videoSection.classList.remove("hidden");

photoSection.classList.add("hidden");

/* STOP AUDIO */

voice.pause();
music.pause();

voice.currentTime = 0;
music.currentTime = 0;

/* PLAY VIDEO */

video.play();

/* SCROLL */

window.scrollTo({

top:videoSection.offsetTop,
behavior:"smooth"

});

}

/* =======================================================
                    TYPE MESSAGE
======================================================= */

const words =
fullMessage.split(" ");

let wordIndex = 0;

/*
3 menit 27 detik
=
207000 ms
*/

const totalDuration = 207000;

const wordSpeed =
totalDuration / words.length;

function typeMessage(){

if(wordIndex < words.length){

typingText.innerHTML +=
words[wordIndex] + " ";

wordIndex++;

/* AUTO SCROLL */

typingText.scrollTop =
typingText.scrollHeight;

/* NEXT WORD */

setTimeout(typeMessage, wordSpeed);

}

}

/* =======================================================
                    SLIDESHOW
======================================================= */

let currentSlide = 0;

let slideshowInterval;

function startSlideshow(){

slides.forEach((slide)=>{

slide.classList.remove("active");

});

slides[0].classList.add("active");

/* RESET */

currentSlide = 0;

/* CLEAR OLD */

clearInterval(slideshowInterval);

/* START */

slideshowInterval = setInterval(()=>{

slides[currentSlide]
.classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

slides[currentSlide]
.classList.add("active");

},8000);

}

/* =======================================================
                    PAGE READY
======================================================= */

window.onload = ()=>{

console.log(
"Website loaded successfully 🤍"
);

};