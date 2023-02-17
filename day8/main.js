const tasks=document.querySelector(".tasks");
const submit=document.querySelector(".add");
const taskinput=document.getElementById("taskinput");

let tasksArray=[];
Object.keys(localStorage).sort().forEach(key=>{
    if(typeof key =='number'){
    let value=JSON.parse(localStorage.getItem(key))

        const task={
            id:key,
            data:value["data"],
            complete:value["complete"]
        }
        addToPage([task])
    }
    
    
})


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
    addToLocalStorage(tasksArray);
}

function addToPage(array){
    array.forEach(element => {
        let taskcontainer=document.createElement("div");
        taskcontainer.classList.add("task");
        taskcontainer.id=element.id;

        
        let div=document.createElement("div");
        div.innerText=element["data"];
        let btnContainers=document.createElement("div");

        let removebtn=document.createElement("button");
        removebtn.className="removebtn";
        removebtn.appendChild(document.createTextNode("remove"))
        addBtnEvent(removebtn)

        let checkbtn=document.createElement("button");
        checkbtn.className="checkbtn";
        checkbtn.innerText="check"

        if(element.complete){
            
            checkbtn.innerText="uncheck"

            taskcontainer.className+=" checked";
            taskcontainer.style.textDecoration="line-through";


        }
        addBtnEvent(checkbtn)
        btnContainers.appendChild(checkbtn);
        btnContainers.appendChild(removebtn);

        taskcontainer.appendChild(div);
        taskcontainer.appendChild(btnContainers);
        console.log(taskcontainer);
        tasks.appendChild(taskcontainer)
    });
    
}


function addBtnEvent(btn){
        btn.addEventListener("click",function(e){
        console.log(btn.className)
        let task=btn.closest(".task");
        if(btn.className=="checkbtn"){
            task.classList.toggle("checked");

            let update={
                data:task.firstElementChild.innerText,
                
            }

            if(task.classList.contains("checked")){
                update.complete=true;
                task.style.textDecoration="line-through";
                btn.innerText="uncheck";

            }else{
                task.style.textDecoration="none";
                update.complete=false;

                btn.innerText="check"

            }

            localStorage.setItem(task.id,JSON.stringify(update))

        }
        if(btn.className=="removebtn"){
            console.log("remove")
            localStorage.removeItem(task.id)
            task.remove();
            console.log(task.id);
        }
    })

}

function addToLocalStorage(tasks){
    tasks.forEach(function(task){
        if(localStorage.getItem(task.id)!=task.id){
            localStorage.setItem(task.id,JSON.stringify({
                data:task["data"],
                complete:task["complete"]
            }))
        }
        tasks.pop();
    })
    

    
}
