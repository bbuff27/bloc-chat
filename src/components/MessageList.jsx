import React, {Component} from 'react';
import '../styles/messagelist.css';

class MessageList extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }

        this.messagesRef = this.props.firebase.database().ref("messages");
    }

    componentDidMount(){
        this.messagesRef.on("child_added", snapshot =>{
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat( message ) })
        });
    }

    render(){
        return(
            <h1>Messages!</h1>
        );
    }
}

export default MessageList;