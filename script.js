window.addEventListener("scroll" , function() {
    let header = document.querySelector("header");
        header.classList.toggle('sticky' , window.scrollY > 200);
    
})
function showmenu(){
    let menuMobile = document.querySelector('.menu-mobile');
    let menuMobilebtn = document.querySelector('.menu-btn');
    let menuMobileclose = document.querySelector('.closs-menu');
    menuMobile.style.transform = "translateX(0%)";
    menuMobilebtn.style.opacity = '0';
    menuMobileclose.style.display = "block"
}
function hidemenu(){
    let menuMobile = document.querySelector('.menu-mobile');
    let menuMobilebtn = document.querySelector('.menu-btn');
    let menuMobileclose = document.querySelector('.closs-menu');
    menuMobile.style.transform = "translateX(100%)";
    menuMobilebtn.style.opacity = '1';
    menuMobileclose.style.display = "none"
}
var app = document.querySelector('.h1elem');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
});

typewriter
  .pauseFor(25)
  .typeString(' طراحی انواع وبسایت با بهترین متریال ')
  .pauseFor(800)
  .deleteChars(30)
  .typeString(' جذاب و کاربر پسند')
  .typeString('<strong><span style="color: #4cdeff;"> در کمترین زمان</span></strong>')
  .pauseFor(2000)
  .start();