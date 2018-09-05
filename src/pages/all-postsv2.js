import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Header from "../components/header";
import Filter from "../components/Filter";


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
      <div className="all-posts-wrapper">
        <Header heroImg={data.file.childImageSharp.sizes} title={'View All Posts'} text={`${data.allMarkdownRemark.totalCount} Total Posts`}/>
        <div className="all-posts">
          <Filter setTab={this.setTab} tabsArr={this.state.tagsArr} />
          {data.allMarkdownRemark.edges.filter(x=> {
            if (this.state.tab === 'all') return x;
            return x.node.frontmatter.tags.includes(this.state.tab)
          }).map((x, i) => (
              <div key={x.node.id}>
              <Link
                to={x.node.frontmatter.path}
                className={i % 2 === 0 ? "post-preview" : "post-preview ppr-reverse"}
              >
                <Img resolutions={x.node.frontmatter.headerImg.childImageSharp.resolutions} />
                <div className="ppr-text-content">
                  <h3>{`${x.node.frontmatter.title} `}<span>— {x.node.frontmatter.date}</span></h3>
                <p>{x.node.excerpt}</p>
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
                resolutions(width:200, height:150) {
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