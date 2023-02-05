//represents item in list
import React from 'react';

export class TodoListItem extends React.Component {
    render() {
        const { todo, onComplete, onDelete } = this.props;
        const { isCompleted, text } = todo;
        return (
            <div className='todoListItem'>
                <h3>{text}</h3>
                {isCompleted && <p>Completed!</p>}
                {isCompleted
                    ? <button onClick={onDelete}> Delete </button>
                    : <button onClick={onComplete}> Mark as completed</button>}
            </div>
        );
    }
}