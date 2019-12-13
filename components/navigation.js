import React from 'react'
import Link from 'next/link'

export default () => (
	<ul>
		<li><Link href="/">Home</Link></li>
		<li><Link href="/news">News</Link></li>
		<li><Link href="/events">Veranstaltungen</Link></li>
		<li><Link href="/about">Über uns</Link></li>
		<li><Link href="/contact">Kontakt</Link></li>
	</ul>
);
