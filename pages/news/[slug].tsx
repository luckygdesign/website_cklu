import * as React from 'react'
import { NextPage, NextPageContext } from 'next'
import moment from 'moment'

// import context and interface
import { CF } from '../../components/contentDelivery'
import { INewsEntry } from '../../interfaces/contentDelivery'

// import components
import Layout from '../../components/Layout'
import { ParseJSON , ImageBlock } from '../../components/Misc'
import { NewsList } from '../../components/News'

interface IProps {
    article: INewsEntry,
    slug: string
}

const NewsArticle: NextPage<IProps> = props => {

    // use context to get content from contentful
    // const contentful: Contentful = React.useContext(ContentfulContext)

    const article: INewsEntry = props.article

    return (
        <Layout title={article.title} >

        	<div id="Content" className="Container">
                <div>
                    <article className="news-article">
                        <header>

    	        	        <h2 className="news-title">{article.title}</h2>
                            <span className="icon-pseudo news-publishDate">{moment(article.publishDate).format('MMM YYYY')}</span>

                
                            <div className="news-nav">
                                {/* {prev ? (
                                    <Link className="icon-pseudo news-nav-prev"to={`/news/${prev.slug}`}>{prev.title}</Link>
                                ) : null}

                                {next ? (
                                    <Link className="icon-pseudo news-nav-next" to={`/news/${next.slug}`}>{next.title}</Link>
                                ) : null} */}
                            </div>


                </header>

                {article.content ? (
                    <div> {/* className="news-img" */}

                        {article.heroImage ? (
                            <ImageBlock fields={article.heroImage.fields} />
                        ) : null}
                        
                        <ParseJSON textjson={article.content} />
                    </div>

                ) : null }

              </article>

              <NewsList slug={article.slug}/>

              </div>


        	</div>
        </Layout>
    )
}

interface IContext extends NextPageContext {
    article: INewsEntry,
    slug: string
}

NewsArticle.getInitialProps = async (ctx: IContext) => {

    // get sting
    let slug: string
    if (typeof(ctx.query.slug) !== 'string') {
        console.log(ctx.query)
        slug = ctx.query.slug.toString();
    } else {
        slug = ctx.query.slug;
    }

    // get article
    const article: INewsEntry = await CF.fetchNewsArticle(slug)

    return {article, slug}
}

export default NewsArticle;