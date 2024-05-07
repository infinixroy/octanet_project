//slider portion for testimonials
const tnslider = tns({
    container: ".slider",
    slideBy: 1,
    speed: 700,
    nav: true,
    navPoisition: "bottom",
    autoPlay: true,
    autoPlayTimeOut: 7000,
    autoPlayButtonOutput: false,
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next"
})

let i = 0;
const menubtn = document.querySelector(".sidemenu");
menubtn.addEventListener('click',function(){
    let list = document.querySelector('.list-items');
    if(i % 2 == 0){
        list.style.left = '0px';
        document.querySelector('.content button').style.display = 'none';
    } else {
        list.style.left = '-100%';
        document.querySelector('.content button').style.display = 'block';
    }
    i += 1;
})