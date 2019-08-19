import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Events, { EventsList , EventDetails } from '../components/events';

import logo from '../images/logo.png';
import eyecatcher from '../images/schoolchildren.jpg'

import '../styles/events.scss';


var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")"
};

class EventsPage extends Component {
  render() {

    const latest = this.props.data.upcoming.edges

    return (
      <Layout location={this.props.location} >
          <div id="Content" className="Container">

              <h2>Herzliche Einladung</h2>
              <p>Sie möchten Pastor Gabriel Kijjambu persönlich kennen lernen? Im Rahmen von regelmäßigen Vortragsreisen möchten wir Ihnen die Gelegenheit geben, von der Arbeit aus erster Hand zu erfahren.</p>

              <section id="UpcomingEvents">

                {latest.map(event => (
                  <EventDetails event={event.node} />
                ))}

              </section>

          </div> 
      </Layout>
    );
  }
}

export default EventsPage;


export const pageQuery = graphql`
  query eventsPageQuery {
    upcoming: allContentfulEvents(sort: {fields: startDate, order: ASC}, limit: 10) {
      edges {
        node {
          title
          slug
          startDate
          location
        }
      }
    }
  }
`

