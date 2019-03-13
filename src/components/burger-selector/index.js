/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Select } from './styles';
import { fetchRecipes, fetchIngredients } from '../../services/api';
import BurgerItem from './list-item-burger';
import AdditionalItem from './list-item-additional';
import Add from './add-burger';

class Selector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      recipes: undefined,
      ingredientList: undefined,
    };
  }

  componentDidMount() {
    fetchRecipes().then(res => this.setState({ recipes: res.data }));
    fetchIngredients().then(res => this.setState({ ingredientList: res.data }));
  }

  render() {
    return this.state.recipes && this.state.ingredientList ? (
      <Select className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 collapse-header">
            <h4 className="float-left">{this.state.title}</h4>
            <a
              className="float-right"
              data-toggle="collapse"
              href={`#selector-body${this.props.index}`}
              aria-expanded="false"
              aria-controls={`selector-body${this.props.index}`}
            >
              <i className="fas fa-chevron-down" />
              <i className="fas fa-chevron-up" />
            </a>
          </div>
        </div>
        <div className="row collapse selector-body" id={`selector-body${this.props.index}`}>
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2">
            <ul className="list-group">
              {this.props.type === 'default'
                ? this.state.recipes.map(recipe => (
                  <BurgerItem title={recipe.name} ingredients={recipe.ingredientsIds} />
                ))
                : this.state.ingredientList.map(ingredient => (
                  <AdditionalItem name={ingredient.name} quantity={0} />
                ))}
              {this.props.type !== 'default' ? <Add /> : null}
            </ul>
          </div>
        </div>
      </Select>
    ) : null;
  }
}

export default Selector;
