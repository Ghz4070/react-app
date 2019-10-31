import React, { Component } from 'react'
import LoginBar from './LoginBar'

class Login extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <LoginBar />
                </header>
            </div>
        );
    }
}

export default Login;