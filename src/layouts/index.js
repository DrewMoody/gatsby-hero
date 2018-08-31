import React from 'react';
import Link from 'gatsby-link';
import './styles.css';

export default ({ children, data }) => {
  return (
    <div className="container">
      <div className="header">
        <Link to={`/`}>
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
        <div className="nav">
          {' '}
          {/*  get rid of this, make a header and footer component  */}
          <Link to={`/about/`}>About</Link>
          <Link to={`/new-test/`}>Test</Link>
        </div>
      </div>

      <div className="content">
        {children()} {/*this is what lists all of the posts  */}
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
