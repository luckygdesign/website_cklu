import * as React from 'react'
import Contentful , {withContentful} from '../components/contentDelivery'

// import Interfaces
import * as I from '../interfaces/contentDelivery'

// import modules
import Layout from '../components/Layout'
import { ParseJSON } from '../components/Misc';
import { ProjectDetails , ProjectList } from '../components/Projects';
// import style
import '../styles/about.scss';

interface IProps {
  contentful: Contentful;
}

interface IState {
  projects: I.IProjectEntry[],
  pageContent: I.IPageContent,
  currentHash: string
}

class AboutPage extends React.Component<IProps, IState> {

  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      pageContent: {
        title: "Wer wir sind",
        slug: null,
        content: null
      },
      currentHash: '' // TODO get hash from url
    }
    
    this.fetchPageContent();
    this.fetchProjects();

  }

  // handle Click on project item - load new item and change url without refresh and scrolling
  handleClick = (e) => {
    e.preventDefault();
    const newUrl = new URL(e.target);
    const newHash = newUrl.hash.substr(1).toLowerCase();
    this.setState({currentHash: newHash});
    history.pushState(null, null, '#'+newHash);
  }
  
  fetchPageContent() {
    this.props.contentful.fetchPageContent('4sNLUWA5p7arg5gVUfdXfY')
    .then(response => {this.setState({pageContent: response})})
  }

  fetchProjects() {
    this.props.contentful.fetchProjects()
    .then(response => {this.setState({projects: response})})
  }
  
  render() {

    const projects = this.state.projects;
    const pageContent = this.state.pageContent;

    let currentProject = projects.filter(project => {
      return project.slug.toLowerCase() === this.state.currentHash
    })[0];

    return (
      <Layout title={pageContent.title} >
        <div id="Content" className="Container">

            <section id="AboutHeader">

              {/* general page content - title and description */}
              <h1>{pageContent.title}</h1>

              {pageContent.content ? (
                <ParseJSON textjson={pageContent.content} />
              ) : null}

            </section>

            {/* display projects feed */}
            {(projects.length > 0) ? (

              <section id="AboutProjects">

                <h1>Unsere Projekte</h1>

                <ul className="projects-list">
                  {projects.map(project => (
                    <ProjectList project={project} key={project.slug} handleClick={this.handleClick}/>
                  ))}
                </ul>

                { currentProject ? (
                  <ProjectDetails project={currentProject}  />
                ) : null }

              </section>
            ) : null }

          </div>
      </Layout>
    );
  }
}

export default withContentful(AboutPage);