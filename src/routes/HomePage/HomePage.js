import React from 'react';
import './HomePage.css';
import Spinner from '../../components/Spinner/Spinner';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import EntryPage from '../EntryPage/EntryPage';
import EntriesService from '../../services/entries-service';

const exampleCards = [
    {
        id: 1,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 2,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 1,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 2,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
    {
        id: 3,
        date: new Date(),
        saved: true,
        actions: [],
        reminders: [],
        text: 'Today was a great day. This will probably be html'
    },
]

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
        const { date, keyword } = this.state
        if (date) {
            return (
                <section className='home-page'>
                    <EntryPage date={date} resetDate={() => this.resetDate()} />
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
                HomePage
                <br></br>
                Implement scroll feed
                <br></br>
                To the right I want some border
                <br></br>
                when entry is clicked to edit
                I want transition to single entry, long and vertical transition for below
                I want an actions board and a reminders board with draggable components
            </section>
        )
    }
}

export default HomePage;