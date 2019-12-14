import * as React from 'react'
import Contentful , {withContentful} from '../components/contentDelivery'

// import Interfaces
import * as I from '../interfaces/contentDelivery'

// import modules
import Layout from '../components/Layout'
import {ArticleThumb } from '../components/news';
import { ParseJSON } from '../components/misc';
import { EventDetails } from '../components/events';

// import style
import '../styles/events.scss';



interface IProps {
  contentful: Contentful;
}

interface IState {
  feed: I.IEventsEntry[],
  pageContent: I.IPageContent
}

class EventsPage extends React.Component<IProps, IState> {

  constructor(props) {
    super(props);

    this.state = {
      feed: [],
      pageContent: {
        title: '',
        slug: null,
        content: null
      },

    }
  
    this.fetchPageContent()
    this.fetchEventsFeed();
 
  }

  fetchPageContent() {
    this.props.contentful.fetchPageContent('Ps1Mll3HZN00fKtuafmuW')
    .then(response => {this.setState({pageContent: response})})
  }

  fetchEventsFeed() {
    this.props.contentful.fetchEvents()
    .then(response => {this.setState({feed: response})})
  }  
  
  render() {

    const feed = this.state.feed;
    const pageContent = this.state.pageContent;

    return (
      <Layout title="Veranstaltungen" >
        <div id="Content" className="Container">
          <div>
            <section id="Events">

              {/* general page content - title and description */}
              <h1>{pageContent.title}</h1>

              {pageContent.content ? (
                <ParseJSON textjson={pageContent.content} />
              ) : null}

              {/* display events feed */}
              {feed ? (
                <div id="UpcomingEvents">
                  {feed.map(event => (
                    <EventDetails event={event} key={event.slug} />
                  ))}
                </div>
              ) : null}
              
            </section>
            {/* <GebetsanliegenOverview anliegen={gebetsanliegen} /> */}
          </div>
        </div>
 
        <style jsx>{`

        `}</style>
      </Layout>
    );
  }
}

export default withContentful(EventsPage);