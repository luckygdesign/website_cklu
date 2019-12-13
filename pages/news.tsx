import * as React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import Contentful , {withContentful} from '../components/contentDelivery'

import { Entry , EntryCollection} from 'contentful'
import {INewsEntry, IPageContent} from '../interfaces/contentDelivery'

import {ArticleThumb } from '../components/news';
import { MiscButton, ParseJSON } from '../components/misc';

// import eyecatcher from '/images/schoolchildren.jpg'

// import '../styles/news.scss';


interface IProps {
  contentful: Contentful;
}

interface IState {
  feed: INewsEntry[],
  pageContent: IPageContent

}



class NewsPage extends React.Component<IProps, IState> {
  
  // feed: INewsEntry[];
  // pageContent: IPageContent;

  constructor(props) {
    super(props);

    this.state = {
      feed: [],
      pageContent: {
        title: "Aktuelle Nachrichten",
        slug: null,
        content: null
      }
    }
    
    this.fetchPageContent();
    this.fetchNewsFeed();

  }

  fetchNewsFeed() {
    // get news feed
    this.props.contentful.client
       .getEntries({'content_type': 'news'})
       .then((response:EntryCollection<INewsEntry>) => {
        const feed: INewsEntry[] = []
        response.items.forEach(article => feed.push(article.fields))
        this.setState({feed: feed})
       })
       .catch(err => console.log(err));
  }

  fetchPageContent() {
    // get page content
    this.props.contentful.client
    .getEntry('5DGQAcf8cNd5ThMX95NlfY')
    .then((response:Entry<IPageContent>) => {
      this.setState({pageContent: response.fields})
    }) 
    .catch(err => console.log(err))
  }
  
  render() {

    const feed = this.state.feed;
    const pageContent = this.state.pageContent;

    return (
      <Layout title={pageContent.title} >
          <div id="Content" className="Container">

            <div>
              <section id="News">

                {/* general page content - title and description */}
                <h1>{pageContent.title}</h1>

                {pageContent.content ? (
                  <ParseJSON textjson={pageContent.content} />
                ) : null}

                {/* display news feed */}
                {(feed.length > 0) ? (

                  <>

                    <div className="NewsFeed">
                      {feed.map(article => (
                          <ArticleThumb key={article.title} article={article} />
                        ))}
                    </div>

                    {/* <MiscButton link="/news" cssclass="button button-primary" text="Alle Nachrichten" /> */}

                  </>

                  ) : (
                    <p className="error-message">Leider haben wir gerade keine Neuigkeiten. Wir bitten um Verständnis und Geduld!</p>
                  )}

              </section>
            </div>
          </div> 
      </Layout>
    );
  }
}

export default withContentful(NewsPage);



// export const pageQuery = graphql`
//   query newsPageQuery {
//     feed: allContentfulNews(sort: {fields: publishDate, order: DESC}, limit: 5) {
//       edges {
//         node {
//           title
//           slug
//           publishDate
//           heroImage {
//             fixed(width: 300) {
//               width
//               height
//               src
//               srcSet
//             }
//             title
//           }
//           summary {
//             summary
//           }
//         }
//       }
//     }
//     page: contentfulPage(contentful_id: {eq: "5DGQAcf8cNd5ThMX95NlfY"}) {
//       title
//       content {
//         json
//       }
//     }
//   }
// `

