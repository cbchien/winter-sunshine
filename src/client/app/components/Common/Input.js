import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Input.scss';

const Input = ({ className, ...otherProps }) => {   
    const css = classnames('sunshine-input-text', className );

    return (
        <input 
            type="text"
            className={css}
            {...otherProps} />
    );
};

Input.propTypes = {
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default Input