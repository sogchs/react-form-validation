import React, { Component } from 'react';

export default class Form extends Component {
  render = () => (
    <div className="Form">
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Text input" value="bulma" />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>

          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p class="help is-success">This username is available</p>
        <p class="help is-danger">This email is invalid</p>
      </div>

      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>
  );
}