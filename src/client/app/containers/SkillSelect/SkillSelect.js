/* eslint no-undef: 0 */
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../components/Common/Button';
import DropDownSelect from '../../components/Common/Select';
import Input from '../../components/Common/Input';
import SkillCard from '../../components/SkillCard/SkillCard';

import {SKILL_LENGTH_OPTIONS, fetchSkillsStart, addSkillStart, deleteSkillStart} from './../../redux/constant/skills';
import {fetchSkillsRequest, addSkillRequest, deleteSkillRequest} from './../../action/skills/skillsRequest';

class SkillSelect extends Component{
    static propTypes = {
        skills: PropTypes.array,
        fetchData: PropTypes.func,
        addSkill: PropTypes.func,
        deleteSkill: PropTypes.func
    };

    constructor(props) {
        super(props);
        
        this.state = {
            skillName: '',
            skillExperience: '',
        };

        this.resetState = this.resetState.bind(this)
        this.addSkill = this.addSkill.bind(this)
        this.removeSkill = this.removeSkill.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onExperienceSelect = this.onExperienceSelect.bind(this)
        this.generateSkillCards = this.generateSkillCards.bind(this)
    }

    componentDidMount() {
        this.props.fetchData()
    }

    resetState = () => {
        this.setState({
            skillName: '',
            skillExperience: '',
        })
    }

    addSkill = () => {
        let re = new RegExp('^[a-zA-Z0-9]*$')
        let { skillName, skillExperience } = this.state
        let { skills } = this.props

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

        // Add 1 to the largest id to prevent duplication
        let newId = this.props.skills.reduce((a,b) => { return Math.max(a.id, b.id);}) + 1
    
        let newSkill = {
            id: newId,
            name: skillName,
            expirience: skillExperience.value
        }

        if(!this.props.addSkill) { return }

        this.props.addSkill(newSkill).then(()=>{
            this.props.fetchData()
            this.resetState()
        })
    }

    removeSkill = (id) => {
        if (!this.props.deleteSkill) {return}

        this.props.deleteSkill(id).then(()=>{
            this.props.fetchData()
            this.resetState()
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
        if (this.props.skills) {
            skillCards = this.props.skills.map((skill, i) => {
                return <SkillCard
                    key={skill.id}
                    index={i+1}
                    title={skill.name}
                    skillLevel={SKILL_LENGTH_OPTIONS.find(s => {return s.value == skill.expirience}).label}
                    highlighted={(i+1) <= 5 ? true : false}
                    onClick={this.removeSkill.bind(this, skill.id)}
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
                        onClick={this.addSkill}
                        disabled={!this.state.skillName || !this.state.skillExperience ? true : false}
                    >
                        Add Skills
                    </Button>
                </div>
                <div>
                    {this.props.skills && this.props.skills.length > 0 ? this.generateSkillCards() : ''}
                </div>
			</section>
		)
	}
}

const mapStateToProps = state => ({
    skills: state.skill.items,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(fetchSkillsStart())
            return dispatch(fetchSkillsRequest('http://localhost:3000/skills'))
        },
        addSkill: (newSkill) => {
            dispatch(addSkillStart())
            return dispatch(addSkillRequest('http://localhost:3000/skills', newSkill))
        },
        deleteSkill: (id) => {
            dispatch(deleteSkillStart())
            return dispatch(deleteSkillRequest('http://localhost:3000/skills', id))
        },
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(SkillSelect);
