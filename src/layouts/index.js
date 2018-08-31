import React from 'react';
import Link from 'gatsby-link';
import './styles.css';
import Header from '../components/header';

export default ({ children, data }) => {
  return (
    <div className="container">
      {/* <Header title={data.site.siteMetadata.title} /> */}
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
