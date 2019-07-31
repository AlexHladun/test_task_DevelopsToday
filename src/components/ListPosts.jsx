import React, { Component } from 'react';
import ItemPostHandler from './ItemPostHandler';

class ListPosts extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidMount() {
    this.clickEvent = (event) => {
      if(this.props.selectedItemIndex !== null && !this.container.current.contains(event.target)) {
        this.props.deselectItem();
      }
    };
    document.addEventListener('click', this.clickEvent);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.clickEvent);
  }

  render() {
     if (!this.props.requested) {
       return <button onClick={this.props.load}>Load</button>
     } else if (this.props.posts === null){
       return <span>Loading...</span>
     } else {
      return <div ref={this.container}>{this.props.posts.map((posts, index) => <ItemPostHandler 
        key={posts.id}
        title={posts.title}
        date={posts.date}
        creator={posts.creator}
        body={posts.body} 
        postIndex={index}/>)}
      </div>
    }
  }
}

export default ListPosts;
