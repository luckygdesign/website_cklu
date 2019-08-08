import React from 'react';

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const options = {};

const ArticleThumb = ({ node }) => { 

	const content = documentToReactComponents(node.node.content.json, options)

	return(
		<article>
		    <h4>{node.node.title}</h4>
		    <div>{content}</div>
		</article>
  )
  
}

export default ({ news }) => (
  <section id="News">
		<div className="Container">

			<h2>Unsere Projekte</h2>

			<div className="projectoverview">
				{news.map(article => (
			      <ArticleThumb key={article.node.title} node={article} />
			    ))}
			</div>

		</div>
	</section>
)