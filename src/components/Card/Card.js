import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Date from './Date/Date';

class Card extends React.Component {
    render() {
        const { id, date, saved, actions, reminders } = this.props
        console.log( id, date, saved, actions, reminders)
        return (
            <div className='entry-card'>
                Card
                <Date date={date}/>
            </div>
        )
    }
}

Card.propTypes = {
    id: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    saved: PropTypes.bool,
    actions: PropTypes.array,
    reminders: PropTypes.array
}

export default Card;