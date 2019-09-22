import React from 'react';
import {Link} from 'gatsby';

import Navigation from './navigation';

import logo from '../images/logo-xs.png';
import eyecatcher from '../images/schoolchildren.jpg';

var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")"
};

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {navbar: 'menu-collapse'};
    	// This binding is necessary to make `this` work in the callback
    	this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (this.state.navbar === 'menu-collapse') {
			this.setState( state => ({navbar: ''}));
		} else {
			this.setState( state => ({navbar: 'menu-collapse'}));
		}
	}


	render() {

		return(
			<header className="HeroImage" style={eyecatcherBackground}>
		      <div className="Container">
		        <div id="LogoImage" >
    		      	<Link to="/">
			         	<img className="logo-default" alt="Logo Christliches Kinderhilfswerk Luwero - Uganda e.V." src={logo} />
			       	</Link>
		        </div>

	        	<button id="NavigationToggle" onClick={this.handleClick}>Menü</button>
		        <div  onClick={this.handleClick} id="Navigation" className={this.state.navbar}>
		        	<Navigation />
		    	</div>
		      </div>
		    </header>
		)
	} 
}

export default Header;
