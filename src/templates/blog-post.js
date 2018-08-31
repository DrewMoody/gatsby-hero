import React from "react";
import Img from "gatsby-image";

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log('hi', post);
  return (
    <div className='blog-post'>
      <div className='hero'>
        <Img resolutions={post.frontmatter.headerImg.childImageSharp.resolutions} />
        <div className='hero-text'>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </div>
        <div className='down-arrow'>DOWN</div>
      </div>
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