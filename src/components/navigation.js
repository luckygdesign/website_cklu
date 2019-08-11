import React from 'react'
import { Link } from 'gatsby'

export default () => (
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/news">News</Link></li>
		<li><Link to="/termine">Termine</Link></li>
		<li><Link to="/ueber-uns">Über uns</Link></li>
		<li><Link to="/kontakt">Kontakt</Link></li>
	</ul>
);
