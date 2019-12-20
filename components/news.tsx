import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import scss from 'styled-jsx/css'

import { ReadMoreButton, MiscButton } from './Misc'

import { INewsEntry } from '../interfaces/contentDelivery'
import CF from './contentDelivery';

const ArticleThumb = ({ article }) => {
	const { title, description, file} = article.heroImage.fields;
	let imageUrl = `url("${file.url}")`

	return(
		<article className="article-thumb">

			<div className="article-image"
				style={{backgroundImage: imageUrl}}
				title={ title ? title : null}
			>
				<img src={file.url} alt={ title ? title : null} />
				
				</div>
			
			<div className="article-content">
				<h4>{article.title}</h4>
				<span className="icon-pseudo publishDate">{moment(article.publishDate).format('MMM YYYY')}</span>
				<p>
					{article.summary}
				</p>
				<ReadMoreButton link={`/news/${article.slug}`} />
			</div>

		<style jsx>{SArticleThumb}</style>
		</article>
	)
};

const SArticleThumb = scss`
	
	.article-thumb {
		background-color: #eee;
		display: grid;
		grid-template-columns: 1fr 2fr;
		border-radius: 12px;
		overflow: hidden;

		@media (max-width: 425px) {
			grid-template-columns: auto;
		}
	}
	.article-image {
		background-size: cover;
		background-position: 50%, 50%;
		img {
			display: none;
			width: 100%;
		}
		@media (max-width: 425px) {
			img {
				display: float;
			}
		}
	}
	.article-content {
		padding: 20px;

		.publishDate {
			font-size: 12pt;
			opacity: 0.75;
		}
		.publishDate:before {
			font-size: 0.8em;
			content: "\f073";
			padding-right: 0.5em;
		}
	  
	}
`

interface IProps {
	slug?: string
}

const NewsList: React.FunctionComponent<IProps> = (props) => {

	// state hook for newsList
	const [news, setNews] = React.useState<INewsEntry[]>([])
	CF.fetchNews()
		.then(response => {setNews(response)})

	return (
		<div id="NewsList" className="sidebar">
			<h3>Alle News</h3>
			
			{news ? (
				<ul className="news-list">
					{news.map(article => (
						<li key={article.slug}>
							<Link href={`/news/${article.slug}`}>
								<a
									className={props.slug == article.slug ? "actual-article" : null }
								>
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