import React from "react";
import Img from "gatsby-image";
import Link from 'gatsby-link';

const Header = props => {
  console.log(props.test);
  return (
    <div className="header" 
    //   style={ !props.resolutions.src ?
    //     { backgroundImage: props.resolutions.src }
    //     : { backgroundColor: '#999999' }
    // }
    >
      <div className='navbar'>
        <Link to={`/`}>
          <h1>Blog Title</h1>
        </Link>
        <div className="nav">
          <Link to={`/about/`}>About</Link>
          <Link to={`/new-test/`}>Test</Link>
        </div>
      </div>
      <div className='hero-img'>
        {props.resolutions ? 
          <img src={props.resolutions.src} /> 
          : <img src='http://sfwallpaper.com/images/beautiful-background-pictures-19.jpg' 
          />
        }
        {/* <img src={props.resolutions.src} /> */}
      </div>
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <div className='down-arrow'>DOWN</div>
    </div>
  )
}

export default Header;