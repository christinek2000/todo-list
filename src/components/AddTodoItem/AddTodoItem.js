import React from 'react';

import addButton from '../../img/addButton.png'
import './AddTodoItemStyles.css'

class AddTodoItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			description: "",
		};
	}

	addItem = (e) => {
		e.preventDefault();
		if(this.state.description == ""){
			return
		}
		this.props.addHandler(this.state);
	}


	render() {
		return (
			<form className="AddItem" onSubmit={this.addItem} >
				<input
					className="newItem"
					type="text"
					placeholder="..."
					name="newTodoItem"
					value={this.state.description}
					onChange={ (e) => this.setState({ description: e.target.value })}
				/>
				<button className="addButton" type="submit">
					<img className="addImg" src={addButton} alt="add" />
				</button>
			</form>
		);
	}
}

export default AddTodoItem;