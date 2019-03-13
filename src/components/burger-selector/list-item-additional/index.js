/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { Item } from '../list-item-burger/styles';

class AdditionalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
    };
  }

  plusQuantity() {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  minusQuantity() {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  }

  render() {
    return (
      <Item className="list-group-item">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 item">
              <h6 className="float-left">{this.props.name}</h6>
              <div className="float-right">
                <a
                  href="javascript:void(0);"
                  onClick={() => {
                    this.minusQuantity();
                  }}
                >
                  <i className="fas fa-minus" />
                </a>
                <input type="text" readOnly value={this.state.quantity} />
                <a
                  href="javascript:void(0);"
                  onClick={() => {
                    this.plusQuantity();
                  }}
                >
                  <i className="fas fa-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Item>
    );
  }
}

export default AdditionalItem;
