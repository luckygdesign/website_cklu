import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import UeberUns from '../components/ueber-uns';
import Projekte from '../components/projects';
import News from '../components/news';
import Events from '../components/events';
import Spenden from '../components/spenden';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

import '../styles/home.scss';

library.add(faTools, faHandPointRight)


class IndexPage extends Component {
  render() {

    const projects = this.props.data.allContentfulProject.edges;
    const news = this.props.data.allContentfulNews.edges;
    const events = this.props.data.allContentfulEvents.edges;

    return (
      <div id="LandingPage"className="App">
        
        <Header />

        <UeberUns />

        <Projekte projects={projects} />

        <div id="Content" className="Container">
          <div>
            <News news={news} />
            <Events events={events} />
            <Spenden />
          </div>
        </div>

        
        

      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query indexPageQuery {
    allContentfulProject {
      edges {
        node {
          id,
          title,
          heroImage {
            title
          }
        }
      }
    }
    allContentfulNews(sort: {fields: publishDate, order: DESC}, limit: 5) {
      edges {
        node {
          title
          slug
          publishDate
          heroImage {
            fixed(width: 300) {
              width
              height
              src
              srcSet
            }
            title
          }
          summary {
            summary
          }
        }
      }
    }
    allContentfulEvents(sort: {fields: startDate, order: ASC}, limit: 10) {
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