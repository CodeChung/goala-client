import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Card.css';
import Date from './Date/Date';

class Card extends React.Component {
    render() {
        let { date, saved, text, title } = this.props
        return (
            <div
                onClick={() => this.props.upDate(date)}
                className='entry-card'>
                {title}
                <Date date={date}/>
                <p contentEditable='true'>
                    {text}
                </p>
                <div 
                    onClick={ saved = !saved }
                    className={ saved ? 'entry-bookmark' : 'entry-bookmark active-mark' }>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
                <p>chapter</p>
                <p>emoticon that represents mood</p>
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
    reminders: PropTypes.array,
    upDate: PropTypes.func,
}

export default Card;