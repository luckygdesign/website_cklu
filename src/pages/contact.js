import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

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
            </section>

          </div> 
      </Layout>
    );
  }
}

export default Contact;

