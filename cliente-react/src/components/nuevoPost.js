import React from "react";
import "./../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Modal,
  Button,
  Form,
  Alert,
  Col,
  FormControl,
} from "react-bootstrap";

class NuevoPostComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      variant: '',
      alert: false,
      message: ''
    };
    this.title = React.createRef();
    this.content = React.createRef();
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

  validate(item) {
    if (item == undefined || item == "") {
      return false;
    } else {
      return true;
    }
  }

  sendOperation() {
    const title = this.title.current.value;
    const content = this.content.current.value

    if(this.validate(title) && this.validate(content))
    {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: this.title.current.value,
          body: this.content.current.value,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
            console.log(response)
            if(response.status == 201)
            {
              this.handleModal();
              this.handleAlert('Recurso creado con éxito', 'success');
            }
            else{
              this.handleAlert('Ha habido un error. Por favor, intentelo nuevamente', 'danger');
            }
        });
    } else {
      this.handleAlert('Por favor, rellene todos los campos', 'danger');
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
        <Button
          variant="dark"
          size="lg"
          onClick={() => this.handleModal()}
          id="newOperationButton"
        >
          Nueva Operación
        </Button>
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Nueva Operación: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Título:</Form.Label>
                <Form.Control type="text" ref={this.title} />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} ref={this.content} />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.sendOperation()}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default NuevoPostComponent;
