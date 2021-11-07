import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/annual' activeStyle>
			<img src="./assets/logo192.png" width="30%" style={{backgroundColor:'black'}} alt="Logo"/> 
		</NavLink>
		<NavLink to='/annual' activeStyle>
				Home
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		{/* <NavLink to='/events' activeStyle>
			Events
		</NavLink>

		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink> */}
		<NavLink to='/sign-up' activeStyle>
			{/* Sign Up */}
		</NavLink>
		<NavLink to='/annual' activeStyle>
			1
		</NavLink><NavLink to='/second' activeStyle>
			2
		</NavLink><NavLink to='/thirdpage' activeStyle>
			3
		</NavLink><NavLink to='/fourthpage' activeStyle>
			4
		</NavLink><NavLink to='/fifthpage' activeStyle>
			5
		</NavLink><NavLink to='/sixthpage' activeStyle>
			6
		</NavLink><NavLink to='/seventhpage' activeStyle>
			7
		</NavLink><NavLink to='/eighthpage' activeStyle>
			8
		</NavLink><NavLink to='/ninthpage' activeStyle>
			9
		</NavLink><NavLink to='/tenthpage' activeStyle>
			10
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>LOGIN</NavBtnLink>
		<NavBtnLink to='/register'>SIGN IN</NavBtnLink>

		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
