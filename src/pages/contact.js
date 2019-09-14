import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Contactform from '../components/contactform';
import Spenden from '../components/spenden';

import '../styles/contact.scss';


class Contact extends Component {
  render() {

    return (
      <Layout location={this.props.location} >
          <div id="Content" className="Container">

            <div> 

              <section id="AboutHeader">

                <h1>Kontakt</h1>
                <div className="text contactdetails">
                  <div>
                    <span className="contact-name icon-pseudo">Christliches Kinderhilfswerk Luwero – Uganda e.V.</span>
                    <span className="contact-vorstand icon-pseudo">Vorstand:<br />Andreas Wicki, Vaihingen a. d. Enz<br />Dr. Priscilla Schneckenburger, Stuttgart<br />Hanna Schneckenburger, Rutesheim</span>
                    <span className="contact-phone icon-pseudo">07152 54758</span>
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
    );
  }
}

export default Contact;

