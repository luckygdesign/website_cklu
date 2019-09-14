import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Events, { EventsList , EventDetails , GebetsanliegenOverview } from '../components/events';
import { ParseJSON } from '../components/misc';

import logo from '../images/logo.png';
import eyecatcher from '../images/schoolchildren.jpg'

import '../styles/events.scss';


var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")"
};

class EventsPage extends Component {
  render() {

    const latest = this.props.data.upcoming.edges;
    const gebetsanliegen = this.props.data.allContentfulGebetsanliegen.edges;
    const pageContent = this.props.data.page;

    return (
      <Layout location={this.props.location} >
          <div id="Content" className="Container">
            <div>
              <section id="Events">

                <h1>{pageContent.title}</h1>
                
                {pageContent.content ? (
                  <ParseJSON textjson={pageContent.content} />
                ) : null}

                {latest ? (
                  <div id="UpcomingEvents">
                    {latest.map(event => (
                      <EventDetails event={event.node} key={event.node.slug} />
                    ))}
                  </div>

                ) : null}
              
                
              </section>
              <GebetsanliegenOverview anliegen={gebetsanliegen} />
            </div>

          </div> 
      </Layout>
    );
  }
}

export default EventsPage;


export const pageQuery = graphql`
  query eventsPageQuery {
    upcoming: allContentfulEvents(sort: {fields: startDate, order: ASC}) {
      edges {
        node {
          title
          slug
          startDate
          location
          description {
            description
          }
          address
        }
      }
    }
    allContentfulGebetsanliegen {
      edges {
        node {
          endDate
          slug
          title
          startDate
          description {
            description
          }
        }
      }
    }
    page: contentfulPage(contentful_id: {eq: "Ps1Mll3HZN00fKtuafmuW"}) {
      title
      content {
        json
      }
    }
  }
`

