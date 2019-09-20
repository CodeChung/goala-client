import React from 'react';
import './Date.css';

class Date extends React.Component {
    render() {
        const { date } = this.props
        return (
            <div className='entry-date'>
                <div className='entry-date-number'>
                    {date.getDate()}
                </div>
                <div className='entry-date-block'>
                    <div className='entry-date-day'>
                        {date.toLocaleString('default', { weekday: 'long' })}
                    </div>  
                    <div className='entry-date-month'>
                        {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
                    </div> 
                </div>
                
            </div>
        )
    }
}

export default Date;