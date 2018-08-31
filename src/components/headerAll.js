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
        <img src='/static/hut-58f3f4d5d85f70a456cabea460fb8f90-3b6ab.jpg'/>
      </div>
    </div>
  )
}

export default Header2;