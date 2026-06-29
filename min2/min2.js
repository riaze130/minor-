const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event){

    if(event.key==="Enter"){
        addTask();
    }

});

function addTask(){

    const taskText = taskInput.value.trim();

    if(taskText===""){

        alert("Please enter a task.");
        return;

    }

    const li=document.createElement("li");

    const span=document.createElement("span");
    span.textContent=taskText;

    const actions=document.createElement("div");
    actions.className="actions";

    const completeBtn=document.createElement("button");
    completeBtn.textContent="✔";
    completeBtn.className="complete";

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="✖";
    deleteBtn.className="delete";

    completeBtn.addEventListener("click",function(){

        span.classList.toggle("completed");

    });

    deleteBtn.addEventListener("click",function(){

        li.remove();

    });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    taskInput.value="";
    taskInput.focus();

}