import React from "react";
import Img from "gatsby-image";
import Header from "../components/header";

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log('from blog-post', post.frontmatter.headerImg.childImageSharp.resolutions);
  return (
    <div className='blog-post'>
    <Header resolutions={post.frontmatter.headerImg.childImageSharp.resolutions} title={post.frontmatter.title} text={post.frontmatter.date}/>
        {/* <Img sizes={post.frontmatter.headerImg.childImageSharp.resolutions} /> */}
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
            resolutions(width:1920 height:1280) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;