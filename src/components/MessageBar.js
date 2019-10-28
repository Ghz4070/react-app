import React from 'react'

const styleInput = { borderRadius: 5, border: 'none', fontSize: 12, padding: 10, marginRight: 10 };
const styleButton = { cursor: 'pointer', borderRadius: 5, backgroundColor: "lightblue", fontSize: 12, fontWeight: 'bold', padding: 10, width: 100 };

class MessageBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let a = this.state.message
        console.log(a);
        // alert('A name was submitted: ' + this.state.message);
        // event.preventDefault();
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

export default MessageBar;