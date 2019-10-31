import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessages } from '../redux/action/messages'
import MessageList from './../components/MessageList'

class MessageListContainer extends Component {
    componentDidMount = () => {
        this.props.dispatch(getMessages());
    }

    render() {
        // console.log(this.props.msg.messages.lenght)
        return (
            <MessageList msg={this.props.msg}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        msg: state.messages
    }
}

const connectComponent = connect(mapStateToProps)

export default connectComponent(MessageListContainer);     