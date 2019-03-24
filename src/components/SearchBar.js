import React, { Component } from "react";
import { connect } from "react-redux";
import { searchComics, sortComics } from "../actions";
import PropTypes from "prop-types";

class SearchBar extends Component {
  static propTypes = {
    searchComics: PropTypes.func.isRequired
  };
  state = {
    searchString: ""
  };
  onChange = e => {
    this.setState({ searchString: e.target.value });
    this.props.searchComics(e.target.value);
  };
  onSort = () => {
    //alert("sort it");
    this.props.sortComics();
  };
  render() {
    return (
      <div>
        <section style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            className="input"
            style={{ padding: "10px", width: "50%" }}
            id="addInput"
            placeholder="Enter title to search"
            value={this.state.searchString}
            onChange={this.onChange}
          />
          <button type="submit" onClick={this.onSort}>
            Sort
          </button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comics: state.allComics.comics
});

export default connect(
  mapStateToProps,
  { searchComics, sortComics }
)(SearchBar);
