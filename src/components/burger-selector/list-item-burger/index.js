/* eslint-disable no-script-url */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { fetchIngredients } from '../../../services/api';
import { Item } from './styles';
import AdditionalItem from '../list-item-additional';
import Add from '../add-burger/index';

class BurgerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      ingredients: this.props.ingredients,
      ingredientsList: undefined,
      quantity: 0,
    };
  }

  componentDidMount() {
    fetchIngredients().then(res => this.setState({ ingredientsList: res.data }));
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
    const additionalIngredients = this.state.ingredientsList;

    return this.state.ingredients && this.state.ingredientsList ? (
      <Item className="list-group-item">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 item">
              <h6 className="float-left">
                {this.state.title}
                <span>
                  {' '}
                  (
                  {this.state.ingredients.map((ingredient, index) => (index === this.state.ingredients.length - 1
                    ? `${this.state.ingredientsList[ingredient - 1].name}`
                    : `${this.state.ingredientsList[ingredient - 1].name}, `))}
                  )
                </span>
              </h6>
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
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2">
            {this.state.quantity > 0 ? (
              <div>
                <h6 className="pt-4 px-4">Adicionais</h6>
                {additionalIngredients.map(ingredient => (this.state.ingredients.includes(ingredient.id) ? (
                  <AdditionalItem name={ingredient.name} quantity={1} />
                ) : (
                  <AdditionalItem name={ingredient.name} quantity={0} />
                )))}
                <Add />
              </div>
            ) : null}
          </div>
        </div>
      </Item>
    ) : null;
  }
}

export default BurgerItem;
