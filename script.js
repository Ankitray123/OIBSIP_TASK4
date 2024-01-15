var signupbtn = document.getElementById("signup");
var signinbtn = document.getElementById("signin");
var namefield = document.getElementById("name-field");
var title = document.getElementById("title1");
var form = document.querySelector("form");

signupbtn.onclick = function(){
    namefield.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signinbtn.classList.add("disable");
    signupbtn.classList.remove("disable");
    if(form.name.value!="" && form.password.value!="" && form.email.value!=""){
        alert("Signed up successfully! ")
    }
}

signinbtn.onclick = function(){
    namefield.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
    if((form.password.value!="") && form.email.value!=""){
        alert("Signed in successfully! ")
    }
}