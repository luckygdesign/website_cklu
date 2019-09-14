import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import { ProjectDetails , ProjectList , ProjectThumb} from '../components/projects';
import { ParseJSON } from '../components/misc';


import family from '../images/family.jpg';

import '../styles/about.scss';


class Projects extends Component {

  state = {
    currentHash: this.props.location.hash.substr(1).toLowerCase()
  }


  // handle Click on project item - load new item and change url without refresh and scrolling
  handleClick = (e) => {
    e.preventDefault();
    const newUrl = new URL(e.target);
    const newHash = newUrl.hash.substr(1).toLowerCase();
    this.setState({currentHash: newHash});
    history.pushState(null, null, '#'+newHash);
  }

  render() {

    const projects = this.props.data.projects.edges;
    const pageContent = this.props.data.page;
    let currentProject = projects.filter(project => {
      return project.node.slug.toLowerCase() === this.state.currentHash
    })[0];

    return (
      <Layout location={this.props.location} >
        <div id="Content" className="Container">

          <section id="AboutHeader">

            <h2>{pageContent.title}</h2>
            
            {pageContent.content ? (
              <ParseJSON textjson={pageContent.content} />
            ) : null}
            

          </section>

          {(projects.length > 0) ? (

            <section id="AboutProjects">

              <h2>Unsere Projekte</h2>

              <ul className="projects-list">
                {projects.map(project => (
                  <ProjectList project={project.node} key={project.node.slug} handleClick={this.handleClick}/>
                ))}
              </ul>

              { currentProject ? (
                <ProjectDetails project={currentProject.node}  />
              ) : null }
    
            </section>

          ) : null }

        </div>
      </Layout>
    );
  }
}

export default Projects;


export const pageQuery = graphql`
  query aboutPageQuery {
    projects: allContentfulProject {
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
          description {
            json
          }
        }
      }
    }
    page: contentfulPage(contentful_id: {eq: "4sNLUWA5p7arg5gVUfdXfY"}) {
      title
      content {
        json
      }
    }
  }
`

