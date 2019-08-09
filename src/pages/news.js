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

    const news = this.props.data.allContentfulNews.edges

    return (
      <Layout location={this.props.location} >
          <div id="Content" className="Container">

            <div>
              <News news={news} />

              <div className="sidebar">
                <h3>Alle News</h3>
                <NewsList news={news} />
              </div>
            </div>
          </div> 
      </Layout>
    );
  }
}

export default NewsPage;


export const pageQuery = graphql`
  query newsPageQuery {
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
  }
`

