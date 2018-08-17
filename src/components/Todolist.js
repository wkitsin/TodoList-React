import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <div className='TodoList'>
                <li>{this.props.todos.title}</li>
            </div>
        );
    }
}

export default TodoList