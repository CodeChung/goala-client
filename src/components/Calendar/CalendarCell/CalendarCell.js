import React from 'react';
import './CalendarCell.css';
import PropTypes from 'prop-types';

class CalendarCell extends React.Component {
    render() {
        return (
            <div 
                onClick={() => this.props.openDate(new Date())}
                className={'calendar-cell ' + this.props.type}
                to='/'>
                {this.props.number || 'XXX'}
            </div>
        )
    }
}

CalendarCell.propTypes = {
    moment: PropTypes.object
}

export default CalendarCell