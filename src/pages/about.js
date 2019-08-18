import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import { ProjectDetails } from '../components/projects'

import family from '../images/family.jpg';

import '../styles/news.scss';


class Projects extends Component {
  render() {

    const projects = this.props.data.projects.edges

    return (
      <Layout location={this.props.location} >
          <div id="Content" className="Container">

            <section id="AboutHeader">

              <h2>Wer wir sind</h2>
              <div className="text">
                <p>Hier sehen Sie einen kurzen Überblick über eine kleine, aber schnell wachsende Missionsstation mitten im Busch von Uganda:</p>
                <img src={family} alt='Gabriel und Deborah Kijjambu mit Priscilla' />
                <p>Gabriel und Deborah Kijjambu mit Priscilla</p>
                <p>Sie wurde von dem ugandischen Ehepaar Gabriel und Deborah Kijjambu gegründet.</p>
                <p>Diese Missionsstation liegt ca. 100 km nördlich der ugandischen Hauptstadt Kampala, in Luwero.
                Uganda liegt im Herzen Afrikas. Vor allem die ländlichen Regionen sind von großer Armut und Krankheit betroffen. 
                In Luwero hatten unter Idi Amin und seinem Nachfolger die schrecklichen Massaker an der ugandischen Bevölkerung stattgefunden und genau an diesem Platz wollte Pastor Gabriel für die schwächsten und ärmsten Ugander, besonders für die vielen Waisenkinder, Flüchtlingskinder und Aidswaisen eine Station aufbauen, die diesen Kindern neu Hoffnung und Lebenschancen gibt.</p>
                <p>Inzwischen sind hier eine Kirche, Schule Farm, Waisenhaus und eine kleine Klinik entstanden!</p>
              </div>
            </section>

            <section id="AboutProjects">
              <h2>Unsere Projekte</h2>
              {projects.map(project => (
                <ProjectDetails project={project.node} key={project.node.slug} />
              ))}
            </section>
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
  }
`

