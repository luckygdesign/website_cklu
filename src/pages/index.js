import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import { AboutSection } from '../components/projects';
import News from '../components/news';
import Events, {GebetsanliegenOverview} from '../components/events';
import Spenden from '../components/spenden';
import { ParseJSON } from '../components/misc';
import Footer from '../components/footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faTractor } from  '@fortawesome/free-solid-svg-icons';

import '../styles/home.scss';

library.add(faTools, faHandPointRight, faTractor)


class IndexPage extends Component {
  render() {

    const projects = this.props.data.allContentfulProject.edges;
    const news = this.props.data.allContentfulNews.edges;
    const events = this.props.data.allContentfulEvents.edges;
    const gebetsanliegen = this.props.data.allContentfulGebetsanliegen.edges;
    const pageContent = this.props.data.page;

    return (
      <div id="LandingPage"className="App">
        
        <Header />

        <section id="About">
          <div className="Container">
            
            <h1>{pageContent.title}</h1>

            {pageContent.content ? (
              <ParseJSON textjson={pageContent.content} />
            ) : null} 

          </div> 
          <div className="Container">
            <h3>Werden Sie Teil unserer Arbeit!</h3>
            <div className="About-GetInTouch">
              <div>
                <span className="icon fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-praying-hands fa-inverse fa-stack-1x" />
                </span>
                <span className="content">
                  <span className="heading">Beten</span>
                  <span>Sie können uns durch Ihr Gebet unterstützen</span>
                </span>
              </div>
              <div>
                <span className="icon fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-hands-helping fa-inverse fa-stack-1x" />
                </span>
                <span className="content">
                  <span className="heading">Patenschaften</span>
                  <span>Übernehmen Sie eine Patenschaft</span>
                </span>
              </div>
              <div>
                <span className="icon fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-donate fa-inverse fa-stack-1x" />
                </span>
                <span className="content">
                  <span className="heading">Spenden</span>
                  <span>Unterstützen Sie uns durch Ihre Spend</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <AboutSection pageContent={pageContent} projects={projects} />

        <div id="Content" className="Container">
          <div>
            <News news={news} />
            <Events events={events} />
            <GebetsanliegenOverview anliegen={gebetsanliegen} />
            <Spenden />
          </div>
        </div>

        <Footer />

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
          id
          title
          slug
          heroImage {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
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
    page: contentfulPage(contentful_id: {eq: "41DF68TjRVlA6GixnCpcqg"}) {
      title
      content {
        json
      }
    }
  }
`