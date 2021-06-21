import React from "react";
import "./../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Modal,
    Button,
    Form,
    FormGroup,
    Col,
    FormControl,
  } from "react-bootstrap"; 

  class NuevoPostComponent extends React.Component
  { 
    constructor() {
        super();
        this.state = {
          showModal: false,
        };
        this.title = React.createRef();
        this.content = React.createRef();
    }

    handleModal() {
        this.setState({ showModal: !this.state.showModal });
      }
      render() {
        return (
          <div>
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
                    <Form.Control type="text" ref = {this.title}  />
                  </Form.Group>
    
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      ref={this.content}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
    
              <Modal.Footer>
                <Button variant="secondary" onClick={() => this.handleModal()}>
                  Close
                </Button>
                <Button variant="primary" >Save Changes</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
  }

  export default NuevoPostComponent;