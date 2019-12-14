import * as React from 'react'
import Contentful , {withContentful} from '../components/contentDelivery'

// import Interfaces
import * as I from '../interfaces/contentDelivery'

// import modules
import Layout from '../components/Layout'
import { ParseJSON } from '../components/misc';
import { EventDetails , GebetsanliegenOverview } from '../components/events';

// import style
import '../styles/events.scss';

interface IProps {
  contentful: Contentful;
}

interface IState {
  events: I.IEventsEntry[],
  gebets: I.IGebetsEntry[],
  pageContent: I.IPageContent
}

class EventsPage extends React.Component<IProps, IState> {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
      gebets: [],
      pageContent: {
        title: '',
        slug: null,
        content: null
      },

    }
  
    this.fetchPageContent()
    this.fetchEventsFeed();
    this.fetchGebetsFeed();
 
  }

  fetchPageContent() {
    this.props.contentful.fetchPageContent('Ps1Mll3HZN00fKtuafmuW')
    .then(response => {this.setState({pageContent: response})})
  }

  fetchEventsFeed() {
    this.props.contentful.fetchEvents()
    .then(response => {this.setState({events: response})})
  }  
  
  fetchGebetsFeed() {
    this.props.contentful.fetchGebets()
    .then(response => {this.setState({gebets: response})})
  }

  render() {

    const events = this.state.events;
    const gebets = this.state.gebets;
    const pageContent = this.state.pageContent;

    // TODO: refactor events list and display message if no events

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
              {events ? (
                <div id="UpcomingEvents">
                  {events.map(event => (
                    <EventDetails event={event} key={event.slug} />
                  ))}
                </div>
              ) : null}
              
            </section>
            <GebetsanliegenOverview anliegen={gebets} />
          </div>
        </div>
 
        <style jsx>{`

        `}</style>
      </Layout>
    );
  }
}

export default withContentful(EventsPage);