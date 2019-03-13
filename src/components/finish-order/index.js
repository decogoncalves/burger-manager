import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import { Finisher } from './styles';

class Finish extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Finisher className="col-xs-8 col-sm-8 col-md-8 mt-8 mt-sm-8 mx-auto">
        <Button className="float-right my-5" size="lg" onClick={this.handleShow}>
          Finalizar Pedido
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pedidos</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Voltar
            </Button>
            <Finisher>
              <Button onClick={this.handleClose}>Finalizar</Button>
            </Finisher>
          </Modal.Footer>
        </Modal>
      </Finisher>
    );
  }
}

export default Finish;
