import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  Col,
  FormControl,
} from "react-bootstrap";

class EditarPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.titleEdit = React.createRef();
    this.contentEdit = React.createRef();

  }

  handleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  updatePost() {
    const postId = this.props.id;
    var data = {
        id: postId,
        title: this.titleEdit.current.value,
        body: this.contentEdit.current.value,
        userId: 1
    }

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
          if(response.status == 200)
          {
              this.handleModal();
          }
      })
      
  }

  render() {
    return (
      <div>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => this.handleModal()}
          id="newOperationButton"
        >
          Editar
        </Button>
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Nueva Operación: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Título:</Form.Label>
                <Form.Control type="text" ref = {this.titleEdit} defaultValue={this.props.title} />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  defaultValue={this.props.content}
                  ref={this.contentEdit}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.updatePost()}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }


}

export default EditarPost;
