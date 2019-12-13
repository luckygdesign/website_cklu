import React from 'react';

import Img from 'gatsby-image';
import { MiscButton } from './misc';

export default () => (
  	<section id="Spenden" className="sidebar">
		<h3>Spenden</h3>
		<p>Sie möchten Bischof Gabriel Kijjambu finanziell unterstützen? Wir freuen uns auf eine Spende auf folgende Kontoverbindung:</p>
		<span>IBAN: DE24 6035 0130 0001 0955 26<br />BIC BBKRDE6BXXX</span>
		<p>Gerne stellen wir Ihnen eine Spendenbescheinigung aus. Bitte kontaktieren Sie uns:</p>
		<MiscButton link="/contact" cssclass="button button-primary" text="Kontakt" />
	</section>
)