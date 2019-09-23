import React from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import './ReminderTools.css'
import styled from 'styled-components';
import YesNo from '../Blocks/YesNo/YesNo';
import Count from '../Blocks/Count/Count';
import Notes from '../Blocks/Notes/Notes';
import Text from '../Blocks/Text/Text';
import CheckList from '../Blocks/CheckList/CheckList';
import Trash from '../Blocks/Trash/Trash';
import Weekly from '../Blocks/Weekly/Weekly';
import Clock from '../Blocks/Clock/Clock';
import CountDown from '../Blocks/CountDown/CountDown';

// tasks.content is where I could store individual component blocks
const initialData = {
    tasks: { 
        'task-1': { id: 'task-1', content: 'Title' },
        'task-2': { id: 'task-2', content: <Clock /> },
        'task-3': { id: 'task-3', content: <YesNo />},
        'task-4': { id: 'task-4', content: <Count value={({ num: '', den: '', units: ''})} /> },
        'task-5': { id: 'task-5', content: <Notes /> },
        'task-6': { id: 'task-6', content: <Text /> },
        'task-7': { id: 'task-7', content: <CheckList /> },
        'task-8': { id: 'task-8', content: <Weekly /> },
        'task-9': { id: 'task-9', content: <CountDown /> },
        'task-10': { id: 'task-10', content: 'Eat' },
        'task-11': { id: 'task-11', content: 'Go for a walk' },
        'task-12': { id: 'task-12', content: <Trash /> },
    },
    columns: {
        'column-reminder': {
            id: 'column-reminder',
            title: 'Reminder',
            taskIds: ['task-1']
        },
        'column-toolbox': {
            id: 'column-toolbox',
            title: 'Toolbox',
            // taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
            taskIds: ['task-2', 'task-3', 'task-4','task-5', 'task-6', 'task-7', 'task-8', 'task-9']
        },
        'column-trash': {
            id: 'column-trash',
            title: 'Trash',
            // taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
            taskIds: ['task-12']
        }
    },
    columnOrder: ['column-reminder', 'column-toolbox', 'column-trash']
}

const Container = styled.div `
    display: flex;

`

class ReminderTools extends React.Component {
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
            console.log(column)
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
                        {columns[0]}
                        <div className='action-side'>
                            {columns[1]}
                            {columns[2]}
                        </div>
                    </Container>
                </DragDropContext>
                <button>Save</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default ReminderTools;