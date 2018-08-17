import React, { Component } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          title: 'Create a React App'
        },
        {
          title: 'Create a Rails App'
        },
        {
          title: 'Create a Vue App'
        },
      ]
    }
  }

  handleAddProject(title) {
    let todos = this.state.todos;
    todos.push(title: title);
    console.log(todos)
    this.setState(todos);

  }

  render() {
    return (
      <div className="App">
        <Todo todos={this.state.todos} />
        <AddTodo AddTodo={this.handleAddProject.bind(this)} />
      </div>
    );
  }
}

export default App;
