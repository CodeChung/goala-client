import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import MissingPage from '../../routes/MissingPage/MissingPage';
import './User.css'
import HomePage from '../../routes/HomePage/HomePage';
import SearchPage from '../../routes/SearchPage/SearchPage';
import SideBar from '../../components/SideBar/SideBar';
import SavedPage from '../../routes/SavedPage/SavedPage';
import CalendarPage from '../../routes/CalendarPage/CalendarPage';

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
                            component={HomePage} />
                        <Route path='/login' render={() => <Redirect to='/'/>} />
                        <Route path='/calendar'
                            component={CalendarPage} />
                        <Route path='/saved'
                            component={SavedPage} />
                        <Route path='/search'
                            component={SearchPage} />
                        <Route component={MissingPage} />
                    </Switch>
                </main>
            </section>
        )
    }
}

export default User;