import React from 'react';

const ContentfulContext = React.createContext(null);

export const withContentful = Component => props => (
    <ContentfulContext.Consumer>
        {contentful => <Component {...props} contentful={contentful} />}
    </ContentfulContext.Consumer>
);

export default ContentfulContext;