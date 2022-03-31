import './CompletedItems.css'

function CompletedItems(props) {
	console.log(props);
	const renderItems = props.items.map((item) => {
		if(item.isComplete) return (
			<div className="TodoItem">
				<button onClick={() => props.revertHandler(item.id)}>R</button>
				{item.description}
			</div>
		)
	});

	return(
		<div className="CompletedItems">
			Completed Items
			<ul>
				{renderItems}
			</ul>
		</div>
	);
}

export default CompletedItems;