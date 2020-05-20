function kontakto(){
    var email = "";
    var doc=document.getElementById("inputemail").value;
    if(doc==""){
        alert("Please write your email");
    } else {
        var reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if(reg.test(doc)==false){
            alert("Invalid email")
        } else {
            email=doc;
        }
    }
    var subject=document.getElementsByClassName("subject")[0].value;
    if(subject==""){
        alert("Please write the subject");
    }
    var message=document.getElementsByClassName("message-content")[0].value;
    if(message==""){
        alert("Please write your message");
    }
}
