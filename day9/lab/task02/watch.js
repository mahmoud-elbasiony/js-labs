const container = document.querySelector(".container")
const secHand = document.querySelector(".sec")
const minHand = document.querySelector(".min")
const hourHand = document.querySelector(".hour")
const alarmInputs=document.querySelectorAll(".click input")
const setBtn=document.getElementById("set")

const clearBtn=document.getElementById("clear")





setInterval(() => {
    secHand.style.transform = 'rotate(' + todegree(new Date().getUTCSeconds())+ 'deg)';
    minHand.style.transform = 'rotate(' + todegree(new Date().getUTCMinutes(),new Date().getUTCSeconds())+ 'deg)';
    hourHand.style.transform = 'rotate(' +todegree(new Date().getHours()-12,new Date().getUTCMinutes())*5 + 'deg)';
    //hourHand.style.transform = 'rotate(30deg)';
}, 500);
container.addEventListener("mouseover" , () => {
    container.title=new Date().toLocaleTimeString()
})
function todegree(time,fraction=0) {
    return (time + (fraction / 60)) * 6;
}
var setTimeoutId;
setBtn.addEventListener("click", function() {
    // document.querySelectorAll(".click > p:nth-child(1)")[0].innerHTML = new Date().toLocaleTimeString();
    let alarmtimer=0;
    if(typeof parseInt(alarmInputs[0].value)=="number"){
        alarmtimer+=alarmInputs[0].value*3600*1000;
        alarmInputs[0].value=""
    }
    if(typeof parseInt(alarmInputs[1].value)=="number"){
        alarmtimer+=alarmInputs[1].value*60*1000;
        alarmInputs[1].value=""
    }
    if(typeof parseInt(alarmInputs[2].value)=="number"){
        alarmtimer+=alarmInputs[2].value*1000;
        alarmInputs[2].value=""
    }
    console.log(alarmtimer);
    if(alarmtimer>0){
        clearTimeout(setTimeoutId);
        
        setTimeout(function(){
            alert("Ringggggggggggggggggggggg")
        },alarmtimer)
    }
    
    
})


