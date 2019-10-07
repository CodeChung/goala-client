import React from 'react';
import CheckList from '../../components/ToolBox/Blocks/CheckList/CheckList';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Title from '../../components/ToolBox/Blocks/Title/Title';

class DemoReading extends React.Component {
    render() {
        return (
            <section className='demo-entry-log demo-reading'>
                <Link to='/demo'>
                    <FontAwesomeIcon 
                        className='entry-back-arrow' 
                        icon={faArrowCircleLeft} />
                </Link>
                <div className='demo-entry-log-body'>
                    <Title value={({title: 'Moby Dick'})} />
                    <CheckList value={({ checked: true, text: '2 Chapters' })} />
                </div>
            </section>
        )
    }
}

export default DemoReading