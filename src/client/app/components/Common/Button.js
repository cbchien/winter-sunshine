import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Button.scss';

const Button = ({ children, onClick, className, ...props }) => {   
    const css = classnames('sunshine-btn', className );

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
};

export default Button