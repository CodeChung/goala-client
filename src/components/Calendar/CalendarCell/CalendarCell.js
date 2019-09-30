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
                <div className='cell-date'>
                    {this.props.number || 'XXX'}
                </div>
                <div className='cell-text'>
                    {this.props.data && this.props.data.text}
                </div>
            </div>
        )
    }
}

CalendarCell.propTypes = {
    moment: PropTypes.object
}

export default CalendarCell