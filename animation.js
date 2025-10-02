
// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");
// Shery.hoverWithMediaCircle(".hvr", {images: ["image2.jpg","image1.jpg"]});


function animation(){
    if(window.innerWidth > 800){
        Shery.mouseFollower();
        Shery.makeMagnet(".magnet");
        Shery.hoverWithMediaCircle(".hvr", {images: ["image2.jpg","image1.jpg"]});
    }
}
animation();

let navmenu = document.querySelector(".active");
let navlink = document.querySelector(".navlist");

navmenu.addEventListener("click",function(){
    navlink.classList.toggle("show")

    if(navlink.classList.contains('show')){
        document.querySelector('.active ion-icon').setAttribute('name','close-outline');
    }
    else{
        document.querySelector('.active ion-icon').setAttribute('name','menu-sharp');
    }
});





