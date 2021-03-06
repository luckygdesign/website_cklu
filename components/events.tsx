import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Mailto from 'react-protected-mailto';
import 'moment/locale/de'

// import modules
import { IEventsEntry } from '../interfaces/contentDelivery';
import { MiscButton } from './Misc';

moment.locale('de');

const EventInfo = ({ event }) => {

	// TODO - activate time filter

	// if (moment().isAfter(moment(event.startDate))) {
	// 	return null;
	// } 


	return (
		<Link href={`/events#${event.slug}`}>
			<a>
				<div className="eventinfo">
					<div className="eventdate">
						<span className="eventday">{moment(event.startDate).format('D.')}</span>
						<span className="eventmonth">{moment(event.startDate).format('MMM')}</span>
					</div>
					<div className="eventcontent">
						<span className="eventtitle">{event.title}</span>
						<span className="eventlocation">{event.location}</span>
						<span className="eventtime">{`${moment(event.startDate).format('HH:mm')} Uhr`}</span>
					</div>
				</div>
			</a>
		</Link>
	)
}

// EventDetails
// TODO : remove open/close -> refactor to variable, not class
type IProps = {
	event: IEventsEntry,
}

type IState = {
	event: IEventsEntry,
	open: boolean
}

class EventDetails extends React.Component<IProps, IState> {

	state = {
		event: this.props.event,
		open: true,
	}

	handleClick = () => {
		if (this.state.open === false) {
			this.setState({open: true})
		} else {
			this.setState({open: false})
		}
	}


	render() {

		let { event } = this.state;
		
		// if (moment().isAfter(moment(event.startDate))) {
		// 	return null;
		// } 

		return (

			<div className="event-item" id={event.slug}>
				<h3>{event.title}</h3>

				<div className="event-item-info">
					<span className="event-item-location icon-pseudo">{event.location}</span>
					<span className="event-item-date icon-pseudo">{moment(event.startDate).format('D. MMMM')}</span>
					<span className="event-item-time icon-pseudo">{`${moment(event.startDate).format('HH:mm')} Uhr`}</span>
				</div>

				{this.state.open ? (
					<div className="event-item-content">
						<p className="event-item-address">Anfahrt: {event.address}</p>


						{ (event.contactName && (event.contactEmail || event.contactPhone)) ? (
							
							<p className="event-item-contactname">Kontakt: {event.contactName} (
							
							{ event.contactPhone ? (
								<span className="event-item-contactphone"> Telefon: <Mailto tel={event.contactPhone} /> </span>
							) : null }
							
							{ event.contactEmail ? (
								<span className="event-item-contactemail"> E-Mail: <Mailto email={event.contactEmail} /> </span>
							) : null }

							)</p>

						) : null }

						{ event.description ? (
							<p>{event.description}</p>
						) : null }
					</div>

				) : null } 


				
			</div>

		)
	}	
}


const EventsOverview = ({ events }) => (
  	<section id="EventsOverview" className="sidebar">
		<h3>Termine</h3>

		<p>Sie möchten Bischof Gabriel Kijjambu persönlich kennen lernen? Im Rahmen von regelmäßigen Vortragsreisen möchten wir Ihnen die Gelegenheit geben, von der Arbeit aus erster Hand zu erfahren.</p>
		<p>Weitere Informationen erhalten Sie durch Klicken auf einen Termin.</p>

		{events ? (
			<div className="eventsfeed">
				{events.map(event => (
			      <EventInfo key={event.slug} event={event} />
			    ))}
			</div>
		) : null }

		<MiscButton link="/events" cssclass="button button-primary" text="Alle Termine" />
	</section>
)

export default EventsOverview;
export { EventDetails };