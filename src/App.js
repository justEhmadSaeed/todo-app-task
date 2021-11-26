import { useState } from 'react';
import './App.css';
import { Todo } from './todo';

function App() {
	const [todoList, setTodoList] = useState([]);
	const [todoText, setTodoText] = useState('');

	const addTodo = (event) => {
		event.preventDefault();

		if (todoText.length === 0) {
			alert('Unable to add empty todo');
		} else {
			const tempList = [...todoList];
			tempList.push({ text: todoText, checked: false });
			setTodoList(tempList);
			setTodoText('');
		}
	};
	const handleInput = (event) => {
		setTodoText(event.target.value);
	};
	const toggleTodo = (index, event) => {
		const tempList = [...todoList];
		tempList[index].checked = event.target.checked;
		setTodoList(tempList);
	};

	const deleteTodo = (index) => {
		const tempList = [...todoList];
		tempList.splice(index, 1);
		setTodoList(tempList);
	};

	console.log(todoList);
	return (
		<div className='App'>
			<form onSubmit={addTodo} id='todo-body'>
				<h1 id='main-heading'>Todofy</h1>
				<div id='input-block'>
					<input
						type='text'
						name='todo-input'
						id='todo-input'
						placeholder='What will you do today?'
						onChange={handleInput}
						value={todoText}
						autoFocus
					/>
					<input type='submit' id='add-todo-btn' value='ADD' />
				</div>
				<div id='todos'>
					{todoList.map((todo, i) => (
						<Todo
							todo={todo}
							key={i}
							index={i}
							toggleTodo={toggleTodo}
							deleteTodo={deleteTodo}
						/>
					))}
				</div>
			</form>
		</div>
	);
}

export default App;
