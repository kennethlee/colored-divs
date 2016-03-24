import React, { Component } from 'react';

import Palette from './Palette';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { color: '' };
  }

  render() {
    return (
      <Palette />
    );
  }
}
