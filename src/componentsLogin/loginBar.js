import React, { Component } from 'react'

const styleInput = { borderRadius: 5, border: 'none', fontSize: 12, padding: 10, marginRight: 10 };
const styleButton = { cursor: 'pointer', borderRadius: 5, backgroundColor: "lightblue", fontSize: 12, fontWeight: 'bold', padding: 10, width: 100 };

class LoginBar extends Component {
    state = { userlogin: '' };

    handleChange = (event) => {
        this.setState({ userlogin: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.userlogin !== '') {
            this.props.sendUsername(this.state.userlogin)
            this.setState({ userlogin: '' });
        } else {
            alert('Veuillez saisir quelque chose');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" style={styleInput} value={this.state.userlogin} onChange={this.handleChange} placeholder="Username" />
                <button type="submit" style={styleButton}>Connect</button>
            </form>
        );
    }
}

export default LoginBar;