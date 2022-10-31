//selectors
const toDoInput=document.querySelector(".todo-input");
const toDoButton=document.querySelector(".todo-button");
const toDoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");


//Event listeners
toDoButton.addEventListener('click',addToDo);
toDoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


//functions
function addToDo(event){
    //prevent from submitting
    event.preventDefault()
    //to add div
    const toDoDiv=document.createElement("div");
    toDoDiv.classList.add("toDo");
    //create li
    const newToDo=document.createElement("li");
    newToDo.innerText= toDoInput.value;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);

    //check buuton
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton)

    //trash button
    const trashButton=document.createElement("button")
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    toDoDiv.appendChild(trashButton);
    //append to list
    toDoList.appendChild(toDoDiv);
    //clear todo input value
    toDoInput.value=""
}

function deleteCheck(e){
   const item=e.target;
   if(item.classList[0]==="trash-btn"){
    const todo=item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener('transitionend',function(){
        todo.remove();
    })
   
   }

   //check mark
   if(item.classList[0]==="complete-btn"){
    const todo=item.parentElement;
   todo.classList.toggle('completed') ;

   }
}

function filterTodo(e){
    const todos=toDoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
        }
    })



}