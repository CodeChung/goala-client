import React from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import './ActionTools.css';
import styled from 'styled-components';
import YesNo from '../Blocks/YesNo/YesNo';
import Count from '../Blocks/Count/Count';
import Notes from '../Blocks/Notes/Notes';

// tasks.content is where I could store individual component blocks
const initialData = {
    tasks: { 
        'task-1': { id: 'task-1', content: 'Title' },
        'task-2': { id: 'task-2', content: 'Eat' },
        'task-3': { id: 'task-3', content: <YesNo value={true} />},
        'task-4': { id: 'task-4', content: <Count value={({ num: '', den: '', units: ''})} /> },
        'task-5': { id: 'task-5', content: <Notes /> },
        'task-6': { id: 'task-6', content: 'Eat' },
        'task-7': { id: 'task-7', content: 'Go for a walk' },
        'task-8': { id: 'task-8', content: 'Go running' },
        'task-9': { id: 'task-9', content: 'Take out the garbage' },
        'task-10': { id: 'task-10', content: 'Eat' },
        'task-11': { id: 'task-11', content: 'Go for a walk' },
        'task-12': { id: 'task-12', content: 'Go running' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Action',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'Toolbox',
            // taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
            taskIds: ['task-5', ]
        },
        'column-3': {
            id: 'column-3',
            title: 'Trash',
            // taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
            taskIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
}

const Container = styled.div `
    display: flex;
`

class ActionTools extends React.Component {
    state = initialData;

    onDragStart = () => {
        document.body.style.color = 'orange';
    }

    onDragpUpdate = update => {
        const { destination } = update;
        const opacity = destination
            ? destination.index / Object.keys(this.state.tasks).length
            : 0;
        document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
    }

    onDragEnd = result => {
        document.body.style.color = 'inherit';
        document.body.style.backgroundColor = 'inherit'

        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...this.state,
                taskIds: newTaskIds,
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            this.setState(newState)
            return
        }
        
        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };
        
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        this.setState(newState)
    };
    render() {
        const columns = this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

            return <Column key={column.id} column={column} tasks={tasks} />
        })
        return (
            <div className='action-tools'>
                <DragDropContext
                    onDragStart={this.onDragStart}
                    onDragEnd={this.onDragEnd}
                >
                    <Container>
                        <h4>Values</h4>
                        {columns}
                    </Container>
                </DragDropContext>
                
            </div>
        )
    }
}

export default ActionTools;