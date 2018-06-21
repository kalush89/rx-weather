import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';


const WeatherIconDisplay = ({ iconDys }) => <WeatherIcon name='owm' iconId={iconDys} className='icon' fixedWidth={true}/>;

WeatherIconDisplay.propTypes = {
  iconDys: PropTypes.string.isRequired
};

export default WeatherIconDisplay;