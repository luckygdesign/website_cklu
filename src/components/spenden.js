import React from 'react';

import Img from 'gatsby-image';
import { MiscButton } from './misc';

export default () => (
  	<section id="Spenden">
		<h3>Spenden</h3>
		<p>Sie möchten Pastor Gabriel Kijjambu finanziell unterstützen? Wir freuen uns auf eine Spende auf folgende Kontoverbindung:</p>
		<span>IBAN: DE12 2345 5678 8901 1234 4567 78</span>
		<span>BIC: ASDF1234JKL</span>
		<p>Gerne stellen wir Ihnen eine Spendenbescheinigung aus. Bitte kontaktieren Sie uns:</p>
		<MiscButton link="/contact" cssclass="button button-primary" text="Kontakt" />
	</section>
)