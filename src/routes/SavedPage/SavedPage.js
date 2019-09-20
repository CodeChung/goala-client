import React from 'react';
import './SavedPage.css';
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
]

class SavedPage extends React.Component {
    state = {
        cards: exampleCards
    }
    componentDidMount() {
        // fetch saved entries from api
    }
    render() {
        return (
            <section className='saved-page'>
                <h2>Saved</h2>
                <CardList cards={this.state.cards}/>
            </section>
        )
    }
}

export default SavedPage;