import React, { Component } from 'react';
import EditTodo from './EditTodo';

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            editformstate: false,
        }
    }

    changeFormState() {
        this.setState({ editformstate: true });
    }


    render() {
        return (
            <div className='TodoList'>
                <li><a href='#' onClick={this.changeFormState.bind(this)}>{this.props.todos.title}</a></li>
                {this.state.editformstate ? <EditTodo todos={this.props.todos} index={this.props.index}
                    handleEditForm={this.props.handleEditForm.bind(this)} /> : null}
            </div >
        );
    }
}

export default TodoList