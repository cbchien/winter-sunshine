import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import './Select.scss';

const DropDownSelect = (props) => {
	const { className, ...otherProps } = props;

	return (
		<Select
			className={`sunshine-select ${className}`}
			isSearchable={false}
			isClearable={false}
			backspaceRemovesValue={false}
			{...otherProps}
		/>
	);
}

DropDownSelect.propTypes = {
	onChange: PropTypes.func,
	children: PropTypes.any,
	className: PropTypes.string,
};

export default DropDownSelect