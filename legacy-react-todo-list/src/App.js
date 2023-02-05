import React from 'react';
import './App.css';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoList } from './components/TodoList';
import { DoNothing } from './components/DoNothing';

const ogTodos = [{
  id: '123',
  text: 'Learn abt React',
  isCompleted: true
}, {
  id: '234',
  text: 'Learn old React',
  isCompleted: false
}]

export class App extends React.Component {
  state = {
    todos: [],
    name: 'Joe'
  }

  reverseName = () => {
    this.setState({ name: this.state.name.split('').reverse().join('') })
  }

  addTodo = (newTodo) => {
    this.setState({ todos: this.state.todos.concat(newTodo) })
  }

  componentDidMount() {
    console.log('App component mount');
    setTimeout(() => {
      this.setState({ todos: ogTodos });
    }, 1000);
  }

  markTodoAsCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isCompleted: true }
        } else {
          return todo;
        }
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className='mainContainer'>
        <h1>My Todos</h1>
        <NewTodoForm onAddTodo={this.addTodo} />
        {todos.length > 0 ? <TodoList
          todos={todos}
          onCompleteTodo={this.markTodoAsCompleted}
          onDeleteTodo={this.deleteTodo}
        />
          : <p>Loading data</p>}
        <DoNothing name={this.state.name} />
        <button onClick={this.reverseName}>reverseName</button>
      </div>
    );
  }
}
