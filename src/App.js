import React, { Component } from 'react';
import { fetchIngredients, fetchRecipes } from './services/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: undefined,
      recipes: undefined,
    };
  }

  componentDidMount() {
    fetchIngredients().then(res => this.setState({ ingredients: res.data }));
    fetchRecipes().then(res => this.setState({ recipes: res.data }));
  }

  render() {
    return <div className="app" />;
  }
}

export default App;
