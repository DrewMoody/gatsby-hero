import React from "react";
import Header from "../components/header";

export default ({ data }) => {
  return (
    <div className='full-hero'>
      <Header
        heroImg={data.file.childImageSharp.sizes}
        title='Welcome'
        text="Placeholder text"
        hideArrow={true}
      />
    </div>
  );
};

export const query = graphql`
  query GetImage {
    file(relativePath: { regex: "/headerBackground/" }) {
      childImageSharp {
        sizes(maxWidth:1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;