import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCheckSquare, faStar, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class SideBar extends React.Component {
    state = {
        current: ''
    }
    render() {
        return (
            <nav className='sidebar'>
                <Link to='/'>
                    <span className='logo'>
                        Goalf
                    </span>
                </Link>
                <Link to='/calendar'>
                    <div className='sidebar-icon'>
                        <FontAwesomeIcon 
                            icon={faCalendar} /> 
                    </div>
                    Calendar
                </Link>
                <Link to='/actions'>
                    <div className='sidebar-icon'>
                        <FontAwesomeIcon 
                            icon={faCheckSquare} /> 
                    </div>
                    Actions
                </Link>
                <Link to='/reminders'>
                    <div className='sidebar-icon'>
                        <FontAwesomeIcon 
                            icon={faBell} /> 
                    </div>
                    Reminders
                </Link>
                <Link to='/saved'>
                    <div className='sidebar-icon'>
                        <FontAwesomeIcon 
                            icon={faStar} /> 
                    </div>
                    Saved
                </Link>
                <Link to='/login' onClick={() => this.props.logout()}>
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