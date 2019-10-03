import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

class SearchBar extends React.Component {
    submitSearch(event) {
        event.preventDefault()
        this.props.search()
    }
    render() {
        return (
            <div className='searchbar'>
                <form
                    onSubmit={ (e) => this.submitSearch(e) }
                    >
                    <button >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input
                        placeholder='Search through past entries'
                        onChange={ (e) => this.props.updateKeyword(e.target.value) }
                        />
                </form>
            </div>
        )
    }
}



export default SearchBar