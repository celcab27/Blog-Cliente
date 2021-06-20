import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck } from "react-bootstrap";

class CardsHomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentWillMount()
  {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) =>
    {
        this.setState({posts: json})
    }
    );
  }

  render() {
    var postArray = [];
    var variant = "dark";

    postArray = this.state.posts.map((post) =>
    {
        return (
            <Card
          bg={variant.toLowerCase()}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2">
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        );
    });

    return(
       <CardDeck>
           {postArray}
       </CardDeck> 
    )
  
  }
}

export default CardsHomeComponent;
