import React, { Component } from 'react';

import Palette from './Palette';
import Canvas from './Canvas';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { color: '' };

    this.onColorSelect = this.onColorSelect.bind(this);
  }

  onColorSelect(newColor) {
    this.setState({ color: newColor });
    console.log(this.state.color);
  }

  render() {
    return (<div className="container">
      <Palette onColorSelect={this.onColorSelect} />
      <Canvas currentColor={this.state.color} />
    </div>);
  }
}
