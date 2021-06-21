import React from "react";
import { withRouter } from "react-router";

class DetalleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchData(id);
  }
  
  fetchData(id)
  {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      this.setState({ post: json });
    });
  }

  render() {
    const post = this.state.post;

    console.log(post);

    if(post != undefined && post.id)
    {
      return (
        <div>
          <ul>
            <li>Title: {post.title}</li>
            <li>Content: {post.body}</li>
          </ul>
        </div>)
    } else {
        return(
          <div>
            <h3>Error. El recurso al que está intentando acceder no existe.</h3>
          </div>
        )

    
    }
  }
}

export default withRouter(DetalleComponent);
