import React from 'react';

import Img from 'gatsby-image';
import moment from 'moment';
import { Link } from 'gatsby';

import { MiscButton } from './misc';

const EventInfo = ({ node }) => {
	let event = node.node;

	return (
		<Link to={`/events/${event.slug}`}>
			<div className="eventinfo">
				<div className="eventdate">
		            <span className="eventday">{moment(event.startDate).format('D.')}</span>
		            <span className="eventmonth">{moment(event.startDate).format('MMM')}</span>
				</div>
				<div className="eventcontent">
		    		<span className="eventtitle">{event.title}</span>
		    		<span className="eventlocation">{event.location}</span>
		            <span className="eventtime">{`${moment(event.startDate).format('hh:mm')} Uhr`}</span>
		    	</div>
			</div>
		</Link>
	)
}

export default ({ events }) => (
  	<section id="Events">
		<h3>Termine</h3>

		<p>Sie möchten Pastor Gabriel Kijjambu persönlich kennen lernen? Im Rahmen von regelmäßigen Vortragsreisen möchten wir Ihnen die Gelegenheit geben, von der Arbeit aus erster Hand zu erfahren.</p>
		<p>Weitere Informationen erhalten Sie durch Klicken auf einen Termin.</p>

		<div className="eventsfeed">
			{events.map(event => (
		      <EventInfo key={event.node.slug} node={event} />
		    ))}
		</div>

		<MiscButton link="/events" cssclass="button button-primary" text="Alle Termine" />
	</section>
)