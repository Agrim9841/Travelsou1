import React, {Components} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbody">
				<Link to='/' className="logo">TravelSoul</Link>
				<div className="navitems">
					<span className="navitem">LogIn</span>
					<span className="navitem">Signup</span>
					<Link to='/packages' className="navitem">Packages</Link>
					<Link to='/contactus' className="navitem">Contact Us</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;