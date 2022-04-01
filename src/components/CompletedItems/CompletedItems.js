import './CompletedItems.css'

function CompletedItems(props) {
	console.log(props);
	const renderItems = props.items.map((item) => {
		if(item.isComplete) return (
			<div className="todoItem">
				<div className="itemDescription">
					{item.description}
				</div>
				<button className="reverseButton" onClick={() => props.revertHandler(item.id)}>R</button>
			</div>
		)
	});

	return(
		<div className="CompletedList">
			{renderItems}
			Completed List
		</div>
	);
}

export default CompletedItems;