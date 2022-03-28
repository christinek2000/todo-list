
function CompletedItems(props) {

	const renderItems = props.completedItems.map((item) => {
		return (<li>{item.description}</li>)
	});

	return(
		<div className="completedItems">
			Completed Items
			<ul>
				{renderItems}
			</ul>
		</div>
	);
}

export default CompletedItems;