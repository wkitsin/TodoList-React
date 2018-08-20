import React, { Component } from 'react';

class EditTodo extends Component {
    // constructor() {
    //     super();
    //     this.EditForm
    // }

    EditForm(e) {
        this.setState({
            title: this.refs.title.value
        }, function () {
            this.props.handleEditForm(this)
        })
    }

    render() {
        return (
            <form onSubmit={this.EditForm.bind(this)}>
                <label> Title </label>
                <input type='text' ref='title' defaultValue={this.props.todos.title} />
                <input type='submit' value='submit' />
            </ form>
        );
    }
}

export default EditTodo