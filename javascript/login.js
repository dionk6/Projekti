function SignUp(){
    document.getElementById('login').style.display="none";
    document.getElementById('signup').style.display="block";
}

function backToLogin(){
    username = document.getElementById('usernameSignupInput').value;
    var pass = document.getElementById('passwordSignupInput').value;
    var inputConfirmPassword = document.getElementById('ConfirmPasswordInput').value;
    if(pass == inputConfirmPassword){
        password=pass;
    } else {
        alert("Password not matching");
    }
    document.getElementById('login').style.display="block";
    document.getElementById('signup').style.display="none";
}

var username = '';
var password = '';

function OpenHomePage(){
    var inputUsername = document.getElementById('usernameInput').value;
    var inputPassword = document.getElementById('passwordInput').value;
    if(inputUsername=='' || inputPassword==''){
        alert("Please write your username and password");
    }else if(inputUsername==username && inputPassword==password){
        window.location.href="home.html"
    } else {
        alert("Username or Password incorrect");
    }
}