import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  console.log('dta', data.allMarkdownRemark.edges.filter(x => x.node.frontmatter.tags.includes('banana')));
  return (
    <div>
      <h1>View All Posts</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <div className="postfilter">
        <h3>Filter</h3>
        <div className='tabfilter' data-tab="all">All</div>
        <div className='tabfilter' data-tab="diet">Diet</div>
        <div className='tabfilter' data-tab="exercise">Exercise</div>
        <div className='tabfilter' data-tab="finance">Finance</div>
        <div className='tabfilter' data-tab="banana">Banana</div>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
          <Link
            to={node.frontmatter.path}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <h3>
              {node.frontmatter.title}{" "}
              <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const allPostQuery = graphql`
  query AllPostQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            tags
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