import React from "react";
import Link from 'gatsby-link';

function HeaderMini(props) {
  return (
    <div className='headerMini'>
      <Link to={`/`}>
        <h1>Blog Title</h1>
      </Link>
      <div className="nav">
        <Link to={`/all-postsv2/`}>Blog</Link>
        <Link to={`/about/`}>About</Link>
        <Link to={`/new-test/`}>Test</Link>
      </div>
    </div>
  )
}

export default HeaderMini;