import React from 'react';
import User from './views/User/User';
import NonUser from './views/NonUser/NonUser';
import './App.css';
import TokenService from './services/token-service';
import { GoalContext } from './context/GoalContext';

class App extends React.Component {
  state = {
    user: false
  }
  login() {
    this.setState({ user: true })
  }
  logout() {
    TokenService.clearAuthToken()
    this.setState({ user: false })
  }
  render() {
    const currentView = TokenService.hasAuthToken() ? <User logout={() => this.logout()}/> : <NonUser login={() => this.login()}/>
    return (
      <div className="App">
        {currentView}
      </div>
    );
  }
}

App.contextType = GoalContext;

export default App;
