import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Layout from '../components/layout'

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const options = {};

class NewsPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulNews')
   	const content = documentToReactComponents(post.content.json, options)


    return (
    	<Layout location={this.props.location} >

        	<div className="Container">
	        	<h2>{post.title}</h2>
	        	<div>{content}</div>
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
      content {
      	json
      }
    }
  }
`
