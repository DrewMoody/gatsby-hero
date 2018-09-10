import React from "react";
import Img from "gatsby-image";
import Header from "../components/header";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className='blog-post'>
    <Header 
      heroImg={post.frontmatter.headerImg.childImageSharp.sizes}
      title={post.frontmatter.title}
      text={post.frontmatter.date}
    />
      <div className='text' dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        headerImg {
          childImageSharp {
            sizes(maxWidth:1920) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;