import React, { Component } from 'react';

export default class Palette extends Component {
  constructor(props) {
    super(props);

    this.onSelectRed = this.onSelectRed.bind(this);
    this.onSelectGreen = this.onSelectGreen.bind(this);
    this.onSelectBlue = this.onSelectBlue.bind(this);
  }

  onSelectRed() {
    this.props.onColorSelect('red');
  }

  onSelectGreen() {
    this.props.onColorSelect('green');
  }

  onSelectBlue() {
    this.props.onColorSelect('blue');
  }

  render() {
    return (<div className="palette">
      <div className="palette-element"><h3>Color Palette</h3></div>
      <div
        onClick={this.onSelectRed}
        className="palette-element red"
      >
      </div>
      <div
        onClick={this.onSelectGreen}
        className="palette-element green"
      >
      </div>
      <div
        onClick={this.onSelectBlue}
        className="palette-element blue"
      >
      </div>
    </div>);
  }
}

Palette.propTypes = {
  onColorSelect: React.PropTypes.func.isRequired,
};
