const todoInputField = document.getElementById('todo-input');
const todos = document.getElementById('todos');
const form = document.getElementById('todo-body');
var currentId = 0;
form.addEventListener('submit', (e) => {
	e.preventDefault();
});
function addTodo(e) {
	if (todoInputField.value.length === 0) {
		alert('Unable to add empty todo');
	} else {
		todos.innerHTML += `
        <div class="todo" id="todo-element-${currentId}" >
            <input type="checkbox" name="todo" onchange="toggleTodo('todo-element-${currentId}')">
            <h4 class="todo-text">${todoInputField.value}</h4>
            <div class="delete-icon" onclick="deleteTask('todo-element-${currentId}')">
                <i class="fas fa-trash"></i>
            </div>
        </div>`;
		currentId++;
		todoInputField.value = '';
	}
}
function deleteTask(id) {
	document.getElementById(id).remove();
}

function toggleTodo(id) {
	const todo = document.getElementById(id);
	// todo.children.toArray().forEach((e) => console.log(e));
	// console.log(todo.children[0]);
	if (todo.children[0].checked) {
		todo.children[1].style.textDecoration = 'line-through';
	} else {
		todo.children[1].style.textDecoration = 'none';
	}
}
