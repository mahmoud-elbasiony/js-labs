const username = document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");
const submit = document.getElementById("submit");
localStorage.setItem("email","admin@gmail.com");
localStorage.setItem("username","admin");
localStorage.setItem("password","123");
submit.addEventListener('click', validate);

username.addEventListener('blur', checkinputuser);
function checkinputuser(){
    checkinput("validusername")
}

password.addEventListener('blur', checkinputpass);
function checkinputpass(){
    checkinput("validpass")
}

function checkinput(input){
    if(username.value==""){
        // username.parentElement.style.outlineColor="red"
        document.getElementById(input).classList.add("invalid-tooltip")
        document.getElementById(input).classList.remove("valid-tooltip")
    }else{
        // username.parentElement.style.outlineColor="green"
        document.getElementById(input).classList.add("valid-tooltip")
        document.getElementById(input).classList.remove("invalid-tooltip")
        
    }
}

function validate(e) {
    e.preventDefault();
    
    let user=localStorage.getItem("username");
    let pass=localStorage.getItem("password");
    let message = document.getElementsByClassName("modal-body")[0];

    if (username.value == "" || password.value == "") {
        message.style.color = "red";
        message.innerText = "Please enter user name and password";
        password.value=username.value="";

    } else if (username.value != user || password.value != pass) {
        message.style.color = "red";
        message.innerText = "wrong username or password";
        password.value=username.value="";

    }
    else if (username.value == user && password.value == pass) {
        message.style.color = "green";
        message.innerText = "login successfuly";
        document.getElementsByClassName("btn-close")[0].onclick=login;
        
    }
}

function login(){
    location.assign(location.origin+"/src/welcome.html");
}