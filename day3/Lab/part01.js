let credentials={username : "admin" ,password : "421$$"};
function login(){
    let username=prompt("Enter UserName:");
    let password;
    if(username==credentials.username){
        password=prompt("Enter password:");
        if(password==credentials.password){
            alert("login successfully.");
        }else if(password!=null){
            alert("incorrect password.");
        }
    }else if(username!=null){
        alert("incorrect username.");
    }

}

function calc(){
    let result=NaN;
    let flag=true;// flag to end program
    let checkexit;//check if user hit cancel

    //get first number
    checkexit=prompt("Enter number:");
    console.log(checkexit);
    result= parseFloat(checkexit);

    if(checkexit==null)
        flag=false;
    
    do{
        let n=NaN;
        let op=null;
        
        //getting operation
        while(flag && op==null){

            op=prompt("Enter operation + - * / % .")[0];
            console.log(op);
            if(op==null)
                flag=false;
        }

        //getting sec number
        while(flag && isNaN(n)){

            checkexit=prompt("Enter number:");
            console.log(checkexit);
            n= parseFloat(checkexit);
            if(checkexit==null)
                flag=false;
        }
        
        switch(op){
            case '+':
                result=result+n;
                break;
            case '-':
                result=result-n;
                break;
            case '*':
                result=result*n;
                break;
            case '/':
                result=result/n;
                break;
            case '%':
                result=result%n;
                break;
            default:
                alert(`wrong operation.`);
        }
        if(flag)
            alert(`result is ${result}`);

    }while(flag);

}