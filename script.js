let signupbtn = document.getElementById("signup");
let signinbtn = document.getElementById("signin");
let namefield = document.getElementById("name-field");
let title = document.getElementById("title");
var form = document.querySelector("form");

signinbtn.onclick = function(){
    namefield.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupbtn.classList.add("disablebtn");
    signinbtn.classList.remove("disablebtn");
    if(form.password.value!="" && form.email.value!=""){
        alert("Signed in successfully! ")
    }
}
signupbtn.onclick = function(){
    namefield.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signinbtn.classList.add("disablebtn");
    signupbtn.classList.remove("disablebtn");
    if(form.name.value!="" && form.password.value!="" && form.email.value!=""){
        alert("Signed up successfully! ")
    }
}