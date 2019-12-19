import React from 'react';
import Link from 'next/link';

import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


// ============================================================
// ============= RICH TEXT ====================================
// ============================================================

// options

// image with description

const ImageBlock = ({ fields}) => {

	// TODO: add preloading
	const { title, description, file } = fields;
	return (

      	<div className="parser-img-container">
      		<div className="parser-img-img">

      			<img
			        title={ title ? title : null}
			        alt={description ?  description : null}
			        src={file.url}
			      />

      		</div>

      		{description ?  (
				<div className="parser-img-description">
      				<p>{description}</p>
      			</div>
      		) : null}
      		
      	</div>	
  	)
}

const FileBlock = ({fields}) => {

      const { title, description, file } = fields;

      return (

      	<div className="parser-file-container">
  			<p>
      			<Link href={file['en-US'].url}> {// alt={description ?  description['en-US'] : null}	>
				  }<a className="icon-pseudo"	target="_blanc">
						{ title ? title['en-US'] : file['en-US'].details.fileName }
					</a>    
				</Link>


	      		{description ? description['en-US'] : null}

      		</p>
      		
      	</div>	
  	)
}

// TODO: add blockquote support
const BlockQuote = (quoteText, quoter) => {
	return (<p>coming soon</p>)
}

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
      const mimeType = file.contentType
      const mimeGroup = mimeType.split('/')[0]

      switch (mimeGroup) {
        case 'image':
          return <ImageBlock fields={node.data.target.fields} />
        case 'application':
          return <FileBlock fields={node.data.target.fields} />
        default:
          return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
      }
      
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const fields = node.data.target.fields;
      switch (node.data.target.sys.contentType.sys.id) {
        case 'blockquote':
          return (<div>
            <BlockQuote quoteText={fields.quoteText['en-US']} quoter={fields.quoter['en-US']}/>
          </div>)
        default:
          return <div>{fields.title}</div>

      }
    },
    [INLINES.HYPERLINK]: (node) => {
      	return (
      		<a 
      			className="icon-pseudo parser-link-inline"
      			href={node.data.uri}
      			target="_blanc"
  			>
      			{node.content[0].value}
  			</a>
  		)
	},
	[INLINES.ASSET_HYPERLINK]: (node) => {
		console.log(node)
		console.log(node.content[0].value			)
		const {file , title } = node.data.target.fields
		return (
			<BlancButton link={file.url} text={node.content[0].value} cssclass="icon-pseudo parser-link-inline" />
		)
  	},
  }
}

const ParseJSON = ({textjson}) => (
	<div className="text">
		{console.log(textjson)}
		{documentToReactComponents(textjson, richTextOptions)}
	</div>	
)


// ============================================================
// ============= BUTTONS ======================================
// ============================================================

// ReadMore Button with design, class and custom link
const ReadMoreButton = ({link}) => (
	<MiscButton link={link} cssclass="readmore" text="weiterlesen" />
);

const BlancButton = ({ link, text, cssclass }) => (
	<Link href={link}>
		<a className={cssclass} target="_blanc">{text}</a>
	</Link>
)

// Misc Button
const MiscButton = ({ link, text, cssclass }) => (
	<Link href={link}>
		<a className={cssclass}>{text}</a>
	</Link>
);

export { ParseJSON, MiscButton, ReadMoreButton, ImageBlock };