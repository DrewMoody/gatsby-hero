import React from "react";
import Link from "gatsby-link";
import Header from "../components/header";

export default ({ data }) => {
  return (
    <div>
      <Header heroImg={data.file.childImageSharp.sizes} title='Welcome' text='Placeholder text' hideArrow={true} noPadding={true}/>
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