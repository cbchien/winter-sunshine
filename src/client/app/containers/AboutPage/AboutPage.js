import React, {Component} from 'react'
import Heading from '../Common/heading';
import Footer from '../common/footer';

import './AboutPage.scss'

class AboutPage extends Component{
	render() {
        return(
			<div className="sunshine-landing-page">
				<Heading />
                    <article className="sunshine-about-page__article">
                        <h1>About the Page</h1>
                        <p>
                            Lorem ipsum dolor sit amet, eu per alii modo, commodo aperiri tractatos ius ei. 
                            Sea at debet maiestatis, eos eu congue regione. Ei partem perfecto nam, at eam velit admodum,
                            vim ei postea mollis bonorum.
                        </p> 
                        <p>
                            Nam an habeo quidam constituto, fastidii recusabo duo id. 
                            His cu maiestatis scripserit. Aliquam constituam mei ex, no vix tation graece suscipiantur.
                        </p>
                    </article>

                    <article className="sunshine-about-page__article">
                        <h1>About the Developer</h1>
                            <p>
                                Sed eu senserit scriptorem instructior, eu partem iudicabit vituperatoribus quo. Volumus 
                                officiis adversarium te qui, eu zril copiosae sententiae mei. Doming appetere no eum, ei 
                                inimicus necessitatibus est, no ius quis accusata. Iudico decore an vis. Ut prima pertinacia 
                                nec, at congue feugait qui.
                            </p>
                        <h2>Subsection</h2>
                            <p>
                                Ea mei apeirian assueverit. Eos cu vivendum senserit, lorem verterem sed te, nec cu 
                                postulant constituam. Dico latine sapientem mei ei.
                            </p>
                    </article>
				<Footer />
			</div>
		)
	}
}

export default AboutPage;

