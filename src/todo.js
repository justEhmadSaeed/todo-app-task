import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
export const Todo = ({ todo, index, toggleTodo, deleteTodo }) => {
	return (
		<div className='todo'>
			<input
				type='checkbox'
				name='todo'
				checked={todo.checked}
				onChange={(e) => toggleTodo(index, e)}
			/>
			<h4
				className={`todo-text ${todo.checked ? 'line-through' : ''}`}
			>
				{todo.text}
			</h4>
			<div className='delete-icon' onClick={() => deleteTodo(index)}>
				<FontAwesomeIcon icon={faTrash} />
			</div>
		</div>
	);
};
