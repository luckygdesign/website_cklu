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


const EventsList = () => (
	<h2>Events List</h2>
)


const EventDetails = ({ event }) => {

	return (

		<div className="event-item">
			<h3>{event.title}</h3>

			<div className="event-item-info">
				<span className="event-item-location icon-pseudo">{event.location}</span>
				<span className="event-item-date icon-pseudo">{moment(event.startDate).format('D. MMMM')}</span>
				<span className="event-item-time icon-pseudo">{`${moment(event.startDate).format('hh:mm')} Uhr`}</span>
			</div>

			<div className="event-item-link">
				<span>mehr Infos</span>
			</div>
		</div>

	)

}


const EventsOverview = ({ events }) => (
  	<section id="Events" className="content-sidebar">
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

export default EventsOverview;
export { EventsList , EventDetails };