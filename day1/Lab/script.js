let firstName,lastName,birthYear;
function info(){

firstName=prompt("Enter your first name:");

while(firstName==null || firstName==''){
    firstName=prompt("Enter your first name:");
}
lastName=prompt("Enter your last name:");
while(lastName==null || lastName==''){
    lastName=prompt("Enter your last name:");
}
confirm(`full name: ${firstName} ${lastName}`);

birthYear=Number(prompt("Enter birth year:"));
console.log(birthYear);
while(isNaN(birthYear) || birthYear==0){
    console.log(birthYear);
    birthYear=prompt("Enter birth year:");
}

confirm(`Hello ${firstName} ${lastName} and your are ${2023-birthYear} years`);
}

function sum(){
    let n1=Number(prompt("Enter first number:"));
    
    while(isNaN(n1)){
        console.log(n1);
        n1=prompt("Enter first number:");
    }
    let n2=Number(prompt("Enter second number:"));
    
    while(isNaN(n2)){
        console.log(n2);
        n2=prompt("Enter second number:");
    }
    confirm(`${n1} + ${n2}= ${n1+n2}`)
}