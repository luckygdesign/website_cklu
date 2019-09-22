import React from 'react'
import { Link } from 'gatsby'

export default () => (
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/news">News</Link></li>
		<li><Link to="/events">Veranstaltungen</Link></li>
		<li><Link to="/about">Über uns</Link></li>
		<li><Link to="/contact">Kontakt</Link></li>
	</ul>
);
