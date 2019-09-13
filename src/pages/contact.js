import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Contactform from '../components/contactform';

import '../styles/contact.scss';


class Contact extends Component {
  render() {

    return (
      <Layout location={this.props.location} >
          <div id="Content" className="Container">

            <section id="AboutHeader">

              <h2>Kontakt</h2>
              <div className="text">
                <p>Sie möchten mit uns in Kontakt treten?</p>

              </div>

              <div className="contactform">
                <h3>Nutzen Sie das Kontaktformular</h3>

                <Contactform />
              </div>
            </section>

          </div> 
      </Layout>
    );
  }
}

export default Contact;

