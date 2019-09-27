import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Date from '../../components/ToolBox/Blocks/Date/Date';
import './EntryPage.css';

class EntryPage extends React.Component {
    state = {
        saved: false,
        page: {}
    }
    componentDidMount() {
        // ill probably pass down page prop
        // or page id to find info
        // but if it shows on my feed, might as well pass page object
    }
    render() {
        const { saved } = this.state
        return (
            <section className='entry-page'>
                <div className='entry-main'>
                    <FontAwesomeIcon 
                        className='reminder-toggle' 
                        onClick={() => this.props.resetDate()} 
                        icon={faArrowAltCircleLeft} />
                    <Date date={new Date()}/>
                    <h2>Entry</h2>
                    <div 
                        className={ saved ? 'entry-bookmark' : 'entry-bookmark active-mark' }>
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <h3>Chapters</h3>
                    <p>emoticon that represents mood</p>
                    <p contentEditable='true'>
                        {'text'}
                    </p>
                    <p>[tags:]dosdaij</p>
                    <button>Danger</button>
                    <div className='entry-text' contentEditable='true'>
                        <button onCLick={() => console.alert('pineaple')}>A</button>
                        This is some text. This is some text. This is some text.
                        This is some text. This is some text. This is some text.
                        <Date />
                        This is some text. This is some text. This is some text.
                        This is some text. This is some text. This is some text.    
                    </div>
                </div>
                <div className='entry-tools'>
                    <br></br>
                    This is where the tools should go (float right)
                    or maybe as a toolbar to + button?
                </div>
            </section>
        )
    }
}

export default EntryPage;