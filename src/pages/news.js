import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import News, { NewsList } from '../components/news';

import logo from '../images/logo.png';
import eyecatcher from '../images/schoolchildren.jpg'

import '../styles/news.scss';


var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")"
};

class NewsPage extends Component {
  render() {

    const latest = this.props.data.latest.edges

    return (
      <Layout location={this.props.location} >
          <div id="Content" className="Container">

            <div>
              <News news={latest} />

              <NewsList />
            </div>
          </div> 
      </Layout>
    );
  }
}

export default NewsPage;


export const pageQuery = graphql`
  query newsPageQuery {
    latest: allContentfulNews(sort: {fields: publishDate, order: DESC}, limit: 5) {
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

