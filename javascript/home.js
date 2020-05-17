
function Buy(title){
    var queryString ='?'+title;
    window.location.href='product.html'+queryString;
}

fixedPosition();
function fixedPosition(){
    var height = document.getElementById("upp").offsetHeight + 30;
    var main = document.getElementsByClassName("main")[0];
    main.style.marginTop=height+"px";
}

function right(){
    var slides = document.getElementsByClassName('slide');
    var index =0;
    for(var slide of slides){
        index++;
        if(slide.classList.contains('show-slide') && index<slides.length){
            slide.classList.remove('show-slide');
            slide.classList.add('remove-slide');
            slide.nextElementSibling.classList.remove('remove-slide');
            slide.nextElementSibling.classList.add('show-slide');
            break;
        }
    }
}

function left(){
    var slides = document.getElementsByClassName('slide');
    for(var i=0 ;i<slides.length;i++){
        if(slides[i].classList.contains('show-slide') && i!=0){
            slides[i].classList.remove('show-slide');
            slides[i].classList.add('remove-slide');
            slides[i].previousElementSibling.classList.remove('remove-slide');
            slides[i].previousElementSibling.classList.add('show-slide');
            break;
        }
    }
}