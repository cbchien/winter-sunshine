import React from 'react';
import { shallow } from './../../../enzyme';
import Button from './Button';

describe(`Component Button`, () => {
    it('renders Button', () => {
        const wrapper = shallow(<Button>123</Button>);
        expect(wrapper.find('.sunshine-btn')).toBeDefined();
        // children passed to component
        expect(wrapper.find('.sunshine-btn').text()).toEqual("123"); 
      });
})