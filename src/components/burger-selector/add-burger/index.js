import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Adding } from './styles';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Adding className="add-button col-xs-11 col-sm-11 col-md-11 mt-2 mt-sm-2">
        <Button>Adicionar</Button>
      </Adding>
    );
  }
}

export default Add;
