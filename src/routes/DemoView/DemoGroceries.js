import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import CheckList from '../../components/ToolBox/Blocks/CheckList/CheckList';
import Date from '../../components/ToolBox/Blocks/Date/Date';

class DemoGroceries extends React.Component {
    render() {
        return (
            <section className='demo-entry-log demo-groceries'>
                <Link to='/demo'>
                    <FontAwesomeIcon 
                        className='entry-back-arrow' 
                        icon={faArrowCircleLeft} />
                </Link>
                <div className='demo-entry-log-body'>
                    <Date />
                    <CheckList value={({ checked: true, text: 'Ranch' })} />
                    <CheckList value={({ checked: true, text: 'Eggs' })} />
                    <CheckList value={({ checked: true, text: 'Lemons' })} />
                    <CheckList value={({ checked: true, text: 'Olive Oil' })} />
                </div>
            </section>
        )
    }
}

export default DemoGroceries