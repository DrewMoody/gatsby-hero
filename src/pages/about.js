import React from "react";
import Header from '../components/header';

// const headerStyles = {
//     filter: 'invert(5%)',
//     height: '75vh'
// }

const imgStyles = {
  filter: 'invert(12%)',
}

export default ({ data }) =>
  <div className='three-qtr-hero'>
    <Header
      heroImg={data.file.childImageSharp.sizes}
      title='About Us' text="We're pretty great"
      viewHeight='75vh'
      hideArrow={true}
      imgStyles={imgStyles}
    />
    {/* <HeaderMini /> */}
    <div className='miniPages'>
      <h1>About Us</h1>
      <p>Here's some information about us. Oh, wait...</p>
    </div>
  </div>

export const query = graphql`
  query GetAboutImage {
    file(relativePath: { regex: "/aboutBackground/" }) {
      childImageSharp {
        sizes(maxWidth:1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;