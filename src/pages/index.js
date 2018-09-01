import React from "react";
import Link from "gatsby-link";
import Header from "../components/header";

export default ({ data }) => {
  return (
    <div>
      <Header title='Welcome' text='Placeholder text' hideArrow={true} noPadding={true}/>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            headerImg {
              childImageSharp {
                id
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;