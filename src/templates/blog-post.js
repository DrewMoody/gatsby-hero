import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log('hi', post.headerImg);
  return (
    <div>
      {/* EASY TO STYLE USING THIS: <img src='http://localhost:8000/static/sunset-3416768_1920-95da4572d5307cf2b9b54c5ee1f4641b-90e0b.jpg'/> */}
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
          id
        }
      }
    }
  }
`;