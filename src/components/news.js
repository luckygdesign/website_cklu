import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { ReadMoreButton } from './misc'

const ArticleThumb = ({ node }) => (
	<article>
	    <Img alt={node.node.heroImage.title} fixed={node.node.heroImage.fixed} />
	    <content>
	    	<h4>{node.node.title}</h4>
	   		<p>{node.node.summary.summary}</p>
	    	<ReadMoreButton link={`/news/${node.node.slug}`} />
    	</content>
	</article>
 )

const NewsList = ({news}) => (
		<ul className="newslist">
			{news.map(article => (
					<li key={article.node.slug}>
						<Link to={`/news/${article.node.slug}`}>
							<span>{article.node.title}</span>
						</Link>
					</li>
				))}
		</ul>
	)

const NewsOverview = ({ news }) => (
 	<section id="News">

		<h2>Aktuelle Nachrichten</h2>

		<p>Freuen Sie sich über regelmäßige Neuigkeiten und Nachrichten aus Afrika. Wir freuen uns, wenn Sie die Nachrichten auch im Gebet bewegen - als Dank und Bitte. </p>

		<div className="NewsFeed">
			{news.map(article => (
		      <ArticleThumb key={article.node.title} node={article} />
		    ))}
		</div>

	</section>
)

export default NewsOverview;
export { NewsList };