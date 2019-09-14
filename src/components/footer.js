import React from 'react';
import { Link } from 'gatsby';

export default () => (
	<footer id="Footer">
      <div className="Container">
        <span>Christliches Kinderhilfswerk Luwero - Uganda e.V.</span>
        <Link className="legal" to="/datenschutz">Datenschutzerklärung</Link>
        <Link className="legal" to="/impressum">Impressum</Link>
      </div>
    </footer>
);