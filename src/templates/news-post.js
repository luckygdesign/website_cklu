import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import moment from 'moment'

import Layout from '../components/layout'
import { NewsList } from '../components/news'

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import '../styles/news.scss'


library.add(faAngleLeft)

const options = {};

class NewsPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulNews')

    const next = get(this.props, 'pageContext.next', false)
    const prev = get(this.props, 'pageContext.prev',false)
   	const content = documentToReactComponents(post.content.json, options)


    return (
    	<Layout location={this.props.location} >

        	<div id="Content" className="Container">
            <div>
              <article className="news-article">
                <header>

    	        	  <h2 className="news-title">{post.title}</h2>
                  <span className="icon-pseudo news-publishDate">{moment(post.publishDate).format('MMM YYYY')}</span>

                
                  <div className="news-nav">
                    {prev ? (
                      <Link className="icon-pseudo news-nav-prev"to={`/news/${prev.slug}`}>{prev.title}</Link>
                    ) : null}

                    {next ? (
                      <Link className="icon-pseudo news-nav-next" to={`/news/${next.slug}`}>{next.title}</Link>
                    ) : null}
                  </div>


                </header>

                <content>
                  <Img className="news-img" fluid={post.heroImage.fluid} />
    	        	  {content}
                </content>

              </article>

              <NewsList slug={post.slug}/>

              </div>


        	</div>
        </Layout>
    )
  }
}

export default NewsPostTemplate;

export const pageQuery = graphql`
  query NewsPostBySlug($slug: String!) {
    contentfulNews(slug: { eq: $slug }) {
      title
      publishDate
      content {
        json
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
