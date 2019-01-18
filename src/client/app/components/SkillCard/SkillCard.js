import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './SkillCard.scss';

const SkillCard = (props) => {
  const { className, index, title, skillLevel } = props;

  return (
    <div className={`sunshine-skill-card ${className}`}>
        <div className='skill-card-left-section'>
            {index}
        </div>
        <div className='skill-card-center-section'>
            <div>{title}</div>
            <div>{skillLevel}</div>
        </div>
        <div className='skill-card-right-section'>
            <FontAwesomeIcon icon={faTimes} />
        </div>
    </div>
  );
}

SkillCard.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  index: PropTypes.number,
  skillLevel: PropTypes.string,
  title: PropTypes.string,
};

export default SkillCard