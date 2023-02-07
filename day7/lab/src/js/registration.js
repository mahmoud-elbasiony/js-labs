const email = document.querySelector('[type=email]');
const username = document.querySelector('[type=text]');
const password = document.querySelectorAll('[type=password]')[0];
const repeatpassword = document.querySelectorAll('[type=password]')[1];
const submit = document.getElementById("submit");
let message = document.getElementsByClassName("modal-body")[0];
document.getElementsByTagName("form").onsubmit=function(ev) {
    ev.preventDefault();
    //later you decide you want to submit
    // $(this).unbind('submit').submit()
};


submit.addEventListener('click', validate);
password.addEventListener("blur",checkpass)
repeatpassword.addEventListener("blur",checkpass)

submit.setAttribute("disabled","")


function checkpass(){
    checkinput("validpass")
}
function checkinput(input){
    if(repeatpassword.value !=password.value || repeatpassword.value =="" || password.value==""){
        // username.parentElement.style.outlineColor="red"
        document.getElementsByClassName(input)[0].classList.add("invalid-tooltip");
        document.getElementsByClassName(input)[0].classList.remove("valid-tooltip");
        document.getElementsByClassName(input)[1].classList.add("invalid-tooltip");
        document.getElementsByClassName(input)[1].classList.remove("valid-tooltip");
        
    }else{
        // username.parentElement.style.outlineColor="green"
        document.getElementsByClassName(input)[0].classList.add("valid-tooltip");
        document.getElementsByClassName(input)[0].classList.remove("invalid-tooltip");
        document.getElementsByClassName(input)[1].classList.add("valid-tooltip");
        document.getElementsByClassName(input)[1].classList.remove("invalid-tooltip");
        if(email !="" && username.value != ""){
        submit.removeAttribute("disabled","")

        }
    }
}

function validate(e) {
    e.preventDefault();
    if (username.value == "" || password.value == "" || email.value =="" || repeatpassword.value=="") {
        // message.style.color = "red";
        // message.innerText = "Please enter missing data";
    } else if (repeatpassword.value != password.value) {
        checkinput("validpass");
        


    } else if (repeatpassword.value ==password.value && email !="" && username.value != "") {

        // message.style.color = "green";
        // message.innerText = "sighup successfuly";
        // addAccount(username.value,email.value,password.value);
        // document.getElementsByClassName("btn-close")[0].onclick=signup;
        submit.removeAttribute("disabled","")
        signup()
    }
    
}

function addAccount(user,email,password){
    localStorage.setItem("username",user);
    localStorage.setItem("email",email);
    localStorage.setItem("passwod",password);
}

function signup(){
    location.assign(location.origin+"/index.html");
}
