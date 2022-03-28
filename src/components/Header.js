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
				justifyContent: 'space-around'
			}}
		>
			<h2>Tasks</h2>
			<nav className="Navigation">
				<ui>
					<li><NavLink to="/" className="navLink">Todo List</NavLink></li>
					<li><NavLink to="/completedList" className="navLink">Completed List</NavLink></li>
				</ui>
			</nav>
			
		</Box>		
	)
}

export default Header;