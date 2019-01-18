import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './footer.scss'

class Footer extends Component {
	render() {

		return(
			<footer className="sunshine-footer">
				<p className="sunshine-footer__title text-center">Simple React App</p>
				<p className="sunshine-footer__text text-center">
					Built with love <FontAwesomeIcon icon={faHeart} /> by 
					<a href="https://github.com/cbchien"> cbchien <FontAwesomeIcon icon={faGithub}/></a>
				</p>
			</footer>
		)
	}
}

export default Footer;