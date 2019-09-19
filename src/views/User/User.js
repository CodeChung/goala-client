import React from 'react';
import { Redirect, Switch, Link, Route } from 'react-router-dom';
import GoalPage from '../../routes/GoalPage/GoalPage';
import CoachPage from '../../routes/CoachPage/CoachPage';
import MissingPage from '../../routes/MissingPage/MissingPage';
import './User.css'

class User extends React.Component {
    state = {
        display: ''
        
    }
    showNav() {
        this.setState({display: ''})
    }
    hideNav() {
        this.setState({display: 'hidden'})
    }
    render() {
        return (
            <section className='user view'>
                <nav className={this.state.display}>
                    <Link to='/'>
                        <span className='logo'>
                            Coach
                        </span>
                    </Link>
                    <Link to='/login' onClick={() => this.props.logout()}>Logout</Link>
                </nav>
                <main>
                    <Switch>
                        <Route exact path='/' 
                            render={() => <GoalPage
                                hideNav={() => this.hideNav()}/>}/>
                        <Route path='/login' render={() => <Redirect to='/'/>}/>
                        <Route path='/goal/:goalId' 
                            render={({match}) => <CoachPage
                                match={match}
                                showNav={() => this.showNav()}/>}/>
                        <Route component={MissingPage}/>
                    </Switch>
                </main>
            </section>
        )
    }
}

export default User;