import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Header from "../components/header";
import Filter from "../components/Filter";

// TODO:
// Also make it so if no image, it just shows the blurb text (gradient backtround?)
// IDEA: have a button where user can swap between text view and image view
// Refactor getTabsList to sort by popularity?
class AllPostsv2 extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: 'all',
      tagsArr: [],
      imageHov: ''
    };
  }

  imageHover = val => {
    this.setState({ imageHov: val });
  }

  setTab = tagName => {
    this.setState({tab: tagName});
  } 

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
        <Filter activeTab={this.state.tab} setTab={this.setTab} tabsArr={this.state.tagsArr} />
        <div className="all-posts-v2">
          {data.allMarkdownRemark.edges.filter((x, i) => {
            if (this.state.tab === 'all') return x;
            return x.node.frontmatter.tags.includes(this.state.tab)
          }).map((x, i) => (
              // <div key={x.node.id} className='blog-posts'>
              <div key={x.node.id} className={
                i === this.state.imageHov ?
                `blog-posts p-${i} hovering` :
                `blog-posts p-${i}`
                } onMouseOver={() => this.imageHover(i)} onMouseLeave={() => this.imageHover('')}>
              <Link
                to={x.node.frontmatter.path}
                className='image-wrapper-a'
              >
                <Img sizes={x.node.frontmatter.headerImg.childImageSharp.sizes}/>
              </Link>
                <Link to={x.node.frontmatter.path} className="ppr-title">
                  <h3>{`${x.node.frontmatter.title} `}<span>— {x.node.frontmatter.date}</span></h3>
                  <div className={`ppr-excerpt ex-${i}`}>{x.node.excerpt}</div>
                </Link>
              </div>
            // </div>
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