import React from 'react';
require('typeface-montserrat');
require('typeface-mukta-mahee');
import './styles.css';

// Plugging header in to each component individually in order to change image/header style
export default ({ children, data }) => {
  return (
    <div className="container">
      {/* <Header title={data.site.siteMetadata.title} /> */}
      <div className="content">
        {children()}
      </div>
    </div>
  );
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
