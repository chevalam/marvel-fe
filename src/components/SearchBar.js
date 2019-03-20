import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchComics } from '../actions';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    static propTypes = {
        searchComics: PropTypes.func.isRequired,
    }
    state = {
        searchString: ''
    }
    onchange = (e) => {
        this.setState({ searchString: e.target.value });
        this.props.searchComics(e.target.value);
    }
    render() {
    return (
        <div style={{width: '100%'}}>
            <section style={{alignContent:'center', justifyContent: 'flex-start', display: 'flex'}}>
                <input
                type="text"
                className="input"
                style={{padding: '10px', width: '50%'}}
                id="addInput"
                placeholder="Enter title to search"
                value={this.state.searchString}
                onChange={this.onchange}
                />
            </section>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    comics: state.allComics.comics
})

export default connect(mapStateToProps, { searchComics } )(SearchBar)
