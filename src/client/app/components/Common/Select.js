import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import classnames from 'classnames';

import './Select.scss';

const DropDownSelect = (props) => {
	const { className, ...otherProps } = props;
    const css = classnames('sunshine-select', className );

	return (
		<Select
			className={css}
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