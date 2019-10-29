import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from './../redux/action'

const styleInput = { borderRadius: 5, border: 'none', fontSize: 12, padding: 10, marginRight: 10 };
const styleButton = { cursor: 'pointer', borderRadius: 5, backgroundColor: "lightblue", fontSize: 12, fontWeight: 'bold', padding: 10, width: 100 };

class MessageBar extends Component {
    state = { message: '' };

    handleChange = (event) => {
        this.setState({ message: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.message !== '') {
            this.props.sendMessage(this.state.message)
            this.setState({message: ''});
        } else {
            alert('Veuillez saisir quelque chose');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.message} onChange={this.handleChange} placeholder="votre message" style={styleInput} />
                <button type="submit" style={styleButton}>Send</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (message) => {
            dispatch(addMessage(message)); // l'action
        }
    }
}

const connectComponent = connect(
    null,
    mapDispatchToProps
)

export default connectComponent(MessageBar);