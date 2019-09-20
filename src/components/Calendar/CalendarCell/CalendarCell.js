import React from 'react';
import './CalendarCell.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CalendarCell extends React.Component {
    render() {
        return (
            <Link t0='/'>
                <div className={'calendar-cell' + this.props.style}>
                    {this.props.number || 'XXX'}
                </div>
            </Link>
        )
    }
}

CalendarCell.propTypes = {
    moment: PropTypes.object
}

export default CalendarCell