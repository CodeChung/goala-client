import React from 'react';
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
        const cardsList = this.props.cards.map((card, index) => 
            <Card 
                upDate={(date) => this.props.upDate(date)}
                key={card.id + card.title}
                id={card.id}
                date={card.date}
                saved={card.saved}
                actions={card.actions}
                reminders={card.reminders}
                text={card.text}
                title={card.title}
                keyword={this.props.keyword}
                />
        )
        return (
            <div className='card-list'>
                {cardsList}
            </div>
        )
    }
}

export default CardList;