import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Header from "../components/header";
import Filter from "../components/Filter";

// TODO: On Hover, show the blurb text
// On live server, the arrow is huge on page load. Fix
// Make it responsive
// Also make it so if no image, it just shows the blurb text
class AllPostsv2 extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: 'all',
      tagsArr: []
    };
  }

  setTab = tagName => {
    this.setState({tab: tagName});
  } 

  // should refactor to have it sorted by popularity
  getTabsList = () => {
    let tagsArr = [];
    this.props.data.allMarkdownRemark.edges.forEach(x => {
      for (let i = 0; i < x.node.frontmatter.tags.length; i++) {
        if (tagsArr.indexOf(x.node.frontmatter.tags[i]) === -1) {
          tagsArr.push(x.node.frontmatter.tags[i]);
        }
      }
    })
    this.setState({ tagsArr }) // , () => console.log(this.state.tagsArr))
  }

  componentDidMount() {
    this.getTabsList();
  }

  render() {
    const data = this.props.data;
    return (
      <div className="all-posts-wrapper-v2">
        <Header heroImg={data.file.childImageSharp.sizes} title={'View All Posts'} text={`${data.allMarkdownRemark.totalCount} Total Posts`}/>
        <Filter className='wow' setTab={this.setTab} tabsArr={this.state.tagsArr} />
        <div className="all-posts-v2">
          {data.allMarkdownRemark.edges.filter(x=> {
            if (this.state.tab === 'all') return x;
            return x.node.frontmatter.tags.includes(this.state.tab)
          }).map((x, i) => (
              // <div key={x.node.id} className='blog-posts'>
              <div key={x.node.id} className={
                i === 2 ?
                'blog-posts p-three' :
                i === 3 ?
                'blog-posts p-four' :
                'blog-posts'
              }>
              <Link
                to={x.node.frontmatter.path}
                // className={i % 2 === 0 ? "post-preview" : "post-preview ppr-reverse"}
              >
                <Img sizes={x.node.frontmatter.headerImg.childImageSharp.sizes} />
                <div className="ppr-title">
                  <h3>{`${x.node.frontmatter.title} `}<span>— {x.node.frontmatter.date}</span></h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllPostsv2;

// change headerBackground to allpostsBackground when you get an img
export const allPostQueryV2 = graphql`
  query AllPostQueryV2 {
    file(relativePath: { regex: "/allpostsBackground/" }) {
      childImageSharp {
        sizes(maxWidth:1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
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
                sizes(maxWidth:600) {
                  ...GatsbyImageSharpSizes
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