const addBtn = document.querySelector('.js-add-btn');
const taskInput = document.querySelector('.js-task');
const taskContainer = document.querySelector('.js-todo-container');

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
renderTodo();
function addTodo()
{
    const newTask = taskInput.value;
    todoList.push(newTask);
    taskInput.value = '';
    localStorage.setItem("todoList" , JSON.stringify(todoList));
}
function renderTodo(){
    let tasks = '';
    for(let i = 0; i < todoList.length; i++)
    {
        tasks += `
            <div class="todo-card js-todo-card">
                <div class="task js-show-task">${todoList[i]}</div>
                <button class="remove js-remove-btn">Remove</button>
            </div>
        `;
    }
    taskContainer.innerHTML = tasks;

    document.querySelectorAll('.js-remove-btn')
            .forEach((remove , index)=> {
                remove.addEventListener(('click') ,()=>{          
                 removeTask(index)
             }
    )
});
localStorage.setItem("todoList" , JSON.stringify(todoList));
}

function removeTask(index){
    console.log('nice');
    todoList.splice(index , 1);
    renderTodo();
}
function emptyInput()
{
    if (taskInput.value === ''){
        alert("Enter the task ...");
        return false;
    }
    return true;
}


addBtn.addEventListener(('click') , ()=>{
    if(emptyInput())
    {
        addTodo();
        renderTodo();
        console.log(todoList);
    }
});
document.body.addEventListener(('keydown'), (event)=>{
   if(event.key === 'Enter') {
    if(emptyInput())
    {
        addTodo();
        renderTodo();
        console.log(todoList);
    }
   }
});
