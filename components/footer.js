import React from 'react';
import Link from 'next/link';

export default () => (
	<footer id="Footer">
      <div className="Container">
        <span>Christliches Kinderhilfswerk Luwero - Uganda e.V.</span>
        <Link className="legal" href="/datenschutz">Datenschutzerklärung</Link>
        <Link className="legal" href="/impressum">Impressum</Link>
      </div>
    </footer>
);