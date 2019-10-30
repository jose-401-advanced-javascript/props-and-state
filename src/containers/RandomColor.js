import React, { Component } from 'react';
import ColorDisplay from '../components/colors/ColorDisplay';

const randomColor = () => {
  const colors = ['purple', 'yellow', 'red', 'blue'];
  const i = Math.floor(Math.random() * colors.length);
  return colors[i];
};

export default class RandomColors extends Component {
  state = {
    backgroundColor: 'purple'
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ backgroundColor: randomColor() });
    }, 1000); 
  }

  render() {
    const { backgroundColor } = this.state;

    return (
      <ColorDisplay backgroundColor={backgroundColor} />
    );
  }
}
