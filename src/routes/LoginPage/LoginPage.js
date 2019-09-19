import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }
  state = {
    login: false
  }
  handleLoginSuccess = () => {

    this.props.login()
  }

  render() {
    return (
      <section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    )
  }
}
