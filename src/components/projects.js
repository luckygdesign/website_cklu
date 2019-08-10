import React from 'react';
import YouTube from 'react-youtube';

import Img from 'gatsby-image';
import { Link } from 'gatsby';


const ProjectThumb = ({ project }) => {
	return (
		<Link to={`/project#${project.slug}`} className="project-item">
			    {project.heroImage ? (
			    	<Img fluid={{...project.heroImage.fluid, aspectRatio: 1}} alt={project.heroImage.title} />
			    ) : null}
			    <div className="project-overlay">
			    	<h4>{project.title}</h4>
			    </div>
		</Link>

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

export default ({ projects }) => (
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

			<div className="project-overview">
				{projects.map(singleproject => (
			      <ProjectThumb key={singleproject.node.title} project={singleproject.node} />
			    ))}
			</div>

			


		</div>
	</section>
)