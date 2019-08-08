import React from 'react';
import Img from 'gatsby-image';

const EventInfo = ({ node }) => (
	<div>
    	<h4>{node.node.title}</h4>
	</div>
 )

export default ({ events }) => (
  	<section id="Events">
		<h2>Termine</h2>

		<p>Sie möchten Pastor Gabriel Kijjambu persönlich kennen lernen? Im Rahmen von regelmäßigen Vortragsreisen möchten wir Ihnen die Gelegenheit geben, von der Arbeit aus erster Hand zu erfahren.</p>
		<p>Weitere Informationen erhalten Sie durch Klicken auf einen Termin.</p>

		<div className="EventsFeed">
			{events.map(event => (
		      <EventInfo key={event.node.title} node={event} />
		    ))}
		</div>
	</section>
)