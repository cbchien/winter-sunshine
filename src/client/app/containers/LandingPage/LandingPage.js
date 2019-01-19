import React, {Component} from 'react'
import Heading from '../Common/heading';
import Footer from '../common/footer';
import SkillSelect from '../SkillSelect/SkillSelect'

import './LandingPage.scss'
import './LandingPage.rwd.scss'

class LandingPage extends Component{
	render() {
        return(
			<div className="sunshine-landing-page">
				<Heading />
                <article className="sunshine-landing-page__content">
                    <h1>Welcome to Sunshine Skills!</h1>
                    <p>This is a board to display your skills</p>
                    <SkillSelect />
                </article>
				<Footer />
			</div>
		)
	}
}

export default LandingPage;

