import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './heading.scss'

class Heading extends Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<header className="sunshine-header">
                <span className="sunshine-header__title">Sunshine Skill</span>
                <div className="sunshine-header__nav">
                    <Link to="/" className="sunshine-header__nav-item">Home</Link>
                    <Link to="/about" className="sunshine-header__nav-item">About</Link>
                </div>
			</header>
		)
	}
}

export default Heading;
