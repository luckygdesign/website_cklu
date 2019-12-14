import React from 'react';
import YouTube from 'react-youtube';

//import Img from 'gatsby-image';
import Link from 'next/link';

import { ParseJSON , ImageBlock} from './Misc';

const ProjectList = ({ project , handleClick }) => {
	return (
		<li>
			<Link
				href={`/about#${project.slug}`}	
				><a onClick={handleClick} className={`project-link icon-pseudo icon-project-${project.slug}`}>{project.title}</a>
				
			</Link>
		</li>
	)
}

const ProjectDetails = ({ project }) => {

	return (
		<article id={project.slug}>

			{/* heading */}
			<h3>{project.title}</h3>

			{/* heroimage */}
			{project.heroImage ? (
				<ImageBlock fields={project.heroImage.fields} />
		    	// TODO <Img fluid={{...project.heroImage.fluid, aspectRatio: 2.5}} alt={project.heroImage.title} />
		    ) : null}

			{/* content */}
			{project.description ? (
		    	<ParseJSON textjson={project.description} />
		    ) : null}

		</article>
	)
}


class Player extends React.Component {

	render () {
	    const opts = {
			playerVars: { // https://developers.google.com/youtube/player_parameters
				autoplay: 0
			}
	    };

	    return (
	     	<YouTube
		        videoId="Csq8QrikDsM"
		        opts={opts}
	      	/>

	    );
	}
}

const AboutSection = ({ projects }) => (
  <section id="HomeProjects">
		<div className="Container">

			<h2>Unsere Projekte</h2>

			<div className="project-header">
				<div className="project-video">
					<Player />
				</div>
				<div className="project-text">
					<span className="quote">Wer andere erfrischt, wird selbst erfrischt werden.</span>
					<span className="source">Sprüche 11,25</span>
				</div>
			</div>

			<div className="">
				<ul className="projects-list">
					{projects.map(singleproject => (
				      <ProjectList key={singleproject.node.title} project={singleproject.node} handleClick={null} />
				    ))}
				</ul>
			</div>

		</div>
	</section>
)


export { AboutSection, ProjectDetails, ProjectList};