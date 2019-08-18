import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Events, { EventsList } from '../components/events';

import logo from '../images/logo.png';
import eyecatcher from '../images/schoolchildren.jpg'

import '../styles/news.scss';


var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")"
};

class EventsPage extends Component {
  render() {

    const latest = this.props.data.upcoming.edges

    return (
      <Layout location={this.props.location} >
          <div id="Content" className="Container">

            <div>
              <Events events={latest} />

              <EventsList />
            </div>
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

