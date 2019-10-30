import React from 'react';
import PropTypes from 'prop-types';

const randomColor = (colors) => {
  const i = Math.floor(Math.random() * colors.length);
  return colors[i];
};

const RandomColorPicker = ({ colors }) => {

  const styles = {
    background: randomColor(colors),
    width: '50em',
    height: '50em'
  };


  return (
    <div style={styles}></div>
  );

};

RandomColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default RandomColorPicker;
