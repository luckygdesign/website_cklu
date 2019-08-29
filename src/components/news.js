import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql, Link } from 'gatsby';
import moment from 'moment';

import { ReadMoreButton, MiscButton } from './misc'

const ArticleThumb = ({ node }) => (
	<article>
	    <Img alt={node.node.heroImage.title} fixed={node.node.heroImage.fixed} />
	    <content>
	    	<h4>{node.node.title}</h4>
	   		<p>
	   			{node.node.summary.summary}
	   			<ReadMoreButton link={`/news/${node.node.slug}`} />
	   		</p>
    	</content>
	</article>
 )

const NewsList = () => (

	 <StaticQuery
	    query={graphql`
	      query moduleNewsList {
	        allContentfulNews(sort: {fields: publishDate, order: DESC}) {
		      edges {
		        node {
		          title
		          slug
		          publishDate
		        }
		      }
		    }
	      }
	    `}
	    render={data => (
	  		<div id="NewsList" className="sidebar">
                <h3>Alle News</h3>
				<ul className="news-list">
					{data.allContentfulNews.edges.map(article => (
							<li key={article.node.slug}>
								<Link to={`/news/${article.node.slug}`}>
									<span className="icon-pseudo title">{article.node.title}</span>
									<span className="icon-pseudo publishDate">{moment(article.node.publishDate).format('MMM YYYY')}</span>
								</Link>
							</li>
						))}
				</ul>
			</div>
		)}
	/>
)

const NewsOverview = ({ news }) => (
 	<section id="NewsOverview">

		<h2>Aktuelle Nachrichten</h2>

		<p>Freuen Sie sich über regelmäßige Neuigkeiten und Nachrichten aus Afrika. Wir freuen uns, wenn Sie die Nachrichten auch im Gebet bewegen - als Dank und Bitte. </p>

		<div className="NewsFeed">
			{news.map(article => (
		      <ArticleThumb key={article.node.title} node={article} />
		    ))}
		</div>

		<MiscButton link="/news" cssclass="button button-primary" text="Alle Nachrichten" />

	</section>
)

export default NewsOverview;
export { NewsList , ArticleThumb };