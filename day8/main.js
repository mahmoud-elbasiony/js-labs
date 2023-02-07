const tasks=document.querySelector(".tasks");
const submit=document.querySelector(".add");
const taskinput=document.getElementById("taskinput");

let tasksArray=[];
submit.addEventListener("click",function(){

    if(taskinput.value != ""){
        addTaskToArray(taskinput.value)
    }
    taskinput.value=''
})

function addTaskToArray(taskvalue){
    const task={
        id:Date.now(),
        data:taskvalue,
        complete:false
    }
    tasksArray.push(task);
    addToPage(tasksArray);
    // addToLocalStorage(tasksArray);
}

function addToPage(array){
    array.forEach(element => {
        let taskcontainer=document.createElement("div");
        taskcontainer.classList.add("task");
        taskcontainer.id=element.id;


        let div=document.createElement("div");
        div.appendChild(document.createTextNode(element["data"]))
        let btnContainers=document.createElement("div");

        let removebtn=document.createElement("button");
        removebtn.className="removebtn";
        removebtn.appendChild(document.createTextNode("remove"))
        addBtEvent(removebtn)

        let checkbtn=document.createElement("button");
        checkbtn.className="checkbtn";
        checkbtn.appendChild(document.createTextNode("check"))
        addBtEvent(checkbtn)
        btnContainers.appendChild(checkbtn);
        btnContainers.appendChild(removebtn);

        taskcontainer.appendChild(div);
        taskcontainer.appendChild(btnContainers);
        console.log(taskcontainer);
        tasks.appendChild(taskcontainer)
        array.pop();
    });
    
}


function addBtEvent(btn){
    btn.addEventListener("click",function(e){
        console.log(btn.className)
        let task=btn.closest(".task");
        if(btn.className=="checkbtn"){
            task.classList.toggle("checked");
            if(task.classList.contains("checked")){
                task.style.textDecoration="line-through";
                btn.innerText="uncheck";

            }else{
                task.style.textDecoration="none";

                btn.innerText="check"

            }
        }
        if(btn.className=="removebtn"){
            console.log("remove")
            task.remove();
        }
    })

}
