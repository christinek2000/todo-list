import { observable, makeAutoObservable, action } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { v4 as uuid_v4 } from 'uuid';
import 'array.prototype.move';

export const LOCAL_STORAGE_KEY = "todo";

class TodoStore {
	todoItems = [];
	dragId = 0;

	constructor() {
		makeAutoObservable(this, {
			todoItems: observable,
			addItem: action,
			deleteItem: action,
			setCompletionStatus: action,
			setItem: action,
			dragHandler: action,
			dropHandler: action,
		});

		makePersistable(
			this,
			{
				name: LOCAL_STORAGE_KEY,
				properties: ['todoItems'],
				storage: global.localStorage
			}
		)
	}

	addItem(item) {
		const newItem = {id: uuid_v4(), isComplete: false, description: item};
		this.todoItems.push(newItem);
	}

	deleteItem(id) {
		this.todoItems = this.todoItems.filter((item) => item.id !== id);
	};

	setCompletionStatus = (id, isComplete) => {
		this.todoItems.forEach((item) => {
			if(item.id === id) {
				item.isComplete = isComplete;
			}
		});
	}

	setItem = (id, newDescription) => {
		this.todoItems.forEach((item) => {
			if(item.id === id) {
				item.description = newDescription;
			}
		});
	}

	dragHandler = (id) => {
		this.dragId = id;
	}

	dropHandler = (id) => {
		const dragItem = this.todoItems.find((item) => item.id === this.dragId);
		const dropItem = this.todoItems.find((item) => item.id === id);
		
		this.todoItems.move(this.todoItems.indexOf(dragItem), 
							this.todoItems.indexOf(dropItem));
	}

}

const todoStore = new TodoStore();
export default todoStore;