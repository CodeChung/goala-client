import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Date from '../../components/Card/Date/Date';
import './EntryPage.css';
import ContentEditable from 'react-contenteditable';
import moment from 'moment';
import EntriesService from '../../services/entries-service';
import EntryBar from '../../components/EntryBar/EntryBar';
import Tile from '../../components/Tile/Tile';
import LogView from '../LogView/LogView';

class EntryPage extends React.Component {
    state = {
        saved: false,
        date: null, 
        id: null, 
        text: 'Text', 
        title: 'Title',
        loading: true,
        logs: [],
        data: null,
        logView: false,
    }
    componentDidMount() {
        let { date, data } = this.props

        if (date) {
            EntriesService.getEntryByDate(date)
                .then(res => {
                    const {id, text, title, saved} = res
                    date = moment(date).format('YYYY-MM-DD')
                    this.setState({ id, text, title, saved, date})
                })
                .catch(res => this.setState({ error: res.error }))
        }

        if (data) {
            date = moment(data.date).format('YYYY-MM-DD')
            const id = data.id
            const text = data.text
            const title = data.title
            const saved = data.saved
            this.setState({ date, id, text, title, saved })
        }
        this.setState({ loading: false })
    }
    handleTitle = event => {
        this.setState({ title: event.target.value })
    }
    handleText = event => {
        this.setState({ text: event.target.value })
    }
    addTile = (tile, date) => {
        let { text } = this.state
        text += Tile(tile, date)
        console.log('tiled')
        this.setState({ text })
    }
    updateLog(newLog) {
        const { logs } = this.state
        logs.push(newLog)
        this.setState({ logs })
    }
    activateLog() {
        this.setState({ activateLog: true })
    }
    render() {
        const { loading, error, date, logs, saved, text, title, logView } = this.state
        
        if (loading) {
            return (
                <section className='entry-page'>
                    Loading 
                </section>
            )
        }

        if (logs.length && logView) {
            return (
                <LogView logs={logs} />
            )
        }

        return (
            <section className='entry-page'>
                {error}
                <div 	                
                    className={ saved ? 'entry-page-bookmark active-mark' : 'entry-page-bookmark' }>
                    <FontAwesomeIcon icon={faBookmark} />	
                </div>
                <FontAwesomeIcon 
                        className='entry-back-arrow' 
                        onClick={() => this.props.resetDate()} 
                        icon={faArrowAltCircleLeft} />
                <div className='entry-body'>
                    <div className='entry-header'>
                        <Date date={date} />
                        <input
                            className='entry-title'
                            onChange={this.handleTitle}
                            value={title} />
                    </div>
                    <ContentEditable
                        className='entry-text'
                        innerRef={this.ContentEditable}
                        html={text}
                        disabled={false}
                        onChange={this.handleText}
                        />
                </div>   
                <EntryBar addTile={(tile) => this.addTile(tile, date)} date={date} /> 
            </section>
        )
    }
}

export default EntryPage;