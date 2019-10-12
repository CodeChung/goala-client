import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Card.css';
import Date from './Date/Date';
import ContentEditable from 'react-contenteditable';

class Card extends React.Component {
    state = {
        date: null, 
        saved: null, 
        text: '', 
        title: null,
        highlight: null,
    }
    componentDidMount() {
        let { date, highlight, saved, text, title, } = this.props
        text = text || ''
        date = date || new Date()

        if (highlight) {
            text = text.replace(highlight, `<span class='highlight-baby'>${highlight}</span>`)
        }
        this.setState({ date, highlight, saved, text, title })
    }
    render() {
        let { date, saved, text, title } = this.state
        return (
            <div
                onClick={() => this.props.upDate(date)}
                className='entry-card'>
                <div className='entry-card-header'>
                    {date && <Date date={date}/>}
                    <h3>
                        {title}
                    </h3>
                </div>
                <div className='entry-card-body'>
                    <ContentEditable
                        innerRef={this.ContentEditable}
                        html={text}
                        disabled={true}
                        />
                </div>
                
                <div 
                    // onClick={ saved = !saved }
                    className={ saved ? 'entry-bookmark' : 'entry-bookmark active-mark' }>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
            </div>
        )
    }
}

export default Card;