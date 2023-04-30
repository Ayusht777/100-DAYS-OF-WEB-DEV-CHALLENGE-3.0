//variables 

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task')


addTask.addEventListener('click',function(){
   let task = document.createElement('div');
   task.classList.add('task');
   
   let li = document.createElement('li');
   li.innerText  =`${inputTask.value}`;
   task.appendChild(li);

   let CheckButton = document.createElement("button");
   CheckButton.innerHTML =`<i class="fa-solid fa-check"></i>`;
   CheckButton.classList.add('checkTask');
   task.appendChild(CheckButton);
   
   let DeleteButton = document.createElement("button");
   DeleteButton.innerHTML =`<i class="fa-solid fa-trash"></i>`;
   DeleteButton.classList.add('deleteTask');
   task.appendChild(DeleteButton);

   if(inputTask.value === ""){
     alert('Please Enter A Task');
   }
   else{
    taskContainer.appendChild(task);
   }
   inputTask.value = '';

   CheckButton.addEventListener('click',function(){
    CheckButton.parentElement.style.textDecoration = 'line-through'
   })
   
   DeleteButton.addEventListener('click',function(e){
    let target = e.target;
    target.parentElement.parentElement.remove();
   })
});


