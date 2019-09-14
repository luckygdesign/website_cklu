import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { ParseJSON } from '../components/misc';


class Projects extends Component {

  render() {

    const pageContent = this.props.data.page;

    return (
      <Layout location={this.props.location} >
          <div id="Content" className="Container">

            <section id="Legal">

              <h1>{pageContent.title}</h1>
              
              {pageContent.content ? (
                <ParseJSON textjson={pageContent.content} />
              ) : null}
              

            </section>
          </div> 
      </Layout>
    );
  }
}

export default Projects;


export const pageQuery = graphql`
  query impressumPageQuery {
    page: contentfulPage(contentful_id: {eq: "73MfkJzLwvzK4RNJq8NTkE"}) {
      title
      content {
        json
      }
    }
  }
`

