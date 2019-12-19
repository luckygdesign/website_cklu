import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

// import context and interface
import { CF } from '../components/contentDelivery'
import * as I from '../interfaces/contentDelivery'

// import modules
import Layout from '../components/Layout'
import News from '../components/News';
import Events , { GebetsanliegenOverview } from '../components/Events';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spenden from '../components/Spenden';
import { AboutSection } from '../components/Projects';
import { ParseJSON } from '../components/Misc';

// import style
import '../styles/home.scss';

interface IProps {
  news: I.INewsEntry[],
  events: I.IEventsEntry[],
  gebets: I.IGebetsEntry[],
  projects: I.IProjectEntry[],
  page: I.IPageContent,
}

const IndexPage: NextPage<IProps> = props => {

  const { page, news, events, gebets, projects } = props

  return (
    <div id="LandingPage"className="App">
      
      <Header />

      <section id="About">
        <div className="Container">
          
          <h1>{page.title}</h1>

          {page.content ? (
            <ParseJSON textjson={page.content} />
          ) : null} 

        </div> 
        <div className="Container">
          <h3>Werden Sie Teil unserer Arbeit!</h3>
          <div className="About-GetInTouch">
            <Link href="#GebetsanliegenOverview"><a>
              <span className="icon fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-praying-hands fa-inverse fa-stack-1x" />
              </span>
              <span className="content">
                <span className="heading">Beten</span>
                <span>Sie können uns durch Ihr Gebet unterstützen</span>
              </span>
            </a></Link>
            <Link href="about#waisenarbeit"><a>
              <span className="icon fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-hands-helping fa-inverse fa-stack-1x" />
              </span>
              <span className="content">
                <span className="heading">Patenschaften</span>
                <span>Übernehmen Sie eine Patenschaft</span>
              </span>
            </a></Link>
            <Link href="#Spenden"><a>
              <span className="icon fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-donate fa-inverse fa-stack-1x" />
              </span>
              <span className="content">
                <span className="heading">Spenden</span>
                <span>Unterstützen Sie uns durch Ihre Spenden</span>
              </span>
            </a></Link>
          </div>
        </div>
      </section>

      <AboutSection projects={projects} />

      <div id="Content" className="Container">
        <div>
          <News news={news} />
          <Events events={events} />
          <GebetsanliegenOverview anliegen={gebets} />
          <Spenden />
        </div>
      </div>

      <Footer />

    </div>
  );
}

IndexPage.getInitialProps = async () => {

  // get content
  const page: I.IPageContent = await CF.fetchPageContent('Ps1Mll3HZN00fKtuafmuW')
  const events: I.IEventsEntry[] = await CF.fetchEvents()
  const gebets: I.IGebetsEntry[] = await CF.fetchGebets()
  const projects: I.IProjectEntry[] = await CF.fetchProjects()
  const news: I.INewsEntry[] = await CF.fetchNews()
  
  return {page, events, gebets, projects, news}

}

export default IndexPage;