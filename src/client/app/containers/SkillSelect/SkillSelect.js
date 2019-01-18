/* eslint no-undef: 0 */
import React, {Component} from 'react'

import Button from '../../components/Common/Button';
import DropDownSelect from '../../components/Common/Select';
import Input from '../../components/Common/Input';
import SkillCard from '../../components/SkillCard/SkillCard';

import {SKILL_LENGTH_OPTIONS} from './../../redux/constant/skills';

class SkillSelect extends Component{
    constructor(props) {
        super(props);
        this.state = {
            skillName: '',
            skillExperience: '',
            // dummy data
            skills: [
                {
                  "id": 123,
                  "name": "React",
                  "expirience": "0to1"
                },
                {
                  "id": 124,
                  "name": "Express.js",
                  "expirience": "1to3"
                }
            ]
        };

        this.AddSkill = this.AddSkill.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onExperienceSelect = this.onExperienceSelect.bind(this)
        this.generateSkillCards = this.generateSkillCards.bind(this)
    }

    AddSkill = () => {
        let re = new RegExp('^[a-zA-Z0-9]*$')
        let {skills, skillName, skillExperience} = this.state

        // Input checks
        if (!skillName && !skillExperience) {
            alert('Please enter skill and select experience')
            return false
        } else if (!skillExperience) {
            alert('Please select experience years')
            return false
        } else if (!skillName) {
            alert('Please enter skill')
            return false
        } else if (skillName.length < 4 || skillName.length > 255) {
            alert('Skills must be a minimum length of 4 characters and a maximum length of 255 characters.')
            return false
        } else if (skills.some(skill => {return skill.name == skillName})) {
            alert('Skill exist. No update function yet')
            return false
        } else if (!skillName.match(re)) {
            alert('Skill name must only contain numbers and letters')
            return false
        }

        let newId = this.state.skills[this.state.skills.length -1].id + 1
        skills.push({
            id: newId,
            name: skillName,
            expirience: skillExperience.value
        })

        // add new skill and reset inputs
        this.setState({
            skills: skills,
            skillName: '',
            skillExperience: '',
        })
    }

    onNameChange = (e) => {
        this.setState({
            skillName: e.target.value,
        })
    }

    onExperienceSelect = (option) => {
        this.setState({
            skillExperience: option,
        })
    }

    generateSkillCards = () => {
        let skillCards 
        if (this.state.skills) {
            skillCards = this.state.skills.map((skill, i) => {
                return <SkillCard
                    key={skill.id}
                    index={i+1}
                    title={skill.name}
                    skillLevel={SKILL_LENGTH_OPTIONS.find(s => {return s.value == skill.expirience}).label}
                    highlighted={(i+1) <= 5 ? true : false}
                    onClick={this.test2}
                />
            })
        } else {
            skillCards = ''
        }
        return skillCards
    }

	render() {
        return(
			<section className="sunshine-skill-select">
                <div>
                    <Input
                        value={this.state.skillName}
                        onChange={this.onNameChange}
                    />
                    <DropDownSelect
                        value={this.state.skillExperience}
                        onChange={this.onExperienceSelect}
                        placeholder='experience'
                        options={SKILL_LENGTH_OPTIONS}
                    />
                    <Button
                        onClick={this.AddSkill}
                        disabled={!this.state.skillName || !this.state.skillExperience ? true : false}
                    >
                        Add Skills
                    </Button>
                </div>
                <div>
                    {this.state.skills && this.state.skills.length > 0 ? this.generateSkillCards() : ''}
                </div>
			</section>
		)
	}
}

export default SkillSelect;

