import * as React from 'react'
import { NextPage } from 'next'

// import context and interface
import CF from '../components/contentDelivery'
import * as I from '../interfaces/contentDelivery'

// import modules
import Layout from '../components/Layout'
import { ParseJSON } from '../components/Misc';
import { EventDetails } from '../components/Events';
import { GebetsanliegenOverview } from '../components/Gebet';

// import style
import '../styles/events.scss';

interface IProps {
  page: I.IPageContent,
  events: I.IEventsEntry[],
}

const EventsPage: NextPage<IProps> = props => {

  // use content from contentful
  const { page, events } = props
  
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
          <GebetsanliegenOverview />
        </div>
      </div>
    </Layout>
  );
}

EventsPage.getInitialProps = async () => {

  // get content
  const page: I.IPageContent = await CF.fetchPageContent('Ps1Mll3HZN00fKtuafmuW')
  const events: I.IEventsEntry[] = await CF.fetchEvents()
  
  return {page, events }

}

export default EventsPage;