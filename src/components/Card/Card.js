import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Card.css';
import Date from './Date/Date';

class Card extends React.Component {
    render() {
        let { id, date, saved, actions, reminders, text } = this.props
        return (
            <div
                onClick={() => this.props.upDate(date)}
                className='entry-card'>
                <h2>Emojimotion</h2>
                <div 
                    onClick={ saved = !saved }
                    className={ saved ? 'entry-bookmark' : 'entry-bookmark active-mark' }>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
                <p>chapter</p>
                <p>emoticon that represents mood</p>
                <Date date={date}/>
                <p contentEditable='true'>
                    {text}
                </p>
                <p>[tags:]</p>
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