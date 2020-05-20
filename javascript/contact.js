function kontakto(){
    var email=document.getElementById("inputemail").value;
    if(email==""){
        alert("Please write your email");
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
