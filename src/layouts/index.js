import React from "react";
import Link from "gatsby-link";
import './styles.css';

export default ({ children, data }) => (
  <div className='container'>
    <Link to={`/`}>
      <h3>
        {data.site.siteMetadata.title}
      </h3>
    </Link>
    <div className="nav"> {/*  get rid of this, make a header and footer component  */}
      <Link to={`/about/`}>
        About
      </Link>
      <Link to={`/new-test/`}>
        Test
      </Link>
    </div>
    {children()} {/*this is what lists all of the posts  */}
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`