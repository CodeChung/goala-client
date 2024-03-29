import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faCheckSquare, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class SideBar extends React.Component {
    state = {
        currentView: 'home'
    }
    setCurrentNav(currentView) {
        this.setState({ currentView })
    }
    render() {
        const { hidden } = this.props
        const { currentView } = this.state

        let hideView = hidden ? 'nav-hidden' : ''
        return (
            <nav className={'sidebar ' + hideView}>
                <Link to='/'
                    onClick={() => this.setCurrentNav('home')}
                    className='nav-logo'>
                    <span className='logo'>
                    <img src='https://image.flaticon.com/icons/svg/141/141742.svg' alt='logo Icon made by Freepik from www.flaticon.com' />
                        Goala
                    </span>
                </Link>
                <Link to='/'
                    onClick={() => this.setCurrentNav('home')}
                    className={ currentView === 'home' ? 'nav-active' : undefined }>
                    <div className='sidebar-icon'>
                        <FontAwesomeIcon 
                            icon={faHome} /> 
                    </div>
                    Home
                </Link>
                <Link to='/calendar'
                    onClick={() => this.setCurrentNav('calendar')}
                    className={ currentView === 'calendar' ? 'nav-active' : undefined }>
                    <div className='sidebar-icon'>
                        <FontAwesomeIcon 
                            icon={faCalendar} /> 
                    </div>
                    Calendar
                </Link>
                <Link to='/actions'
                    onClick={() => this.setCurrentNav('actions')}
                    className={ currentView === 'actions' ? 'nav-active' : undefined }>
                    <div className='sidebar-icon'>
                        <FontAwesomeIcon 
                            icon={faCheckSquare} /> 
                    </div>
                    Goals
                </Link>
                <Link to='/reminders'
                    onClick={() => this.setCurrentNav('reminders')}
                    className={ currentView === 'reminders' ? 'nav-active' : undefined }>
                    <div className='sidebar-icon'>
                        <FontAwesomeIcon 
                            icon={faBell} /> 
                    </div>
                    Reminders
                </Link>
                <Link to='/login' 
                    className='nav-end'
                    onClick={() => this.props.logout()}>
                    <div className='sidebar-icon'>
                        <FontAwesomeIcon 
                            icon={faSignOutAlt} rotation={180} />
                    </div>
                    Logout
                </Link>
            </nav>
        )
    }
}

export default SideBar