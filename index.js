let input = document.querySelector("#new-todo")
let addTodoBtn = document.querySelector("#addTodo");
let todoList = document.querySelector("#todo-list")

let todos = [];

let renderTodos = (todoArray) => {
    //Rendera todo-listan
    todoList.innerHTML = "";
    todoArray.forEach((todo,index) => {
            let todoItem = document.createElement("li");
            todoItem.classList.add("todo-item");
            todoItem.innerText = `#${index} - ${todo}`

            //Delete-btn
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Ta bort";
            deleteBtn.addEventListener("click", () => { deleteTodo(index) });

            todoItem.append(deleteBtn);

            todoList.append(todoItem);
    })
}

let addTodo = () => {
    if(todos.length < 5){
        todos.push(input.value);
        renderTodos(todos);
} else {
    alert("Too many todos.")
}
}

let deleteTodo = (todoIndex) => {
    todos = todos.filter((todo , index) => index !== todoIndex);
    renderTodos(todos);
};

addTodoBtn.addEventListener("click", addTodo);