const next=document.getElementById("next");
const prev=document.getElementById("prev");
var images=document.querySelectorAll(".slides div");
var btns=document.querySelectorAll(".carasoulbtn div");


function slideNext(){
    images=document.querySelectorAll(".slides div");
    images.forEach((el)=>el.classList.add("hidden"));


    for(let i=0;i<images.length;i++)
    {
        if(images[i].classList.contains("center")){
                let current=i;
                images[i].classList.remove("hidden");
                images[i].classList.remove("center");
                current=i+1>images.length-1?0:i+1;
                images[current].classList.add("center");
                images[current].classList.remove("hidden");
                console.log(current)
                images[current==images.length-1?0:current+1].classList.remove("hidden");
                images[images.length-1].insertAdjacentElement('afterend',images[0])
                btns.forEach((btn)=>btn.classList.remove("active"))
                btns[i].classList.add("active")
                return;
            
        }
    }
}
function slideprev(){
    images=document.querySelectorAll(".slides div");
    images.forEach((el)=>el.classList.add("hidden"));


    for(let i=0;i<images.length;i++)
    {
        if(images[i].classList.contains("center")){
                let current=i;
                images[i].classList.remove("hidden");
                images[i].classList.remove("center");
                current=i-1<0?images.length-1:i-1;
                images[current].classList.add("center");
                images[current].classList.remove("hidden");
                console.log(current)
                images[current==0?images.length-1:current-1].classList.remove("hidden");
                images[0].insertAdjacentElement('beforebegin',images[images.length-1])

                return;
            
        }
    }
}
next.addEventListener("click",slideNext)
prev.addEventListener("click",slideprev)
