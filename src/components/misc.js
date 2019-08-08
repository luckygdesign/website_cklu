import React from 'react';
import { Link } from 'gatsby';

const ReadMoreButton = ({link}) => (
	<Link to={link} className="readmore">weiterlesen</Link>
);

export { ReadMoreButton };