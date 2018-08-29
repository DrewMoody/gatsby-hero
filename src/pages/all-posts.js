import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

class AllPosts extends React.Component {
  constructor() {
    super();
    this.state = {tab: 'all'};
  }

  // TODO: DRY the filter code
  // setTab = (x) => {
  //   this.setState({tab: x});
  // } 

  render() {
    const data = this.props.data;
    console.log('data', data);
    // console.log(this.state.tab);
    return (
      <div>
        <h1>View All Posts</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className="postfilter">
          <h3>Filter</h3>
          <div className='tabfilter' data-tab="all" onClick={() => this.setState({tab: "all"})}>All</div>
          <div className='tabfilter' data-tab="diet" onClick={() => this.setState({tab: "diet"})}>Diet</div>
          <div className='tabfilter' data-tab="exercise" onClick={() => this.setState({tab: "exercise"})}>Exercise</div>
          <div className='tabfilter' data-tab="finance" onClick={() => this.setState({tab: "finance"})}>Finance</div>
          <div className='tabfilter' data-tab="banana" onClick={() => this.setState({tab: "banana"})}>Banana</div>
        </div>
        {data.allMarkdownRemark.edges.filter(x=> {
          if (this.state.tab === 'all') return x;
          return x.node.frontmatter.tags.includes(this.state.tab)
        }).map((x, i) => (
            <div key={x.node.id} className={i % 2 === 0 ? "reg" : "reverse"}>
            <Link
              to={x.node.frontmatter.path}
            >
              <Img resolutions={x.node.frontmatter.headerImg.childImageSharp.resolutions} />
              <h3>
                {x.node.frontmatter.title}{" "}
                <span>— {x.node.frontmatter.date}</span>
              </h3>
              <p>{x.node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default AllPosts;

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
            headerImg {
              childImageSharp {
                resolutions {
                  ...GatsbyImageSharpResolutions
                }
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