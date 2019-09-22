import React from 'react';
import Column from './Column';
import './ActionTools.css';

const initialData = {
    tasks: { 
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Take out the garbage' },
        'task-3': { id: 'task-3', content: 'Take out the garbage' },
        'task-4': { id: 'task-4', content: 'Take out the garbage' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    columnOrder: ['column-1']
}


class ActionTools extends React.Component {
    state = initialData;
    render() {
        const columns = this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

            return <Column key={column.id} column={column} tasks={tasks} />
        })
        return (
            <div className='action-tools'>
                <h4>Values</h4>
                {columns}
            </div>
        )
    }
}

export default ActionTools;