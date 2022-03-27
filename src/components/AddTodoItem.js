import React from 'react';
import { Box } from '@material-ui/core'

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
			<div className="AddItem" >
				<form onSubmit={this.addItem} >
					<input 
						type="text"
						placeholder="..."
						name="newTodoItem"
						value={this.state.description}
						onChange={ (e) => this.setState({ description: e.target.value })}
					/>
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default AddTodoItem;