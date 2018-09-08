import React from "react";
import Img from "gatsby-image";
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

// need to redesign for custom height
const Header = (props) => {
  return (
    <div className="header" style={props.headerStyles ? props.headerStyles : null }>
      <div className='navbar'>
        <Link to={`/`}>
          <h1>Blog title</h1>
        </Link>
        <div className="nav">
          <Link to={`/all-postsv2/`}>Blog</Link>
          <Link to={`/about/`}>About</Link>
          <Link to={`/new-test/`}>Contact</Link>
        </div>
      </div>
      <div className='hero-img'>
        <Img
          sizes={props.heroImg}
          style={props.headerStyles ? props.headerStyles : { height: '100vh'} }
        />
        {/* </div>{props.heroImg ?
          <Img sizes={props.heroImg} style={{ height: '100vh'}}/>
         : <img src='http://sfwallpaper.com/images/beautiful-background-pictures-19.jpg' />
        } */}
      </div>
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      
      {!props.hideArrow ? <div className='down-arrow'><FontAwesomeIcon icon={faAngleDoubleDown} size="3x" style={{ maxHeight: '50px' }}/></div> : null}
    </div>
  )
}

export default Header;