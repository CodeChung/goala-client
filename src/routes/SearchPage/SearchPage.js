import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardList from '../../components/CardList/CardList';
import './SearchPage.css';

class SearchPage extends React.Component {
    state = {
        cards: [],
        keyword: '',
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
        const { cards } = this.state
        return (
            <section className='search-page'>
                <SearchBar 
                    updateKeyword={ (keyword) => this.updateKeyword(keyword) }
                    search={() => this.searchJournal() }
                    />
                <CardList cards={cards} />
            </section>
        )
    }
}

export default SearchPage;