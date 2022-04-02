import { NavLink } from 'react-router-dom'
import { Box } from '@material-ui/core'

import './HeaderStyles.css'
import checkMark from '../../img/checkMark.png'
import pencil from '../../img/pencil.png'

function Header() {
	return(
		<Box 
			className='Header'
			display='flex' 
			sx={{
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<h2>TODO</h2>
			<nav>
				<ul className='navigation'>
					<li>
						<img className='icon' src={checkMark} alt="check mark" />
						<NavLink className={({ isActive }) => isActive ? 'activeLink' : 'navLink'} to='/todoList'>
							TODO LIST
						</NavLink>
					</li>
					<li>
						<img className='icon' src={pencil} alt="check mark" />
						<NavLink className={({ isActive }) => isActive ? 'activeLink' : 'navLink'} to='/completedList'>
							COMPLETED LIST
						</NavLink>
					</li>
				</ul>
			</nav>
		</Box>
	)
}

export default Header;