import React from 'react';
import PropTypes from 'prop-types';

export const Conditions = ({ conditions }) =>
	<div className="Conditions">
		{Object.keys(conditions).map((key) => {
			return <span key={key}>{conditions[key].main}</span>
		})}
	</div>

Conditions.propTypes = {
	conditions: PropTypes.array.isRequired
};

export default Conditions;
