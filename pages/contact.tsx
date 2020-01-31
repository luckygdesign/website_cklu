import * as React from 'react'
import Mailto from 'react-protected-mailto'

// import context and interface

// import components
import Layout from '../components/Layout'
import Contactform from '../components/Contactform';
import Spenden from '../components/Spenden';

// import style
import '../styles/contact.scss';

const ContactPage: React.FunctionComponent = () => {
  return (
    <Layout title="Kontakt" >
      <div id="Content" className="Container">
        <div> 
          <section id="AboutHeader">

            <h1>Kontakt</h1>
            <div className="text contactdetails">
              <div>
                <span className="contact-name icon-pseudo">Christliches Kinderhilfswerk Luwero – Uganda e.V.</span>
                <span className="contact-vorstand icon-pseudo">Vorstand:<br />Andreas Wicki, Vaihingen a. d. Enz<br />Dr. Priscilla Schneckenburger, Stuttgart<br />Hanna Schneckenburger, Rutesheim</span>
                <span className="contact-email icon-pseudio"><Mailto email="kontakt@ckluganda.de"/></span>
                <span className="contact-phone icon-pseudo"><Mailto tel="07152 54758" /></span>
                <span className="contact-address icon-pseudo">Hegelstraße 44, 71277 Rutesheim</span>
              </div>
            </div>

            <div className="contactform">
              <h3>Nutzen Sie das Kontaktformular</h3>
              <Contactform />
            </div>
          </section>

          <Spenden />

        </div>

      </div> 
    </Layout>
  )
}

export default ContactPage;