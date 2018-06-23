import React from 'react';
import PropTypes from 'prop-types';


const TheCity = ({ city }) => <h2 className="TheCity">{city}</h2>;

TheCity.propTypes = {
  city: PropTypes.string.isRequired
};

export default TheCity;