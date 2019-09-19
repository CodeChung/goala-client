import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ error: null })
    const { username, password } = event.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={e => this.handleSubmit(e)}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            required
            name='username'
            id='LoginForm__user_name'/>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            id='LoginForm__password'/>
        </div>
        <button type='submit'>
          Login
        </button>
      </form>
    )
  }
}

export default LoginForm;
