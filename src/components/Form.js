import React, { Component } from 'react';

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
export default class Form extends Component {
    state = {
    email: '',
    error: true,
    touch: false 
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      error: !emailRegexp.test(value) || this.props.emails.includes(value)
    })
  }

  handleBlur = (event) => {
    this.setState({touch: true})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addEmail(this.state.email); //despues de añadir el mail pone todo a cero
    this.setState({
      email: '',
      error: true,
      touch: false
    })
  }



  render = () => (
    <form className="Form" onSubmit={this.handleSubmit}>
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-dark" name="email" type="text" placeholder="Text input"
            autocomplete="off"
            value={this.state.email} 
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>

          <span className="icon is-small is-right">
          {this.state.touch && !this.state.error && (
            <i className="fas fa-check"></i>
          )}
          </span>
        </div>

        {this.state.touch && !this.state.error && (
          <p className="help is-success">This username is available</p>
        )}

        {this.state.touch && this.state.error && (
        <p className="help is-danger">This email is invalid</p>
        )}
      </div>

      <div className="control">
        <button className="button is-link" disabled={this.state.error}>Submit</button>
      </div>
    </form>
  );
}