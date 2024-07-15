window.addEventListener("scroll" , function() {
    let header = document.querySelector("header");
        header.classList.toggle('sticky' , window.scrollY > 200);
    
})
function showmenu(){
    let menuMobile = document.querySelector('.menu-mobile');
    let menuMobilebtn = document.querySelector('.menu-btn');
    menuMobile.style.transform = "translateX(0%)";
    menuMobilebtn.style.opacity = '0';
}
function hidemenu(){
    let menuMobile = document.querySelector('.menu-mobile');
    let menuMobilebtn = document.querySelector('.menu-btn');
    menuMobile.style.transform = "translateX(100%)";
    menuMobilebtn.style.opacity = '1';
}