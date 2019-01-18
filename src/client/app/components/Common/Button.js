import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Button.scss';

const Button = ({ children, onClick, className, disabled, ...props }) => {   
    const css = classnames('sunshine-btn', className, disabled ? 'btn-disabled':'' );

    return (
      <button className={css} onClick={onClick} {...props}>
       {children}    
      </button>
    );
};

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    className: PropTypes.string,
    props: PropTypes.any,
    disabled: PropTypes.bool
};

export default Button