import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Date from '../../components/Card/Date/Date';
import ContentEditable from 'react-contenteditable';
import EntryStamp from '../../components/EntryBar/EntryStamp/EntryStamp';

class DemoEntry extends React.Component {
    render() {
        const text = "What a great day. I went <a href=\"/demo/bike\" contenteditable=\"false\" class=\"text-stamp-container\"> <button class=\"entry-text-stamp\"> bike riding </button><div class=\"stamp-hidden\">Hide me</div> </a><div>in the mountains. It was great getting some fresh air and pumping them legs.</div><div><br></div><div>Afterwards, I picked up some <a href=\"demo/groceries\" contenteditable=\"false\" class=\"text-stamp-container\"> <button class=\"entry-text-stamp\"> groceries </button><div class=\"stamp-hidden\">Hide me</div> </a> and while I was there, </div><div>I went to the blood bank nearby to <a href=\"demo/blood\" contenteditable=\"false\" class=\"text-stamp-container\"> <button class=\"entry-text-stamp\"> donate blood </button><div class=\"stamp-hidden\">Hide me</div> </a>.</div><br></div>Well, it's currently nighttime, and I'm <a href=\"demo/reading\" contenteditable=\"false\" class=\"text-stamp-container\"> <button class=\"entry-text-stamp\"> reading </button><div class=\"stamp-hidden\">Hide me</div> </a>, trying to get to bed. Goodnight."    
        const goals = ['eating healthy', 'bike riding', 'reading'].map((goal, index) => <EntryStamp addTile={() => {}} key={index} title={goal} />)
        const reminders = ['groceries','donate blood'].map((goal, index) => <EntryStamp addTile={() => {}} key={index} title={goal} />)
    
        return (
            <div className='demo-entry'>
                <Link to='/'>
                    <FontAwesomeIcon 
                        className='entry-back-arrow' 
                        icon={faArrowCircleLeft} />
                </Link>
                <div className='demo-entry-body'>
                    <div className='entry-header'>
                        <Date date={new Date()} />
                        <input
                            className='entry-title'
                            readOnly
                            value={'A Day Well Spent'} />
                    </div>
                    <ContentEditable
                        className='entry-text'
                        innerRef={this.ContentEditable}
                        html={text}
                        disabled={false}
                        />
                </div>   
                <div className='demo-entry-bar'>
                    <div className='entry-bar-section entry-bar-goals'>
                        <h4>Goals</h4>
                        <div className='entry-tiles'>
                            {goals}
                        </div>
                    </div>
                    <span className='entry-bar-split' />
                    <div className='entry-bar-section entry-bar-reminders'>
                        <h4>Reminders</h4>
                        <div className='entry-tiles'>
                            {reminders}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoEntry