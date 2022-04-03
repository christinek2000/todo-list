import './CompletedItems.css'
import revert from '../../img/revert.png'

function CompletedItems(props) {
	const renderItems = props.items.map((item) => {
		if(item.isComplete)
			return (
				<div className='todoItem'>
					<div className='itemDescription'>
						{item.description}
					</div>
					<button 
						className='reverseButton' 
						onClick={() => props.revertHandler(item.id)}
					>
						<img className='revertImg' src={revert} alt='revertImage' />
					</button>
				</div>
			)
		return <></>
	});

	return(
		<div className='CompletedList'>
			{renderItems}
		</div>
	);
}

export default CompletedItems;