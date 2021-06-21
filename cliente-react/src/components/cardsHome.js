import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EditarPost from './editarPost';
import { Card, CardDeck, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

class CardsHomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ posts: json });
      });
  }

  render() {
    var postArray = [];
    var variant = "dark";

    postArray = this.state.posts.map((post) => {
      return (
        <div className="col">
          <Card
            bg={variant.toLowerCase()}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="h-100"
          >
            <Card.Header>Post</Card.Header>
            <Card.Body>
              <Card.Title>
                {variant} {post.title}{" "}
              </Card.Title>
              <Card.Text>
                <Button variant="outline-light">
                  <Link className="link">Ver en detalle</Link>
                </Button>
                <Button
                  variant="outline-light"
                  onClick={() => this.deletePost(post.id)}
                >
                  Eliminar
                </Button>
                {/* <EditarPost></EditarPost> */}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });

    return (
      <CardDeck className="row row-cols-1 row-cols-md-3 g-4">
        {postArray}
      </CardDeck>
    );
  }

  deletePost(id) {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    }).then((res) => {
      console.log(res.status);
      if (res.status == 200) {
        return (
          <Alert variant="Success" show="true">
            ¡Recurso eliminado correctamente!
          </Alert>
        );
      }
    });
  }
}

export default CardsHomeComponent;
