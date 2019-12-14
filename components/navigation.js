import React from 'react'
import Link from 'next/link'

export default () => (
	<ul>
		<li><Link href="/"><a>Home</a></Link></li>
		<li><Link href="/news"><a>News</a></Link></li>
		<li><Link href="/events"><a>Veranstaltungen</a></Link></li>
		<li><Link href="/about"><a>Über uns</a></Link></li>
		<li><Link href="/contact"><a>Kontakt</a></Link></li>
	</ul>
);
