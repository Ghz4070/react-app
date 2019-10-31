import React, { Component } from 'react'

const styleInput = { borderRadius: 5, border: 'none', fontSize: 12, padding: 10, marginRight: 10 };
const styleButton = { cursor: 'pointer', borderRadius: 5, backgroundColor: "lightblue", fontSize: 12, fontWeight: 'bold', padding: 10, width: 100 };

class Settings extends Component {
    state = { userName: '' };

    handleChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.userName !== '') {
            this.props.sendUsername(this.state.userName)
            this.setState({ userName: '' });
        } else {
            alert('Veuillez saisir quelque chose');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userName} onChange={this.handleChange} placeholder="votre userName" style={styleInput} />
                <button type="submit" style={styleButton}>Send</button>
            </form>
        );
    }
}

export default Settings;