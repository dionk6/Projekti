function ndrroFoton(clickedId) {
    if(clickedId == "image1-circle-two"){
        document.getElementById("image1").style.display="none";
        document.getElementById("image2").style.display="block";
    } else if(clickedId == "image1-circle-three" ){
        document.getElementById("image1").style.display="none";
        document.getElementById("image3").style.display="block";
    } else if(clickedId == "image2-circle-one"){
        document.getElementById("image2").style.display="none";
        document.getElementById("image1").style.display="block";
    } else if(clickedId == "image2-circle-three"){
        document.getElementById("image2").style.display="none";
        document.getElementById("image3").style.display="block";
    } else if(clickedId == "image3-circle-one"){
        document.getElementById("image3").style.display="none";
        document.getElementById("image1").style.display="block";
    } else if(clickedId == "image3-circle-two"){
        document.getElementById("image3").style.display="none";
        document.getElementById("image2").style.display="block";
    }
}