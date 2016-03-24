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
    return (<table className="palette">
      <thead>
        <tr>
          <th>Palette</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td onClick={this.onSelectRed}>Red</td>
        </tr>
        <tr>
          <td onClick={this.onSelectGreen}>Green</td>
        </tr>
        <tr>
          <td onClick={this.onSelectBlue}>Blue</td>
        </tr>
      </tbody>
    </table>);
  }
}

Palette.propTypes = {
  onColorSelect: React.PropTypes.func.isRequired,
};
