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
        console.log(element["id"]);
        let html=`<div class="task" id=item${element["id"]}>
                    <div class="task taskItem bg-light rounded-3 h-50"> ${element["data"]} </div>
                    <div class="taskbtns">
                        <button type="submit" class="checkbtn btn btn-success h-50">check</button>
                        <button type="submit" class="removebtn btn btn-danger h-50">remove</button>
                    </div>
                </div>`;
        tasks.innerHTML +=html;
        let btnContainers=document.createElement("div");

        let removebtn=document.querySelector(`#item${element["id"]} .removebtn`);
        addBtEvent(removebtn)
        let checkbtn=document.querySelector(`#item${element["id"]} .checkbtn`);
        addBtEvent(checkbtn)
        
        array.pop();
    });
    
}


function addBtEvent(btn){
        // console.log(btn.className)

        btn.addEventListener("click",function(e){
        // console.log(e.target.className)
        let task=e.target.closest(".task").firstElementChild;
        // console.log(task);
        if(e.target.classList.contains("checkbtn")){
            task.classList.toggle("checked");
            if(task.classList.contains("checked")){
                task.style.textDecoration="line-through";
                e.target.innerText="uncheck";

            }else{
                task.style.textDecoration="none";

                e.target.innerText="check"

            }
        }
        if(e.target.classList.contains("removebtn")){
            console.log("remove")
            task.parentElement.remove();
        }
    })

}
