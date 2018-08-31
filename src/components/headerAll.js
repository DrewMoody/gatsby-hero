import React from "react";
import Img from "gatsby-image";
import Link from 'gatsby-link';

// purpose of this is because with the normal header, it requires resolutions.
// Need work around, but don't have that now

function Header2(props) {
  return (
    <div className='hero'>
      <div>HELLO {props.name}</div>
      <div className='hero gatsby-image-wrapper'>
        <img src='../imgs/headerBackground.jpeg'/>
      </div>
    </div>
  )
}

export default Header2;