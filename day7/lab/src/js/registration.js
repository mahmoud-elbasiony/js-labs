
const email = document.querySelector('[type=email]');
const username = document.querySelector('[type=text]');
const password = document.querySelectorAll('[type=password]')[0];
const repeatpassword = document.querySelectorAll('[type=password]')[1];
const submit = document.getElementById("submit");
let message = document.querySelector(".modal-body");
const userRegex=/[a-zA-Z]\S{5,20}/;
const emailRegex=/[[a-zA-Z]{1}\w*\.*\w+]*@{1}\w*\.{1}\w*/;
const passRegex=/\S{8,20}/;

document.getElementsByTagName("form").onsubmit=function(ev) {
    ev.preventDefault();
    //later you decide you want to submit
    // $(this).unbind('submit').submit()
};


// email.addEventListener("change",checkemail)
email.addEventListener('change', checkinputemail);
// function check input email data
function checkinputemail(){
    isInputValueEmpty(email,"validEmail")
    if(checkRegExp(email,emailRegex)){ //check input email data using regex
        console.log("ASDASDasd")
        email.style.color="green" //change input colr based on email validation
        return true;

    }else{
        email.style.color="red" //change input colr based on email validation
        return true;


    }
}
username.addEventListener("change",checkUser)
password.addEventListener("change",checkpass)
repeatpassword.addEventListener("change",checkpass)
submit.addEventListener('click', validate);

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
        if(checkinputemail() && checkUser()){
        submit.removeAttribute("disabled","")

        }
    }
}

function validate(e) {
    e.preventDefault();
    if (username.value == "" || password.value == "" || email.value =="" || repeatpassword.value=="") {
        message.style.color = "red";
        message.innerText = "Please enter missing data";
    } else if (repeatpassword.value != password.value) {
        checkinput("validpass");
    } else if (repeatpassword.value ==password.value && email !="" && username.value != "") {
        message.style.color = "green";
        message.innerText = "sighup successfuly";
        addAccount(username.value,email.value,password.value);
        // document.getElementsByClassName("btn-close")[0].onclick=signup;
        submit.removeAttribute("disabled","")
        setTimeout(signup,1000)
    }
    
}

function addAccount(user,email,password){
    localStorage.setItem("username",user);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
}

function signup(){
    location.assign(location.origin+"/index.html");
}


function checkUser(){
    isInputValueEmpty(username,"validUser");
    if(checkRegExp(username,userRegex)){
        console.log("ASDASDasd");
        

        username.style.color="green"
        return true;

    }else{
        username.style.color="red"
        return false;

    }
}

// regex function to check if inputs value are qualified
function checkRegExp(input,regexp){
    const reg=new RegExp(regexp);
    let inputArray=input.value.trim().split(' ')
    let check=false;
    for(let i=0;i<inputArray.length;i++){
        if(reg.test(inputArray[i])){
            console.log("True")
            
            check= true;
        }else{
            console.log("false")
            return false;
        }
    }
    
    return check;
}


function isInputValueEmpty(input,message){
    if(input.value==""){
        // email.parentElement.style.outlineColor="red"
        document.getElementById(message).classList.add("invalid-tooltip")
        document.getElementById(message).classList.remove("valid-tooltip")
        return true;
    }else{
        // email.parentElement.style.outlineColor="green"
        document.getElementById(message).classList.add("valid-tooltip")
        document.getElementById(message).classList.remove("invalid-tooltip")
        return false;

        
    }
}