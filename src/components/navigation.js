import React from 'react'
import { Link } from 'gatsby'

export default () => (
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/news">News</Link></li>
		<li><Link to="/events">Events</Link></li>
		<li><Link to="/about">About</Link></li>
		<li><Link to="/kontakt">Kontakt</Link></li>
	</ul>
);
