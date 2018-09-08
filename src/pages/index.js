import React from "react";
import Header from "../components/header";

const headerStyles = {
  marginBottom: 0,
  height: '100vh'
}

export default ({ data }) => {
  return (
    <div>
      <Header
        heroImg={data.file.childImageSharp.sizes}
        title='Welcome'
        text="Placeholder text"
        hideArrow={true}
        headerStyles={headerStyles}
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