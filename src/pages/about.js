import React from "react";
import HeaderMini from '../components/headerMini';

export default ({ data }) =>
  <div>
    <HeaderMini />
    <div className='miniPages'>
      <h1>About Us</h1>
      <p>Here's some information about us. Oh, wait...</p>
    </div>
  </div>

// export const query = graphql`
//   query AboutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `