import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Date from '../../components/ToolBox/Blocks/Date/Date';
import './EntryPage.css';

class EntryPage extends React.Component {
    state = {
        saved: false
    }
    render() {
        const { saved } = this.state
        return (
            <section className='entry-page'>
                <FontAwesomeIcon 
                    className='reminder-toggle' 
                    onClick={() => this.props.resetDate()} 
                    icon={faArrowAltCircleLeft} />
                <h2>Entry</h2>
                <div 
                    className={ saved ? 'entry-bookmark' : 'entry-bookmark active-mark' }>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
                <h3>Chapters</h3>
                <p>emoticon that represents mood</p>
                <Date date={new Date()}/>
                <p contentEditable='true'>
                    {'text'}
                </p>
                <p>[tags:]</p>
            </section>
        )
    }
}

export default EntryPage;