import React, { Component } from 'react'
import { connect } from 'react-redux';
import { requestComics } from '../actions';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

class ComicsHome extends Component {
    static propTypes = {
        requestComics: PropTypes.func.isRequired,
        comics: PropTypes.array.isRequired,
    }
    state = {
        pageOfItems: []
    }
    // update state with new page of items
    onChangePage = (pageOfItems) => this.setState({ pageOfItems: pageOfItems });

    componentWillMount = () => {
        this.props.requestComics();
    }
    render() {
        // const allComics = this.props.comics.map(post =>
        //     <div key={post.id} style={{
        //         width: '25%',
        //         border: '1px solid black',
        //         margin: '10px',
        //         padding: '20px',
        //         cursor: 'pointer'
        //     }}>
        //         <h1>{post.title}</h1>
        //         <p>{post.body}</p>
        //     </div>)
        const allComics = this.state.pageOfItems.map(post =>
            <div key={post.id} style={{
                width: '25%',
                border: '1px solid black',
                margin: '10px',
                padding: '20px',
                cursor: 'pointer'
            }}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Marvel Comics</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {allComics}
                </div>
                <Pagination items={this.props.comics} onChangePage={this.onChangePage} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comics: state.allComics.comics
})

export default connect(mapStateToProps, { requestComics })(ComicsHome)