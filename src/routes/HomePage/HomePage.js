import React from 'react';
import './HomePage.css';
import Spinner from '../../components/Spinner/Spinner';
import CardList from '../../components/CardList/CardList';

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
    }
    componentDidMount() {
        // This is where we will fetch with pagination
        // 10 entries sorted by user id and date
        // 
        this.addNewStories()
    }
    addNewStories() {
        const { page, itemCount } = this.state
        const entries = exampleCards.slice(itemCount * page, itemCount)
        this.setState({
            entries,
            loading: false,
            page: page + 1
        })
    }
    handleScroll(e) {
        const element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            console.log('reached')
        }
    }
    render() {
        return (
            <section className='home-page'>
                <div className='journal-feed'
                    onScroll={(e) => this.handleScroll(e)}
                    >
                    <CardList cards={this.state.entries} />
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