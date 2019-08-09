import React from 'react';
import { Link } from 'gatsby';


// ReadMore Button with design, class and custom link
const ReadMoreButton = ({link}) => (
	<MiscButton link={link} cssclass="readmore" text="weiterlesen" />
);

// Misc Button
const MiscButton = ({ link, text, cssclass }) => (
	<Link to={link} className={cssclass}>{text}</Link>
);

export { MiscButton, ReadMoreButton };