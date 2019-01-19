import React from 'react';
import { shallow } from './../../../enzyme';

import SkillSelect from './SkillSelect';

/**
 * Enzyme test for SkillSelect react components 
 */
describe('SkillSelect tests', () => {
    const skills = [
        {
        "id": 123,
        "name": "React",
        "experience": "0to1"
        },
        {
        "id": 124,
        "name": "Express.js",
        "experience": "1to3"
    }];

    it('renders SkillSelect', () => {
        const wrapper = shallow(<SkillSelect skills={skills} />);
        // Expect the wrapper object to be defined
        expect(wrapper.find('.sunshine-skill-select__cards')).toBeDefined();
    });

    // TODO:
    // 'check card rendering'

});