import React, { Component}  from 'react';
import PropTypes from 'prop-types';

export const Temp = ({ temperature }) => <h2>{temperature}<sup>&#8451;</sup></h2>;

Temp.propTypes = {
	temperature: PropTypes.number.isRequired
};

export default Temp;