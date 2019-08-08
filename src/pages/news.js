import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Navigation from '../components/navigation'
import News from '../components/news'

import logo from '../images/logo.png';
import eyecatcher from '../images/schoolchildren.jpg'

import '../styles/news.scss';


var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")"
};

class NewsPage extends Component {
  render() {

    const { edges } = this.props.data.allContentfulNews

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

        
        <footer id="Footer">
          <div className="Container">
            <span>Christliches Kinderhilfswerk Luwero - Uganda e.V.</span>
          </div>
        </footer>

      </div>
    );
  }
}

export default NewsPage;


export const pageQuery = graphql`
  query newsPageQuery {
    allContentfulNews {
      edges {
        node {
          title
          slug
          publishDate
          heroImage {
            fixed(width: 240) {
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

