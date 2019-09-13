import React from 'react'


class Contactform extends React.Component {
  state = {
    status: 'default',
    statusMessage: '',
    data: {
      name: '',
      email: '',
      message: '',
    },
  }

  submit = e => {
    e.preventDefault()

    this.setState({statusMessage: 'Email wird gesendet, bitte warten', status: 'form-sending'});

    let {
      data: { name, email, message },
    } = this.state

    fetch('https://us-central1-handle-fcb54.cloudfunctions.net/addMessage', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        project: 'cklu',
      }),
    }).then(res => {
      if (!res.ok) {
        throw Error(res.text());
      }
      return res;
    }).then(res => {
      this.setState({ statusMessage: 'Email wurde erfolgreich gesendet', status:'form-success'});
    }).catch(err => {
      this.setState({ statusMessage: 'Email konnte nicht versendet werden', status:'form-failed'});
    })
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(state => ({
      data: Object.assign({}, state.data, { [name]: value }),
    }))
  }

  render() {
    let { data } = this.state

    return (
      <form
        id="ContactForm"
        action="https://us-central1-handle-fcb54.cloudfunctions.net/addMessage"
        onSubmit={this.submit}
      >
        <div className="small">
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Vorname Nachname"
            value={data.name}
            onChange={this.handleChange}
          />
        </div>

        <div className="small">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="ich@example.de"
            value={data.email}
            onChange={this.handleChange}
          />
        </div>

        <div className="big">
          <label>Nachricht</label>
          <textarea
            name="message"
            required
            placeholder="Hallo..."
            rows="7"
            value={data.message}
            onChange={this.handleChange}
          />
        </div>

        <button className="button" type="submit">Absenden</button>

        <div className={`formstatus ${this.state.status}`}>
          <span>{this.state.statusMessage}</span>
        </div>

      </form>
    )
  }
}

// tbd

export default Contactform