import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import News, { NewsList , ArticleThumb } from '../components/news';
import { MiscButton } from '../components/misc';

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
              <section id="News">

                <h2>Aktuelle Nachrichten</h2>

                <p>Freuen Sie sich über regelmäßige Neuigkeiten und Nachrichten aus Afrika. Wir freuen uns, wenn Sie die Nachrichten auch im Gebet bewegen - als Dank und Bitte. </p>

                {(latest.length > 0) ? (

                  <>

                    <div className="NewsFeed">
                      {latest.map(article => (
                          <ArticleThumb key={article.node.title} node={article} />
                        ))}
                    </div>

                    <MiscButton link="/news" cssclass="button button-primary" text="Alle Nachrichten" />

                    </>

                  ) : (
                    <p className="error-message">Leider haben wir gerade keine Neuigkeiten. Wir bitten um Verständnis und Geduld!</p>
                  )}

              </section>
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

