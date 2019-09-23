import React from 'react';
import './CalendarCell.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CalendarCell extends React.Component {
    render() {
        return (
            <Link  
                className={'calendar-cell ' + this.props.type}
                to='/'>
                {this.props.number || 'XXX'}
            </Link>
        )
    }
}

CalendarCell.propTypes = {
    moment: PropTypes.object
}

export default CalendarCell