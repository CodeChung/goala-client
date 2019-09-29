import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Date from '../../components/ToolBox/Blocks/Date/Date';
import './EntryPage.css';
import ContentEditable from 'react-contenteditable';
import moment from 'moment';
import EntriesService from '../../services/entries-service';

class EntryPage extends React.Component {
    state = {
        saved: false,
        date: null, 
        id: null, 
        text: 'Text', 
        title: 'Title'
    }
    componentDidMount() {
        const { date } = this.props
        const today = moment(date).format('YYYY-MM-DD')
        console.log(`Date is ${ today }`)
        EntriesService.getEntryByDate(today)
            .then(entry => {
                const { date, id, text, title, } = entry
                this.setState({ date, id, text, title })
            })
            .catch(err => this.setState({ error: err.error }))
    }
    handleChange = event => {
        this.setState({ text: event.target.value })
    }
    render() {
        const { date, id, text, title } = this.state
        return (

            <section className='entry-page'>
                 <FontAwesomeIcon 
                        className='reminder-toggle' 
                        onClick={() => this.props.resetDate()} 
                        icon={faArrowAltCircleLeft} />
                {date}
                <br/>
                {id}
                <br/>
                {text}
                <br/>
                {title}
            </section>



            // <section className='entry-page'>
            //     <div className='entry-main'>
                    // <FontAwesomeIcon 
                    //     className='reminder-toggle' 
                    //     onClick={() => this.props.resetDate()} 
                    //     icon={faArrowAltCircleLeft} />
            //         <Date date={new Date()}/>
            //         <h2>Entry</h2>
            //         <div 
            //             className={ saved ? 'entry-bookmark' : 'entry-bookmark active-mark' }>
            //             <FontAwesomeIcon icon={faBookmark} />
            //         </div>
            //         <h3>Chapters</h3>
            //         <p>emoticon that represents mood</p>
            //         <p contentEditable='true'>
            //             {'text'}
            //         </p>
            //         <p>[tags:]dosdaij</p>
            //         <button>Danger</button>
            //         <div className='entry-text' contentEditable='true'>
            //             <button onCLick={() => console.alert('pineaple')}>A</button>
            //             This is some text. This is some text. This is some text.
            //             This is some text. This is some text. This is some text.
            //             <Date />
            //             This is some text. This is some text. This is some text.
            //             This is some text. This is some text. This is some text.    
            //         </div>
            //         <ContentEditable
            //             innerRef={this.ContentEditable}
            //             html={text}
            //             disabled={false}
            //             onChange={this.handleChange}
            //             />
            //     </div>
            //     <div className='entry-tools'>
            //         <br></br>
            //         This is where the tools should go (float right)
            //         or maybe as a toolbar to + button?
            //     </div>
            // </section>
        )
    }
}

export default EntryPage;