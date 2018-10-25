import React, { Component }  from 'react';

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsername(val) {
        this.setState({ username: val})
    }

    handlePassword(val) {
        this.setState({ password: val})
    }

    loggingIn(user, pass) {
        alert(`Username: ${user} Password: ${pass}`);
    }

    render() {
        return (
            <div className="App">
                <input type="text" onChange={(e) => this.handleUsername(e.target.value)}></input>
                <input type="password" onChange={(e) => this.handlePassword(e.target.value)}></input>
                <button onClick={() => this.loggingIn(this.state.username, this.state.password)}>Login</button>
            </div>
        )
    }
}