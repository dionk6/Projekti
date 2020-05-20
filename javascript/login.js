function SignUp(){
    document.getElementById('login').style.display="none";
    document.getElementById('signup').style.display="block";
}

function backToLogin(){
    //------------Full Name Validation
    var fullName = "";
    if(document.getElementById('fullnameInput').value.trim()==""){
        alert("Please write your Name");
    }else {
        fullName=document.getElementById('fullnameInput').value;
    }
    //-------------------------------

    //-----------Email validation
    var email="";
    var reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(document.getElementById("emailInput").value.trim()==""){
        alert("Please write your email");
    } else {
        var docu = document.getElementById("emailInput").value;
        if(reg.test(docu) == false ){
            alert("Invalid Email Address");
        } else {
            email=docu;
        }
    }
    //------------------------------

    //-------------Username Validation
    if(document.getElementById('usernameSignupInput').value.trim() == ""){
        alert("Please write your Username");
    } else {
        username = document.getElementById('usernameSignupInput').value;
    }
    //----------------------------------

    //-------------Password Validation
    if(document.getElementById('passwordSignupInput').value.trim() == "" || document.getElementById('ConfirmPasswordInput').value.trim()==""){
        alert("Please write your password");
    } else {
        var pass = document.getElementById('passwordSignupInput').value;
        var inputConfirmPassword = document.getElementById('ConfirmPasswordInput').value;
        if(pass == inputConfirmPassword){
            password=pass;
        } else {
            alert("Password not matching");
        }
    }
    //------------------------------

    //-------------Create account
    if(username != "" && password != ""){
        document.getElementById('login').style.display="block";
        document.getElementById('signup').style.display="none";
    }
    //-----------------------------
}

var username = '';
var password = '';

function OpenHomePage(){
    var inputUsername = document.getElementById('usernameInput').value;
    var inputPassword = document.getElementById('passwordInput').value;
    if(inputUsername=='' || inputPassword==''){
        alert("Please write your username or password");
    }else if(inputUsername==username && inputPassword==password){
        window.location.href="home.html"
    } else {
        alert("Username or Password incorrect");
    }
}