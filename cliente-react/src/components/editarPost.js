import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Modal,
  Button,
  Form,
  Alert,
  Col,
  FormControl,
} from "react-bootstrap";

class EditarPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      message: "",
      alert: false,
      variant: false,
    };

    this.titleEdit = React.createRef();
    this.contentEdit = React.createRef();
  }

  handleAlert(message, variant) {
    if (message && variant) {
      this.setState({ message: message, variant: variant });
    }
    this.setState({ alert: !this.state.alert });
  }

  handleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  validate(item) {
    if (item == undefined || item == "") {
      return false;
    } else {
      return true;
    }
  }

  updatePost() {
    const postId = this.props.id;
    const title = this.titleEdit.current.value;
    const content = this.contentEdit.current.value

    if (this.validate(title) && this.validate(content)) {
      var data = {
        id: postId,
        title: title,
        body: content,
        userId: 1,
      };
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) =>
      {
        console.log(response);

        if(response.status == 200)
        {
          this.handleAlert('Recurso actualizado con éxito', 'success');
          this.handleModal();
        }
        else
        {
          this.handleAlert('Ha ocurrido un error. Asegurese de haber proporcionado un id válida')
        }
      });
    }
    else {
      this.handleAlert("Por favor, complete todos los campos.");
    }
  }

  render() {
    return (
      <div>
        <Alert variant={this.state.variant} 
            show={this.state.alert}>
            <p>{this.state.message}</p>
            <hr />
            <Button onClick={() => this.handleAlert()} variant={`outline-${this.state.variant}`}>
              Cerrar
            </Button>
          </Alert>
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
            <Modal.Title>Editar Operación: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Título:</Form.Label>
                <Form.Control
                  type="text"
                  ref={this.titleEdit}
                  defaultValue={this.props.title}
                />
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
            <Button variant="primary" onClick={() => this.updatePost()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditarPost;
