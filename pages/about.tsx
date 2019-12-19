import * as React from 'react'
import { NextPage } from 'next'

// import context and interface
import CF from '../components/contentDelivery'
import * as I from '../interfaces/contentDelivery'

// import modules
import Layout from '../components/Layout'
import { ParseJSON } from '../components/Misc';
import { ProjectDetails , ProjectList } from '../components/Projects';
// import style
import '../styles/about.scss';

interface IProps {
  page: I.IPageContent,
  projects: I.IProjectEntry[],
}

const AboutPage: NextPage<IProps> = props => {

  // use content from contentful
  const { page, projects } = props

  // state for actual project
  const [ hash, setHash ] = React.useState('')

  // TODO: get initial hash

  // handle Click on project item - load new item and change url without refresh and scrolling
  function handleClick(e) {
    e.preventDefault();
    const newUrl = new URL(e.target);
    const newHash = newUrl.hash.substr(1).toLowerCase();
    setHash(newHash)
    history.pushState(null, null, '#'+newHash);
  }
  
  let currentProject = projects.filter(project => {
    return project.slug.toLowerCase() === hash
  })[0];

  return (
    <Layout title={page.title} >
      <div id="Content" className="Container">

          <section id="AboutHeader">

            {/* general page content - title and description */}
            <h1>{page.title}</h1>

            {page.content ? (
              <ParseJSON textjson={page.content} />
            ) : null}

          </section>

          {/* display projects feed */}
          {(projects.length > 0) ? (

            <section id="AboutProjects">

              <h1>Unsere Projekte</h1>

              <ul className="projects-list">
                {projects.map(project => (
                  <ProjectList project={project} key={project.slug} handleClick={handleClick}/>
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

AboutPage.getInitialProps = async () => {

  // get content
  const page: I.IPageContent = await CF.fetchPageContent('4sNLUWA5p7arg5gVUfdXfY')
  const projects: I.IProjectEntry[] = await CF.fetchProjects()
  
  return {page, projects}

}

export default AboutPage;