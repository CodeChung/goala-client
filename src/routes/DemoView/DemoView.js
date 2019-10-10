import React from 'react';
import { Route } from 'react-router-dom';
import './DemoView.css';
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