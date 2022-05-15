import React, { useState } from 'react';
import { useTodoStore } from '../Store/Context';
import { observer } from 'mobx-react'

import addButton from '../../img/addButton.png'
import './AddTodoItemStyles.css'

function AddTodoItem() {
	const [description, setDescription] = useState('');
	const todoStore = useTodoStore();

	const addItems = (e) => {
		e.preventDefault();
		if(description === ''){
			return
		}
		todoStore.addItem(description);
		setDescription('');
	}

	return (
		<form className='AddItem' onSubmit={addItems} >
			<input
				className='newItem'
				type='text'
				name='newTodoItem'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button className='addButton' type='submit'>
				<img className='addImg' src={addButton} alt='add' />
			</button>
		</form>
	);
}

export default observer(AddTodoItem);