import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor() {
        super()

        this.state = {
            userInput: ""
        }
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(val) {
        this.setState({ userInput: val})
    }

    addTodo() {
        this.props.add( this.state.userInput);
        this.setState({ userInput: ""})
    }

    render() {
        return (
            <div className="App">
                <input type="text" value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)} placeholder="Enter New Task" ></input>
                <button onClick={() => this.addTodo(this.addTodo)}>Add new todo</button>
            </div>
        )
    }
}