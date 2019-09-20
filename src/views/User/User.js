import React from 'react';
import { Redirect, Switch, Link, Route } from 'react-router-dom';
import CoachPage from '../../routes/CoachPage/CoachPage';
import MissingPage from '../../routes/MissingPage/MissingPage';
import './User.css'
import HomePage from '../../routes/HomePage/HomePage';
import SideBar from '../../components/SideBar/SideBar';

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
                <SideBar logout={() => this.props.logout()}/>
                <main>
                    <Switch>
                        <Route exact path='/' 
                            component={HomePage}/>
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