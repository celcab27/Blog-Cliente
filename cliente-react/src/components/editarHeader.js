import  React  from "react";
import "./../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Modal,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
class EditarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      validated: false,
      alert: false,
      message: '',
      variant: ''
    };
    this.title = React.createRef();
    this.content = React.createRef();
    this.id = React.createRef();
  }

  handleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleAlert(message, variant) {
    if(message && variant)
    {
      this.setState({message: message, variant: variant});

    }
    this.setState({alert: !this.state.alert})
  }

  updatePost() {
    const id = this.id.current.value;
    const title = this.title.current.value;
    const content = this.content.current.value;


    if (this.validate(title) && this.validate(content)) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          title: title,
          body: content,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) =>
        {
          console.log(response);

          if(response.status == 200)
          {
            this.handleAlert('Recurso actualizado con éxito', 'success');
            this.handleModal();
          }
          else
          {
            this.handleAlert('Ha ocurrido un error. Asegurese de haber proporcionado un id válida', 'danger')
          }
        });
    } else {
      this.handleAlert("Por favor, complete todos los campos.", 'danger');
    }
  }

  validate(item) {
    if (item == undefined || item == "") {
      return false;
    } else {
      return true;
    }
  }

  render() {


    return (
      <div className="alertContainer">
          <Alert variant={this.state.variant} 
            show={this.state.alert}>
            <p>{this.state.message}</p>
            <hr />
            <Button onClick={() => this.handleAlert()} variant={`outline-${this.state.variant}`}>
              Cerrar
            </Button>
          </Alert>
        <Link className="nav-link" onClick={() => this.handleModal()}>
          Editar
        </Link>
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Editar Operación: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={this.state.validated}>
              <Form.Group>
                <Form.Label>Ingrese el ID del recurso a editar:</Form.Label>
                <Form.Control type="number" ref={this.id} required />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Título:</Form.Label>
                <Form.Control type="text" ref={this.title} required />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  ref={this.content}
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal()}>
              Close
            </Button>
            <Button onClick={() => this.updatePost()}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditarHeader;
