import * as React from 'react'
import Contentful , {withContentful} from '../components/contentDelivery'

// import Interfaces
import * as I from '../interfaces/contentDelivery'

// import modules
import Layout from '../components/Layout'
import { ArticleThumb } from '../components/news';
import { ParseJSON } from '../components/misc';

// import style
import '../styles/news.scss';

interface IProps {
  contentful: Contentful;
}

interface IState {
  feed: I.INewsEntry[],
  pageContent: I.IPageContent
}

class NewsPage extends React.Component<IProps, IState> {

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

  fetchPageContent() {
    this.props.contentful.fetchPageContent('5DGQAcf8cNd5ThMX95NlfY')
    .then(response => {this.setState({pageContent: response})})
  }


  fetchNewsFeed() {
    this.props.contentful.fetchNews()
    .then(response => {this.setState({feed: response})})
  }  

  // fetchNewsFeed() {
  //   // get news feed
  //   this.props.contentful.client
  //      .getEntries({'content_type': 'news'})
  //      .then((response:EntryCollection<INewsEntry>) => {
  //       const feed: INewsEntry[] = []
  //       response.items.forEach(article => feed.push(article.fields))
  //       this.setState({feed: feed})
  //      })
  //      .catch(err => console.log(err));
  // }

  // fetchPageContent() {
  //   // get page content
  //   this.props.contentful.client
  //   .getEntry('5DGQAcf8cNd5ThMX95NlfY')
  //   .then((response:Entry<IPageContent>) => {
  //     this.setState({pageContent: response.fields})
  //   }) 
  //   .catch(err => console.log(err))
  // }
  
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

        <style jsx>{`

        `}</style>
      </Layout>
    );
  }
}

export default withContentful(NewsPage);