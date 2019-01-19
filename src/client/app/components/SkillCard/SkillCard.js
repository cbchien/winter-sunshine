import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './SkillCard.scss';

const SkillCard = (props) => {
    const { className, index, title, skillLevel, highlighted, onClick } = props;
    const highlightedCss = classnames('skill-card-left-section', highlighted ? 'card-highlighted' : '')
    const css = classnames('sunshine-skill-card', className)
    
    return (
        <div className={css}>
            <div className={highlightedCss}>
                {index}
            </div>
            <div className='skill-card-center-section'>
                <div>{title}</div>
                <div>{skillLevel}</div>
            </div>
            <div className='skill-card-right-section'>
                <FontAwesomeIcon icon={faTimes} onClick={onClick}/>
            </div>
        </div>
    );
}

SkillCard.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
  skillLevel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  highlighted: PropTypes.bool,
  onClick: PropTypes.func
};

export default SkillCard