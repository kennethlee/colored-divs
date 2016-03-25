import React, { Component } from 'react';

export default class Canvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstDivColor: '',
      secondDivColor: '',
      thirdDivColor: '',
      fourthDivColor: '',
    };

    this.updateFirstDivColor = this.updateFirstDivColor.bind(this);
    this.updateSecondDivColor = this.updateSecondDivColor.bind(this);
    this.updateThirdDivColor = this.updateThirdDivColor.bind(this);
    this.updateFourthDivColor = this.updateFourthDivColor.bind(this);
  }

  updateFirstDivColor() {
    this.setState({ firstDivColor: this.props.currentColor });
  }

  updateSecondDivColor() {
    this.setState({ secondDivColor: this.props.currentColor });
  }

  updateThirdDivColor() {
    this.setState({ thirdDivColor: this.props.currentColor });
  }

  updateFourthDivColor() {
    this.setState({ fourthDivColor: this.props.currentColor });
  }

  render() {
    return (<div className="canvas">
      <div
        onClick={this.updateFirstDivColor}
        className={this.state.firstDivColor}
      >
      </div>

      <div
        onClick={this.updateSecondDivColor}
        className={this.state.secondDivColor}
      >
      </div>

      <div
        onClick={this.updateThirdDivColor}
        className={this.state.thirdDivColor}
      >
      </div>

      <div
        onClick={this.updateFourthDivColor}
        className={this.state.fourthDivColor}
      >
      </div>

    </div>);
  }
}

Canvas.propTypes = {
  currentColor: React.PropTypes.string.isRequired,
};
