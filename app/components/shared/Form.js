import React from 'react';
import { FormBase } from 'react-serial-forms';

export default class BootstrapForm extends FormBase {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form {...this.props} onSubmit={this.props.onSubmit} method={this.props.method}>
          {this.props.children}
      </form>
    );
  }
}

