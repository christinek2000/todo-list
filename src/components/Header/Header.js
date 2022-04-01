import { NavLink } from 'react-router-dom'
import { Box } from '@material-ui/core'

import "./HeaderStyles.css"

function Header() {
	return(
		<Box 
			className="Header" 
			display="flex" 
			sx={{
				alignItems: 'center',
				justifyContent: 'space-around',
			}}
		>
			<h2>TODO</h2>
			<nav>
				<ul className="navigation">
					<li><NavLink to="/todoList" className="navLink">Todo List</NavLink></li>
					<li><NavLink to="/completedList" className="navLink">Completed List</NavLink></li>
				</ul>
			</nav>
			
		</Box>		
	)
}

export default Header;