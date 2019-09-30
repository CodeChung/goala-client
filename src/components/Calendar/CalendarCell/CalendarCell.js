import React from 'react';
import './CalendarCell.css';
import PropTypes from 'prop-types';

class CalendarCell extends React.Component {
    state = {

    }
    componentDidMount() {

    }
    render() {
        return (
            <div 
                onClick={() => {
                    const { data } = this.props
                    this.props.openData(data)
                }}
                className={'calendar-cell ' + this.props.type}
                to='/'>
                {this.props.number || 'XXX'}
                {this.props.data && this.props.data.title}
            </div>
        )
    }
}

CalendarCell.propTypes = {
    moment: PropTypes.object
}

export default CalendarCell