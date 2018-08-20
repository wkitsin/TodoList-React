import React, { Component } from 'react';

class AddTodo extends Component {

    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('Must have a title');
        } else {
            this.setState(
                {
                    newtodo: {
                        title: this.refs.title.value
                    }
                }, function () {
                    this.props.AddTodo(this.state.newtodo);
                }
            )
        }

        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} >
                <label> Title </label>
                <input type='text' ref='title' />
                <input type='submit' value='submit' />
            </ form >
        );
    }
}

export default AddTodo