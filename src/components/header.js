import React from 'react'

import Navigation from './navigation'

import logo from '../images/logo.png';
import eyecatcher from '../images/schoolchildren.jpg';

var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")"
};

export default () => (
    <header className="HeroImage" style={eyecatcherBackground}>
      <div className="Container">
        <div className="LogoImage" >
          <img alt="Logo Christliches Kinderhilfswerk Luwero - Uganda e.V." src={logo} ></img>
        </div>
        <Navigation />
      </div>
    </header>
);
