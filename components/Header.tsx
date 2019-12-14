import React from 'react';
import Link from 'next/link';
import Navigation from './navigation';

var eyecatcherBackground = {
  backgroundImage: "url(/images/schoolchildren.jpg)"
};

interface IProps {
}

interface IState {
	navbar: string
}


class Header extends React.Component<IProps, IState> {

	constructor(props) {
		super(props);
		this.state = {navbar: 'menu-collapse'};
    	// This binding is necessary to make `this` work in the callback
    	this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (this.state.navbar === 'menu-collapse') {
			this.setState(({navbar: ''}));
		} else {
			this.setState(({navbar: 'menu-collapse'}));
		}
	}


	render() {

		return(
			<header className="HeroImage" style={eyecatcherBackground}>
		      <div className="Container">
		        <div id="LogoImage" >
    		      	<Link href="/">
						  <a>
						  	<img className="logo-default" alt="Logo Christliches Kinderhilfswerk Luwero - Uganda e.V." src={'/images/logo-xs.png'} />
						  </a>
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
