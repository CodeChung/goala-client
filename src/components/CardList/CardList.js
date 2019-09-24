import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardList.css';

class CardList extends React.Component {
    // we're going to pass down props (card data) conditional on view:
    // home feed -> fetch all cards
    // saved feed -> fetch saved cards
    // search feed -> fetch queried cards
    static defaultProps = {
        cards: []
    }
    render() {
        const cardsList = this.props.cards.map(card => 
            <Card 
                upDate={(date) => this.props.upDate(date)}
                key={card.id}
                id={card.id}
                date={card.date}
                saved={card.saved}
                actions={card.actions}
                reminders={card.reminders}
                text={card.text}
                />
        )
        return (
            <div className='card-list'>
                {cardsList}
            </div>
        )
    }
}

CardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number,
        date: PropTypes.instanceOf(Date),
        saved: PropTypes.bool,
        actions: PropTypes.array,
        reminders: PropTypes.array,
        text: PropTypes.string,
    }))
}

export default CardList;