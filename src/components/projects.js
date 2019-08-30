import React from 'react';
import YouTube from 'react-youtube';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const options = {
	renderNode: {
    	'embedded-asset-block': (node) =>
      	`<img class="img-fluid" src="${node.data.target.fields.file['en-US'].url}"/>`
	}
};

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file['en-US'].contentType
      const mimeGroup = mimeType.split('/')[0]

      switch (mimeGroup) {
        case 'image':
          return <img
            title={ title ? title['en-US'] : null}
            alt={description ?  description['en-US'] : null}
            src={file['en-US'].url}
          />
        case 'application':
          return <a
            alt={description ?  description['en-US'] : null}
            href={file['en-US'].url}
            >{ title ? title['en-US'] : file['en-US'].details.fileName }
          </a>
        default:
          return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
      }
      
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const fields = node.data.target.fields;
      switch (node.data.target.sys.contentType.sys.id) {
        case 'blockquote':
          return <div>
            <BlockQuote quoteText={fields.quoteText['en-US']} quoter={fields.quoter['en-US']}/>
          </div>
        default:
          return <div>??????????????? {title} </div>

      }
    },
  }
}

const ProjectThumb = ({ project }) => {
	return (
		<Link to={`/about#${project.slug}`} className="project-item">
			    {project.heroImage ? (
			    	<Img fluid={{...project.heroImage.fluid, aspectRatio: 1}} alt={project.heroImage.title} />
			    ) : null}
			    <div className="project-overlay">
			    	<h4>{project.title}</h4>
			    </div>
		</Link>

	)
}

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
		    	<div className="text">{documentToReactComponents(project.description.json, richTextOptions)}</div>
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


export { ProjectDetails, ProjectList , ProjectThumb};