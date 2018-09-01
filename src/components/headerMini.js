import React from "react";
import Img from "gatsby-image";
import Link from 'gatsby-link';

// purpose of this is because with the normal header, it requires resolutions.
// Need work around, but don't have that now

function HeaderMini(props) {
  return (
    <div className='headerMini'>
      <Link to={`/`}>
        <h1>Blog Title</h1>
      </Link>
      <div className="nav">
        <Link to={`/all-posts/`}>Blog</Link>
        <Link to={`/about/`}>About</Link>
        <Link to={`/new-test/`}>Test</Link>
      </div>
    </div>
  )
}

export default HeaderMini;