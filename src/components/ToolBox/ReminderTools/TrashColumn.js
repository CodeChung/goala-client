import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;

    display: flex;
    flex-direction: column;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'tan': 'white')}
    flex-grow: 1;
    min-height: 100px;
`;

class TrashColumn extends React.Component {
    render() {
        return (
            <Container className={'trash-column ' + this.props.column.title}>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>

            </Container>
        )
    }
}

export default TrashColumn;