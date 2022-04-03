import './StartNowStyles.css'

import { useNavigate } from 'react-router-dom';

function StartNow() {
	const navigate = useNavigate();

	const todoListPage = () => {
		navigate('/todoList')
	};

	return(
		<div className='StartNow'>
			<h2>TODO LIST</h2>
			<button className='startButton' type='button' onClick={todoListPage}>
				Start Now
			</button>
		</div>
	)
}

export default StartNow;