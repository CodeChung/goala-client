import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const { name, username, password } = event.target
    
    this.setState({ error: null })

    AuthApiService.postUser({
      username: username.value,
      name: name.value,
      password: password.value
    })
      .then(user => {
        name.value = ''
        password.value = ''
        username.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='reg-name'>
          <label htmlFor='registration-name'>
            Name
          </label>
          <input
            name='name'
            type='text'
            required
            id='registration-name'>
          </input>
        </div>
        <div className='reg-username'>
          <label htmlFor='registration-username'>
            Username
          </label>
          <input
            name='username'
            type='text'
            required
            id='registration-username'>
          </input>
        </div>
        <div className='reg-password'>
          <label htmlFor='registration-password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            required
            id='registration-password'>
          </input>
        </div>
        <button type='submit'>
          Register
        </button>
      </form>
    )
  }
}

export default RegistrationForm;