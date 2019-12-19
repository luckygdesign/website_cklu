import React from 'react';
import Link from 'next/link';
import moment from 'moment';

import { ReadMoreButton, MiscButton } from './Misc'

import { INewsEntry } from '../interfaces/contentDelivery'
import Contentful, { ContentfulContext } from './contentDelivery';

const ArticleThumb = ({ article }) => (
	<article>
	    <div>
	    	<h4>{article.title}</h4>
	   		<p>
	   			{article.summary}
	   			<ReadMoreButton link={`/news/${article.slug}`} />
	   		</p>
    	</div>
	</article>
 )

interface IProps {
	contentful?: Contentful,
	slug?: string
}

const NewsList: React.FunctionComponent<IProps> = () => {

    // use context to get content from contentful
    const contentful: Contentful = React.useContext(ContentfulContext)

	// state hook for newsList
	const [news, setNews] = React.useState<INewsEntry[]>([])
	contentful.getNewsFeed()
		.then(response => {setNews(response)})

	return (
		<div id="NewsList" className="sidebar">
			<h3>Alle News</h3>
			
			{news ? (
				<ul className="news-list">
					{news.map(article => (
						<li key={article.slug}>
							<Link href={`/news/${article.slug}`}>
								<a>
									<span className="icon-pseudo title">{article.title}</span>
									<span className="icon-pseudo publishDate">{moment(article.publishDate).format('MMM YYYY')}</span>
								</a>
							</Link>
						</li>
					))}
				</ul>
			) : null }
		</div>
	)
}

const NewsOverview = ({ news }) => (
 	<section id="NewsOverview">

		<h2>Aktuelle Nachrichten</h2>

		<p>Freuen Sie sich über regelmäßige Neuigkeiten und Nachrichten aus Afrika. Wir freuen uns, wenn Sie die Nachrichten auch im Gebet bewegen - als Dank und Bitte. </p>

		<div className="NewsFeed">
			{news.map(article => (
		      <ArticleThumb key={article.title} article={article} />
		    ))}
		</div>

		<MiscButton link="/news" cssclass="button button-primary" text="Alle Nachrichten" />

	</section>
)

export default NewsOverview;
export { ArticleThumb , NewsList };