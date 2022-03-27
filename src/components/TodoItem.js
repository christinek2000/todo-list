import { useState } from 'react';

function TodoItem() {
	const [item, setItem] = useState([]);

	return(
		<div className="todoItem" >
			Todo Item
		</div>
	);
}

export default TodoItem;