import React from 'react';
import YouTube from 'react-youtube';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { ParseJSON } from './misc';

const ProjectList = ({ project , handleClick }) => {
	return (
		<li>
			<Link
				onClick={handleClick}
				to={`/about#${project.slug}`}
				className={`project-link icon-pseudo icon-project-${project.slug}`}
				>
				{project.title}
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
		    	<Img fluid={{...project.heroImage.fluid, aspectRatio: 2.5}} alt={project.heroImage.title} />
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
		        videoId="KDiATfWTSDI"
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
					<span className="quote">We thank god who helped us, who gave us this big vision.</span>
					<span className="source">Pastor Gabriel Kijjambu, Uganda</span>
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