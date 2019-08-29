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

const GebetInfo = ({ node }) => {
	let gebet = node.node;

	return (
		<div className="eventinfo">
			<div className="eventdate">
	            <span className="eventday">{moment(gebet.startDate).format('D.')}</span>
	            <span className="eventmonth">{moment(gebet.startDate).format('MMM')}</span>
			</div>
			<div className="eventcontent">
	    		<span className="eventtitle">{gebet.title}</span>
	            <span className="eventtime">{`${moment(gebet.startDate).format('D. MMM')} bis ${moment(gebet.endDate).format('D. MMM')}`}</span>
	    	</div>
		</div>	
	)
}


class EventDetails extends React.Component {

	state = {
		event: this.props.event,
		open: false,
	}

	handleClick = () => {
		if (this.state.open === false) {
			this.setState({open: true})
		} else {
			this.setState({open: false})
		}
		console.log('klick');
	}


	render() {

		let { event } = this.state;

		return (

			<div className="event-item">
				<h3>{event.title}</h3>

				<div className="event-item-info">
					<span className="event-item-location icon-pseudo">{event.location}</span>
					<span className="event-item-date icon-pseudo">{moment(event.startDate).format('D. MMMM')}</span>
					<span className="event-item-time icon-pseudo">{`${moment(event.startDate).format('hh:mm')} Uhr`}</span>
				</div>

				{this.state.open ? (
					<div className="event-item-content">
						<span className="event-item-address">Adresse: {event.address}</span>
						<p>{event.description.description}</p>
					</div>

				) : null }

				<div className="event-item-link">
					<a className="" onClick={this.handleClick}>
					{this.state.open ? "weniger lesen" : "mehr lesen"}

					</a>
					
				</div>


				
			</div>

		)
	}	
}


const EventsOverview = ({ events }) => (
  	<section id="EventsOverview" className="sidebar">
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

const GebetsanliegenOverview = ({ anliegen }) => (
  	<section id="GebetsanliegenOverview" className="sidebar">
		<h3>Gebetsanliegen</h3>

		<p>Wir freuen uns, wenn Sie die Veranstaltungen auf der Missionsstation im Gebet begleiten und unterstützen.</p>
		<p>Weitere aktuelle Informationen und Details finden Sie im Bereich "News".</p>

		<div className="gebetsfeed">
			{anliegen.map(anliegen => (
		      <GebetInfo key={anliegen.node.slug} node={anliegen} />
		    ))}
		</div>
	</section>
)

export default EventsOverview;
export { EventDetails , GebetsanliegenOverview };