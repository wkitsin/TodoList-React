import React, { Component } from 'react';
import TodoList from './Todolist';

class Todo extends Component {
    render() {
        let todolist;
        if (this.props.todos) {
            todolist = this.props.todos.map(list => {
                return (
                    <TodoList key={list.title} todos={list} />
                )
            })
        }
        return (
            <div className='Todo'>
                All Todo List
                {todolist}
            </div>
        );
    }
}

export default Todo