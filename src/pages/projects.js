import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Navigation from '../components/navigation'
import Projekte from '../components/projects'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'


import logo from '../images/logo.png';
import eyecatcher from '../images/schoolchildren.jpg'

import '../styles/projects.scss';

library.add(faTools, faHandPointRight)


var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")"
};

class ProjectsPage extends Component {
  render() {

    const { edges } = this.props.data.allContentfulProject

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

        <Projekte projects={edges}/>
        
        <footer id="Footer">
          <div className="Container">
            <span>Christliches Kinderhilfswerk Luwero - Uganda e.V.</span>
          </div>
        </footer>

      </div>
    );
  }
}

export default ProjectsPage;


export const pageQuery = graphql`
  query projectsPageQuery {
    allContentfulProject {
      edges {
        node {
          id
          title
          heroImage {
            title
          }
        }
      }
    }
  }
`