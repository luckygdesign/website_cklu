import * as React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import Contentful , {withContentful} from '../components/contentDelivery'

import { Entry , EntryCollection} from 'contentful'
import {INewsEntry, IPageContent} from '../interfaces/contentDelivery'

import {ArticleThumb } from '../components/news';
import { ParseJSON } from '../components/misc';

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

        <style global jsx>{`
        body {
          margin: 0;
        }
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

        h1, h2, h3, span, a, p, button, input {
          font-family: Roboto;
        }

        h1 {
          color: #ccd42c;
          font-size: 46pt;
        }

        h2 {
          color: #aaa;
          font-size: 28pt;
        }

        h3 {
          color: #666;
        }

        input, textarea {
          outline: none;
          border: 0px solid transparent;
          padding: 10px 15px;
          background-color: transparent;
          font-size: 12pt;
          border: 2px #bbb solid;
          border-radius: 20px;
          color: #666;
          margin-left: 1em;
          transition: all 0.3s;

          &::placeholder {
            color: #aaa;
          }
        }

        button {
          outline: none;
          border: 0px solid transparent;
          padding: 10px 15px;
          background-color: transparent;
          font-size: 14pt;
          border: 2px #bbb solid;
          border-radius: 20px;
          color: #bbb;
          text-transform: uppercase;
          margin-left: 1em;
          transition: all 0.3s;
          cursor: pointer;
          
          :hover {
            color: #999;
            border-color: #999;
          }

          &.inverse {
            background-color: #bbb;
            color: #fff;
            border-color: transparent;
              
            :hover {
              background-color: #999;
            }
          }

          &.priority {
            background-color: #ccd42c;
            color: #fff;
            border-color: transparent;
          
            :hover {
              background-color: #7d8418;
            }
          }
        }        

        .logo {
          height: 80px;
        }


        `}</style>

        <style jsx>{`

        /* ================= */
        /* ==== LAYOUT ===== */

        section {
          padding: 60px 0px;
          width: 100%;
          display: flex;
          justify-content: center;

          > div {
            width: 90%;
            max-width: 1200px;
          }
        }

        /* Eyecatcher */

        .eyecatcher {
          width: 100%;
          grid-template-columns: 2fr 1fr;
          display: grid;
          height: 500px;
        }

        .eyecatchercontent {
          display: flex;
          text-align: right;
          align-items: center;
          padding: 60px;
        }

        .eyecatchercontent div {
          width: 100%;
        }

        .eyecatcherimage {
          display: flex;
          justify-content: left;
          /* background-color: #ccd42c;*/
          align-items: center;
        }

        /* Introduction */

        .introduction {
          background-color: #bbb;

          h2 {
            color: #fff;
          }
        }

        `}</style>
      </Layout>
    );
  }
}

export default withContentful(NewsPage);