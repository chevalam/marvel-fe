import React, { Component } from "react";
import { connect } from "react-redux";
import { requestComics } from "../actions";
import PropTypes from "prop-types";
import Pagination from "./Pagination";

class ComicsHome extends Component {
  static propTypes = {
    requestComics: PropTypes.func.isRequired,
    comics: PropTypes.array.isRequired
  };
  state = {
    pageOfItems: []
  };
  // update state with new page of items
  onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });

  componentWillMount = () => {
    this.props.requestComics();
  };
  render() {
    const allComics = this.state.pageOfItems.map(post => (
      <div
        key={post.title}
        style={{
          width: "25%",
          height: "400px",
          border: "1px solid black",
          margin: "10px",
          cursor: "pointer",
          overflowY: "overlay",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            height: "80%",
            backgroundImage: "url(" + post.url + ")",
            backgroundSize: "cover"
          }}
        />
        <div
          style={{
            height: "20%",
            padding: "5px"
          }}
        >
          <p>{post.title}</p>
          {post.price > 0 && <p>${post.price}</p>}
          <p>{new Date(post.date).getFullYear()}</p>
        </div>
      </div>
    ));
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {allComics}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            items={this.props.comics}
            onChangePage={this.onChangePage}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comics: state.allComics.comics
});

export default connect(
  mapStateToProps,
  { requestComics }
)(ComicsHome);
