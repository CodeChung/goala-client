import React from 'react';
import './HomePage.css';
import Spinner from '../../components/Spinner/Spinner';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import EntryPage from '../EntryPage/EntryPage';
import EntriesService from '../../services/entries-service';

class HomePage extends React.Component {
    state = {
        page: 0,
        itemCount: 5,
        entries: [],
        loading: true,
        keyword: '',
        date: null,
    }
    componentDidMount() {
        this.addNewEntries()
    }
    addNewEntries() {
        let { entries, page, itemCount } = this.state

        EntriesService.getEntriesById()
            .then(res => {
                entries = [...entries, ...res]
                this.setState({
                    entries,
                    loading: false,
                    page: page + 1
                })
            })
            .catch(res => this.setState({ error: res.error }))
    }
    handleScroll(e) {
        const element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            console.log('reached')
        }
    }
    resetDate() {
        this.setState({ date: null })
    }
    upDate(date) {
        this.setState({ date })
    }
    updateKeyword(keyword) {
        this.setState({ keyword })
    }
    searchJournal() {
        // here we'll get request /entries/:keyword
        // saved returned cards in state
        const { keyword } = this.state
        console.log(keyword)
    }
    render() {
        const { entries, date, keyword } = this.state
        if (date) {
            const data = entries.find(entry => entry.date === date)
            return (
                <section className='home-page'>
                    <EntryPage data={data} resetDate={() => this.resetDate()} />
                </section>
            )
        }
        if (keyword) {
            return (
                <section className='home-page'>
                    This will have a list of entries with text containing ${keyword}
                </section>
            )
        }
        return (
            <section className='home-page'>
                <SearchBar 
                    updateKeyword={ (keyword) => this.updateKeyword(keyword) }
                    search={() => this.searchJournal() }
                    />
                <div className='journal-feed'
                    onScroll={(e) => this.handleScroll(e)}
                    >
                    <CardList upDate={(date) => this.upDate(date)} cards={this.state.entries} />
                </div>
                {this.state.loading && <Spinner />}
            </section>
        )
    }
}

export default HomePage;