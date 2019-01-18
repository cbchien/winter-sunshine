import React, {Component} from 'react'
import Heading from '../Common/heading';
import Footer from '../common/footer';

import Button from '../../components/Common/Button';
import DropDownSelect from '../../components/Common/Select';
import Input from '../../components/Common/Input';
import SkillCard from '../../components/SkillCard/SkillCard';

import {SKILL_LENGTH_OPTIONS} from './../../redux/constant/skills';

class LandingPage extends Component{
    test = (e) => {
        console.log('onChange', e.target.value)
    };

    test2 = (value) => {
        console.log('select', value)
    }

	render() {
        return(
			<div className="sunshine-landing-page">
				<Heading />
                Welcome to Sunshine Skills
				<Footer />
			</div>
		)
	}
}

export default LandingPage;

