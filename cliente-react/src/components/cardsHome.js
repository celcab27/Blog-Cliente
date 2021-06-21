import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EditarPost from "./editarPost";
import { Card, CardDeck, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

class CardsHomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], alert: false };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ posts: json });
      });
  }

  handleAlert() {
    this.setState({ alert: !this.state.alert });
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
                  <Link className="link" to={`/${post.id}`}>Ver en detalle</Link>
                </Button>
                <Button
                  variant="outline-light"
                  onClick={() => this.deletePost(post.id)}
                >
                  Eliminar
                </Button>
                <EditarPost
                  title={post.title}
                  content={post.body}
                  id={post.id}
                ></EditarPost>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <Alert variant="success" show={this.state.alert}>
          <p>¡Post eliminado con éxito!</p>
          <hr />
          <Button onClick={() => this.handleAlert()} variant="outline-success">
            Cerrar
          </Button>
        </Alert>
        <CardDeck className="row row-cols-1 row-cols-md-3 g-4">
          {postArray}
        </CardDeck>
      </div>
    );
  }

  deletePost(id) {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    }).then((res) => {
      console.log(res.status);
      if (res.status == 200) {
        this.handleAlert();
      }
    });
  }
}

export default CardsHomeComponent;
