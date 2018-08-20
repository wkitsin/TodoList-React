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
      ],
    }
  }

  handleAddProject(title) {
    let todos = this.state.todos;
    todos.push(title);
    this.setState(todos);

  }

  changeTitle(e) {
    let index = e.props.index
    let modified_title = e.refs.title.value
    const todos = this.state.todos;

    todos[index].title = modified_title

    this.setState({
      todos
    })


  }

  render() {
    return (
      <div className="App">
        <Todo todos={this.state.todos} handleEditForm={this.changeTitle.bind(this)} />
        <AddTodo AddTodo={this.handleAddProject.bind(this)} />
      </div>
    );
  }
}

export default App;
