import * as React from 'react'

// import context and interfaces
import Contentful , { ContentfulContext } from '../components/contentDelivery'
import * as I from '../interfaces/contentDelivery'

// import modules
import Layout from '../components/Layout'
import { ParseJSON } from '../components/Misc';
import { EventDetails , GebetsanliegenOverview } from '../components/Events';

// import style
import '../styles/events.scss';


const EventsPage: React.FunctionComponent = () => {

  // use context to get content from contentful
  const contentful: Contentful = React.useContext(ContentfulContext)

  // state hook for pageContent
  const [page, setPage] = React.useState<I.IPageContent>({ 
      title:'Impressum',
      slug:null,
      content:null
    })
  contentful.fetchPageContent('Ps1Mll3HZN00fKtuafmuW')
    .then(response => {setPage(response)})

  // state hook for events
  const [events, setEvents] = React.useState<I.IEventsEntry[]>([])
  contentful.getEventsFeed()
    .then(response => {setEvents(response)})

  // state hook for gebets
  const [gebets, setGebets] = React.useState<I.IGebetsEntry[]>([])
  contentful.getGebetsFeed()
    .then(response => {setGebets(response)})
  
  return (
    <Layout title="Veranstaltungen" >
      <div id="Content" className="Container">
        <div>
          <section id="Events">

            {/* general page content - title and description */}
            <h1>{page.title}</h1>

            {page.content ? (
              <ParseJSON textjson={page.content} />
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
    </Layout>
  );
}

export default EventsPage;