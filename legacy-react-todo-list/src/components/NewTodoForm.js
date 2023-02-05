//reoeresents new todo forms
import React from 'react'
import { v4 as uuid } from 'uuid';

export class NewTodoForm extends React.Component {
    state = {
        newTodoText: '',
    }
    render() {
        const { onAddTodo } = this.props;
        const { newTodoText } = this.state;
        return (
            <div className='addForm'>
                <h3>Add a new todo: </h3>
                <input
                    value={this.state.newTodoText}
                    placeholder='i.e. Buy groceris'
                    onChange={e => this.setState({ newTodoText: e.target.value })}
                />
                <button onClick={() => {
                    const newTodo = {
                        id: uuid(),
                        text: newTodoText,
                        isCompleted: false,
                    };
                    this.setState({ newTodoText: '' })
                    onAddTodo(newTodo);
                }}> Add </button>
            </div>
        );
    }
}