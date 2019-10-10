import React from 'react';
import './HomePage.css';
import Spinner from '../../components/Spinner/Spinner';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import EntryPage from '../EntryPage/EntryPage';
import EntriesService from '../../services/entries-service';
import moment from 'moment';

class HomePage extends React.Component {
    state = {
        page: 0,
        itemCount: 5,
        entries: [],
        error: null,
        loading: true,
        keyword: '',
        date: null,
        searchActive: false,
        searchEntries: [],
    }
    componentDidMount() {
        this.addNewEntries()
            .then(entries => {
                // check if today's entry exists and creates
                let a = entries && !entries.length
                let b = entries && entries.length && moment(entries[0].date).format('MM-DD-YYYY') !== moment(new Date() - 1).format('MM-DD-YYYY')
                
                if ((a) || (b)) {
                    EntriesService.createNewEntry()
                        .then(entries => this.setState({ entries }))
                        .catch(res => this.setState({ error: res.message }))
                } 
            })
        
    }
    addNewEntries() {
        let { entries, page, } = this.state

        return EntriesService.getEntriesById()
            .then(res => {
                entries = [...entries, ...res]
                entries = entries.reverse()
                this.setState({
                    entries,
                    loading: false,
                    page: page + 1
                })
                return entries
            })
            .catch(res => this.setState({ error: res.error }))
    }
    handleScroll(e) {
        const element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        }
    }
    resetDate() {
        this.setState({ date: null })
        this.addNewEntries()
    }
    upDate(date) {
        this.setState({ date })
    }
    updateKeyword(keyword) {
        this.setState({ keyword })
    }
    updateEntry = entry => {
        const { entries } = this.state
        const { text, title, id } = entry
        const entryToUpdate = entries.find(entry => entry.id === id)
        if (text) {
            entryToUpdate.text = text
        }
        if (title) {
            entryToUpdate.title = title
        }
        this.setState({ entries })
    }
    searchJournal() {
        // here we'll get request /entries/:keyword
        // saved returned cards in state
        const { keyword } = this.state
        if (!keyword) {
            this.setState({ searchActive: false })
        } else {
            EntriesService.getEntriesByKeyword(keyword)
                .then(searchEntries => {
                    this.setState({
                        searchEntries,
                        searchActive: true,
                    })
                })
                .catch(res => this.setState({ error: res.error }))
            this.setState({ searchActive: true })
        }
    }
    render() {
        const { error, entries, date, keyword, searchActive, searchEntries, } = this.state
        if (date) {
            let data, index

            for (let i = 0; i < entries.length; i++) {
                if (entries[i].date === date) {
                    data = entries[i]
                    index = i
                }
            }

            return (
                <section className='home-page'>
                    <EntryPage 
                        index={index} 
                        data={data} 
                        updateEntry={this.updateEntry}
                        resetDate={() => this.resetDate()} />
                </section>
            )
        }
        if (searchActive) {
            return (
                <section className='home-page'>
                    <SearchBar 
                    updateKeyword={ (keyword) => this.updateKeyword(keyword) }
                    search={() => this.searchJournal() }
                    />
                    Hello Active 
                    <div className='journal-feed'>
                        <CardList upDate={(date) => this.upDate(date)} cards={searchEntries} highlight={keyword} />
                    </div>
                </section>
            )
        }
        return (
            <section className='home-page'>
                <SearchBar 
                    updateKeyword={ (keyword) => this.updateKeyword(keyword) }
                    search={() => this.searchJournal() }
                    />
                { error }
                <div className='journal-feed'
                    onScroll={(e) => this.handleScroll(e)}
                    >
                    <CardList upDate={(date) => this.upDate(date)} cards={entries} />
                </div>
                {this.state.loading && <Spinner />}
            </section>
        )
    }
}

export default HomePage;