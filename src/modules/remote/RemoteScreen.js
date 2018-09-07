import React, { Component } from "react";

import Header from "../Header";

class RemoteScreen extends Component {
  componentDidMount() {
    this._fetchPost();
  }

  _fetchPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    this.setState({
      posts
    });
  };

  state = {
    posts: []
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Remote</h1>
        <h3>From jsonplaceholder</h3>
        <div>
          {this.state.posts &&
            this.state.posts.map(x => (
              <div key={x.id}>
                <p>Title: {x.title}</p>
                <p>Body: {x.body}</p>
              </div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default RemoteScreen;
