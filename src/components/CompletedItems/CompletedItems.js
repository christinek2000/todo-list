import './CompletedItems.css'
import revert from '../../img/revert.png'
import { useTodoStore } from '../Store/Context';
import { observer } from 'mobx-react'

function CompletedItems() {
	const todoStore = useTodoStore();
	const renderItems = todoStore.todoItems.map((item) => {
		if(item.isComplete) {
			return (
				<div className='todoItem' key={item.id}>
					<div className='itemDescription'>
						{item.description}
					</div>
					<button 
						className='reverseButton' 
						onClick={() => todoStore.setCompletionStatus(item.id, false)}
					>
						<img className='revertImg' src={revert} alt='revertImage' />
					</button>
				</div>
			)
		}
	});

	return(
		<div className='CompletedList'>
			{renderItems}
		</div>
	);
}

export default observer(CompletedItems);