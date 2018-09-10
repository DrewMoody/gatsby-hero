import React from "react";
import Img from "gatsby-image";
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faBars } from '@fortawesome/free-solid-svg-icons'

// need to redesign for custom height
class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hamClicked: false
    }
  }

  hamToggle = () => {
    let hamClicked = !this.state.hamClicked;
    this.setState({ hamClicked })
  }

  render() {
    return (
      <div 
        className={`header ${this.state.hamClicked ? 'menu-open' : 'menu-closed'}`}
        style={this.props.headerStyles ? this.props.headerStyles : null }
      >
        <div className='navbar'>
          <div className='mobile-view'>
            <Link to={`/`}>
              <h1>Blog title</h1>
            </Link>
            <FontAwesomeIcon onClick={this.hamToggle} icon={faBars} size="lg" style={{ maxHeight: '50px' }}/>
          </div>
          <div className="nav">
            <Link to={`/all-postsv2/`}>Blog</Link>
            <Link to={`/about/`}>About</Link>
            <Link to={`/new-test/`}>Contact</Link>
          </div>
        </div>
        <div className='hero-img'>
          <Img
            sizes={this.props.heroImg}
            style={this.props.imgStyles ? this.props.imgStyles : undefined }
          />
          {/* </div>{props.heroImg ?
            <Img sizes={props.heroImg} style={{ height: '100vh'}}/>
          : <img src='http://sfwallpaper.com/images/beautiful-background-pictures-19.jpg' />
          } */}
        </div>
        <div className='hero-text'>
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
        </div>
        
        {!this.props.hideArrow ? <div className='down-arrow'><FontAwesomeIcon icon={faAngleDoubleDown} size="3x" style={{ maxHeight: '50px' }}/></div> : null}
      </div>
    )
  }
}

export default Header;