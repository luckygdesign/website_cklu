import * as React from 'react'
import { NextPage } from 'next'

// import context and interface
import CF from '../../components/contentDelivery'
import * as I from '../../interfaces/contentDelivery'

// import modules
import Layout from '../../components/Layout'
import { ArticleThumb , NewsList } from '../../components/News';
import { ParseJSON } from '../../components/Misc';

// import style
import '../../styles/news.scss';

interface IProps {
  page: I.IPageContent,
  news: I.INewsEntry[],
}

const NewsPage: NextPage<IProps> = props => {

  // use content from contentful
  const { page, news } = props

  return (
    <Layout title={page.title} >
      <div id="Content" className="Container">

        <div>
          <section id="News">

            {/* general page content - title and description */}
            <h1>{page.title}</h1>

            {page.content ? (
              <ParseJSON textjson={page.content} />
            ) : null}

            {/* display news news */}
            {(news.length > 0) ? (

              <>

                <div className="Newsnews">
                  {news.map(article => (
                      <ArticleThumb key={article.title} article={article} />
                    ))}
                </div>

                {/* <MiscButton link="/news" cssclass="button button-primary" text="Alle Nachrichten" /> */}

              </>

              ) : (
                <p className="error-message">Leider haben wir gerade keine Neuigkeiten. Wir bitten um Verständnis und Geduld!</p>
              )}

          </section>
          <NewsList />
        </div>
      </div> 

      <style jsx>{`

      `}</style>
    </Layout>
  );
}

NewsPage.getInitialProps = async () => {

  // get content
  const page: I.IPageContent = await CF.fetchPageContent('Ps1Mll3HZN00fKtuafmuW')
  const news: I.INewsEntry[] = await CF.fetchNews()
  
  return {page, news}

}

export default NewsPage;