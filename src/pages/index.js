import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Navigation from '../components/navigation'
import UeberUns from '../components/ueber-uns'
import Projekte from '../components/projects'
import News from '../components/news'



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'


import logo from '../images/logo.png';
import eyecatcher from '../images/schoolchildren.jpg'

import '../styles/home.scss';

library.add(faTools, faHandPointRight)


var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")"
};

class IndexPage extends Component {
  render() {

    const projects = this.props.data.allContentfulProject.edges;
    const news = this.props.data.allContentfulNews.edges;

    return (
      <div className="App">
        <header className="HeroImage" style={eyecatcherBackground}>
          <div className="Container">
            <div className="LogoImage" >
              <img alt="Logo Christliches Kinderhilfswerk Luwero - Uganda e.V." src={logo} ></img>
            </div>
            <div id="Navigation">
              <Navigation />
            </div>
          </div>
        </header>

        <UeberUns />

        <Projekte projects={projects} />

        <News news={news} />

        
        <footer id="Footer">
          <div className="Container">
            <span>Christliches Kinderhilfswerk Luwero - Uganda e.V.</span>
          </div>
        </footer>

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
    allContentfulNews {
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
  }
`