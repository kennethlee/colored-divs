import React, { Component } from 'react';

import Palette from './Palette';

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
    return (
      <Palette onColorSelect={this.onColorSelect} />
    );
  }
}
