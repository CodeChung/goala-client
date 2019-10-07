import React from 'react';
import { Link, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import './DemoView.css';
import EntryPage from '../EntryPage/EntryPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Date from '../../components/Card/Date/Date';
import ContentEditable from 'react-contenteditable';
import DemoBike from './DemoBike';
import DemoEntry from './DemoEntry';


class DemoView extends React.Component {
    render() {
        return (
            <section className='demo-view'>
                <div className='entry-demo'>
                    <section className='entry-page'>
                        <Route path='/demo' component={DemoEntry} />
                    </section>
                </div>
            </section>
        )
    }
}

export default DemoView;