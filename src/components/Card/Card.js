import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Card.css';
import Date from './Date/Date';
import ContentEditable from 'react-contenteditable';

class Card extends React.Component {
    render() {
        let { date, saved, text, title } = this.props
        return (
            <div
                onClick={() => this.props.upDate(date)}
                className='entry-card'>
                {title}
                <Date date={date}/>
                <ContentEditable
                    innerRef={this.ContentEditable}
                    html={text}
                    disabled={true}
                    />
                <div 
                    onClick={ saved = !saved }
                    className={ saved ? 'entry-bookmark' : 'entry-bookmark active-mark' }>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
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