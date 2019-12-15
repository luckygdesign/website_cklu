import * as React from 'react'
import Contentful , {withContentful} from '../components/contentDelivery'
import Link from 'next/link';

// import Interfaces
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
  contentful: Contentful;
}

interface IState {
  news: I.INewsEntry[],
  events: I.IEventsEntry[],
  gebets: I.IGebetsEntry[],
  projects: I.IProjectEntry[],
  pageContent: I.IPageContent,
}

class IndexPage extends React.Component<IProps, IState> {

  constructor(props) {
    super(props);

    this.state = {
      news: [],
      events: [],
      gebets: [],
      projects: [],
      pageContent: {
        title: "Aktuelle Nachrichten",
        slug: null,
        content: null
      }
    }
    
    this.fetchPageContent();
    this.fetchNewsFeed();
    this.fetchEventsFeed();
    this.fetchGebetsFeed();
    this.fetchProjectsFeed();

  }

  fetchPageContent() {
    this.props.contentful.fetchPageContent('41DF68TjRVlA6GixnCpcqg')
    .then(response => {this.setState({pageContent: response})})
  }

  fetchNewsFeed() {
    this.props.contentful.getNewsFeed()
    .then(response => {this.setState({news: response})})
  }

  fetchEventsFeed() {
    this.props.contentful.getEventsFeed()
    .then(response => {this.setState({events: response})})
  }

  fetchGebetsFeed() {
    this.props.contentful.getGebetsFeed()
    .then(response => {this.setState({gebets: response})})
  }

  fetchProjectsFeed() {
    this.props.contentful.getProjectsFeed()
    .then(response => {this.setState({projects: response})})
  }

  render() {

    const news = this.state.news;
    const events = this.state.events;
    const gebets = this.state.gebets;
    const pageContent = this.state.pageContent;
    const projects = this.state.projects;

    return (
      <div id="LandingPage"className="App">
        
        <Header />

        <section id="About">
          <div className="Container">
            
            <h1>{pageContent.title}</h1>

            {pageContent.content ? (
              <ParseJSON textjson={pageContent.content} />
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
}

export default withContentful(IndexPage);