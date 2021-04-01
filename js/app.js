//Selectors
const userInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');
const filter = document.getElementById('filter');

//Event Listeners
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', editTodo);
filter.addEventListener('keyup', filterTodo);

//Functions
function addTodo(e) {
    e.preventDefault();
    if (userInput.value === '') {
        alert('Add a todo!');
    } else {
        //create a new li
        const newTodo = document.createElement('li');
        newTodo.appendChild(document.createTextNode(userInput.value));
        newTodo.classList.add('todoItem');
        console.log(todoInput);

        //add check button
        const checkBtn = document.createElement('button');
        checkBtn.innerHTML = 'Done';
        checkBtn.className = 'check-btn btn btn-primary';
        newTodo.appendChild(checkBtn);

        //add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.className = 'delete-btn btn btn-warning';
        newTodo.appendChild(deleteBtn);

        //append li to the ul list
        todoList.appendChild(newTodo);
        todoList.style.backgroundColor = '#ffffff';

        //clear input field after adding the list
        userInput.value = '';
    }
}

//delete todo
function editTodo(e) {
    //delete todo
    if (e.target.classList.contains('delete-btn')) {
        const item = e.target.parentElement;
        todoList.removeChild(item);
    }
    //complete todo
    if (e.target.classList.contains('check-btn')) {
        const item = e.target.parentElement;
        item.classList.add('completed');
    }
}

//filter todos
function filterTodo(e) {
    //get the filter input and convert into lower case
    const filterText = e.target.value.toLowerCase();
    const todoItem = todoList.getElementsByClassName('todoItem');
    //convert this list collection into an Array
    Array.from(todoItem).forEach((item) => {
        const itemName = item.firstChild.textContent;
        //match search box text with the item names
        if (itemName.toLowerCase().indexOf(filterText) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}