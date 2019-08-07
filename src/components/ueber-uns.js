import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import { faDonate } from '@fortawesome/free-solid-svg-icons'

library.add(faCircle, faPrayingHands, faHandsHelping, faDonate)

export default () => (
	<section className="About">
	  <div className="Container">
	    
	    <h1>Christliches Kinderhilfswerk Luwero - Uganda</h1>
	    <p>Herzlich willkommen auf unserer Website!</p>
	    <p>Als einer Gruppe deutscher Christen unterstützen wir die Arbeit von Pastor Gabriel Kijjambu in Afrika. Unsere gemeinsame Vision ist es, Kindern in Luwero, Uganda eine Heimat zu bieten und sie zu Christus zu führen.</p>
		<p>Sie möchten mehr über die Arbeit erfahren? Sie teilen unsere Vision und möchten sich in unsere Arbeit einbringen?</p>
	    
	  </div> 
	  <div className="Container">
	  	<h3>Werden Sie Teil unserer Arbeit!</h3>
	  	<div className="About-GetInTouch">
	  		<div>
	  			<span className="icon fa-stack fa-3x">
		  			<FontAwesomeIcon icon="circle" className="fa-stack-2x" />
					<FontAwesomeIcon icon="praying-hands" inverse className="fa-stack-1x" />
	  			</span>
	  			<span className="heading">Beten</span>
	  			<span>Herzlich willkommen auf unserer Website!</span>
	  		</div>
	  		<div>
	  			<span className="icon fa-stack fa-3x">
		  			<FontAwesomeIcon icon="circle" className="fa-stack-2x" />
					<FontAwesomeIcon icon="hands-helping" inverse className="fa-stack-1x" />
	  			</span>
	  			<span className="heading">Patenschaften</span>
	  			<span>Herzlich willkommen auf unserer Website!</span>
	  		</div>
	  		<div>
	  			<span className="icon fa-stack fa-3x">
		  			<FontAwesomeIcon icon="circle" className="fa-stack-2x" />
					<FontAwesomeIcon icon="donate" inverse className="fa-stack-1x" />
	  			</span>
	  			<span className="heading">Spenden</span>
	  			<span>Herzlich willkommen auf unserer Website!</span>
	  		</div>
	  	</div>
	  </div>
	</section>
);