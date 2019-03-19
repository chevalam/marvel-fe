import React, { Component } from 'react'

export default class ComicsHome extends Component {
    state = {
      comics: []
    }
    componentWillMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({ comics: data }));
    }
    render() {
     const allComics = this.state.comics.map( post => 
        <div key={post.id} style={{ 
            width: '25%', 
            border: '1px solid black', 
            margin: '10px', 
            padding: '20px',
            cursor: 'pointer'}}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>        
        </div>)   
    return (
        <div>
            <h1 style={{ textAlign: 'center'}}>Marvel Comics</h1>
            <div style={{ 
                display:'flex', 
                flexDirection: 'row', 
                flexWrap: 'wrap',
                justifyContent: 'center'}}>
            {allComics}
            </div>
        </div>
    )
  }
}

