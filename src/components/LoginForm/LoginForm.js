import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './LoginForm.css';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { loading: false, error: null }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ loading:true, error: null })
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
        this.setState({ error: res.message })
      })
  }

  render() {
    const { loading, error } = this.state
    return (
      <form
        className='LoginForm'
        autoComplete='off'
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
            placeholder='username'
            autoComplete='username'
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
            autoComplete='current-password'
            placeholder='password'
            id='LoginForm__password'/>
        </div>
        {loading && <span className='loading-msg'>Patience child<br/>I am loading...</span>}
        <button type='submit'>
          Login
        </button>
      </form>
    )
  }
}

export default LoginForm;
