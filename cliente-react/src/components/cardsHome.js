import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck } from "react-bootstrap";

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
              <Card.Text></Card.Text>
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
}

export default CardsHomeComponent;
