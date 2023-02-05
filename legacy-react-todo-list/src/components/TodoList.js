//respresents list in application
import React from 'react';
import { TodoListItem } from './TodoListItem';
import { PropTypes } from 'prop-types'

class TodoList extends React.Component {

    render() {
        const { todos, onCompleteTodo, onDeleteTodo } = this.props;
        return (
            <div>
                <h3 className='bottomBordered'>Todos List</h3>
                {todos.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        onComplete={() => onCompleteTodo(todo.id)}
                        onDelete={() => onDeleteTodo(todo.id)}
                    />
                ))}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            isCompleted: PropTypes.bool
        })
    ),
    onCompleteTodo: PropTypes.func,
    onDeleteTodo: PropTypes.func
}

export {TodoList}