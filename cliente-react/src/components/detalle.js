import React from "react";
import { withRouter } from "react-router";

class DetalleComponent extends React.Component {
  constructor(props)
  {
      super(props);
      this.state = {post: []};
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ post: json });
      });
  }
  render() {
        const post = this.state.post;
        console.log(post);
        return(
            <div>
                <ul>
                    <li>Title: {post.title}</li>
                    <li>Content: {post.body}</li>
                </ul>
            </div>
        )
    }


}

export default withRouter(DetalleComponent);
