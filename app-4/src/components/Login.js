import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: ""
        }
    }

    handleUser(val) {
        this.setState({
            username: val
        })
    }

    handlePass(val) {
        this.setState({
            password: val
        })
    }

    handleLogin(user, pass) {
        alert(`Username: ${user} Password: ${pass}`)
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        let { username, password } = this.state
        return (
            <div>
                <input type="text" value={username} onChange={(e) => {this.handleUser(e.target.value)}} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => {this.handlePass(e.target.value)}} placeholder="Password" />
                <button onClick={() => {this.handleLogin(username, password)}}>Login</button>
            </div>
        )
    }
}

export default Login