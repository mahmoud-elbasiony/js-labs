const email = document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");
const submit = document.getElementById("submit");
const emailRegex=/[[a-zA-Z]{1}\w*\.*\w+]*@{1}\w*\.{1}\w*/;
const passRegex=/\S{8,20}/;
//check local storage for login info
if(localStorage.getItem("email")==''){
    localStorage.setItem("email","admin@gmail.com");
}
if(localStorage.getItem("password")==''){
    localStorage.setItem("password","12345678");

}
if(localStorage.getItem("username")==''){
    localStorage.setItem("username","admin");

}


//add event listener for email 
email.addEventListener('input', checkinputemail);

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



//add event listener for email 
password.addEventListener('input', checkinputpass);

//function check input email data
function checkinputpass(){
    isInputValueEmpty(password,"validpass")
    if(checkRegExp(password,passRegex)){
        console.log("passssssssssss")
        password.style.color="green"//change input colr based on email validation
        return true;
    }else{
        password.style.color="red"//change input colr based on email validation
        return false;


    }
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

//add event listener for submit btn
submit.addEventListener('click', validate);
function validate(e) {
    e.preventDefault();
    
    let user=localStorage.getItem("email");
    let pass=localStorage.getItem("password");
    let message = document.querySelector(".modal-body");

    if (email.value == "" || password.value == "") {
        message.style.color = "red";
        message.innerText = "Please enter missing login info";
        // password.value=email.value="";

    }
    if(checkRegExp(password,passRegex) && checkRegExp(email,emailRegex)){
        if (email.value != user || password.value != pass) {
            message.style.color = "red";
            message.innerText = "wrong email or password";
            // password.value=email.value="";
    
        }
        else if (email.value == user && password.value == pass) {
            message.style.color = "green";
            message.innerText = "login successfuly";
            // document.querySelector(".btn-close").onclick=login;
            setTimeout(login,1000);
            
        }
    }else{
        message.style.color = "red";

        message.innerText = "uncorrect email or password";
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

function login(){
    location.assign(location.origin+"/src/welcome.html");
}