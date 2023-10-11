const taskForm=document.getElementById("task-form");
const taskList=document.getElementById("task-list");
const containerForButtons=document.getElementById("btn")
var a = 1;

//counter variable to track the task index

let taskIndex = 1;

//console.log(taskForm, taskList);

taskForm.addEventListener("submit", function(event){
    event.preventDefault();

    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    //console.log(taskText);
    if(taskText !== "") {

        
        let taskNode = document.getElementById('test');
        let taskBox = document.createElement('div');
        taskBox.classList.add("task-box");
        taskBox.id = a;
        taskNode.appendChild(taskBox);

        let taskList = document.getElementById(a);
        let taskItem = document.createElement('li');
        taskItem.classList.add("task-item")
        taskItem.textContent = `${taskIndex}-${taskText}`;
        taskList.appendChild(taskItem);

        let taskBtn = document.getElementById(a);
        let taskBat = document.createElement('button');
        taskBat.classList.add("btn");
        taskBat.id = '_'+a;
        //taskBat.className = 'Del';
        taskBat.innerText = 'Del';
        taskBtn.appendChild(taskBat);
        
        taskItem.addEventListener("click", function(){
            console.log("complited");
            this.classList.toggle("complited");
        })

        //Increment the task index
        taskIndex++;
        a++;
        document.cookie = 'counter=1'
        
    }
    
})
taskForm.addEventListener("btn", function (e){
    a.preventDefault();

})