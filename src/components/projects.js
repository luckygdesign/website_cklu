import React from 'react';

const ProjectThumb = ({ node }) => (
  <div>
    <h4>{node.node.title}</h4>
  </div>
)

export default ({ projects }) => (
  <section id="HomeProjects">
		<div className="Container">

			<h2>Unsere Projekte</h2>

			<div className="projectoverview">
				{projects.map(singleproject => (
			      <ProjectThumb key={singleproject.node.title} node={singleproject} />
			    ))}
			</div>

		</div>
	</section>
)