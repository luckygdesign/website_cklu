import React from 'react';
import Link from 'next/link';

export default () => (
	<footer id="Footer">
      <div className="Container">
        <span>Christliches Kinderhilfswerk Luwero - Uganda e.V.</span>
        <Link href="/datenschutz"><a className="legal">Datenschutzerklärung</a></Link>
        <Link href="/impressum"><a className="legal">Impressum</a></Link>
      </div>
    </footer>
);