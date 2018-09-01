import React from "react";
import Img from "gatsby-image";
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

// NOTE: The img in there now is temporary. Needs to be changed.
const Header = (props) => {
  // console.log(props.test);
  return (
    <div className="header" style={props.noPadding ? { marginBottom: 0} : null }
    //   style={ !props.resolutions.src ?
    //     { backgroundImage: props.resolutions.src }
    //     : { backgroundColor: '#999999' }
    // }
    >
      <div className='navbar'>
        <Link to={`/`}>
          <h1>Blog title</h1>
        </Link>
        <div className="nav">
          <Link to={`/all-posts/`}>Blog</Link>
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
      
      {!props.hideArrow ? <div className='down-arrow'><FontAwesomeIcon icon={faAngleDoubleDown} size="3x" /></div> : null}
    </div>
  )
}

export default Header;

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`