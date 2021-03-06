import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.jsx';
import MessageList from './components/MessageList.jsx';
import User from './components/User.jsx';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBAbjGP572h6fXMuPlbRXxkxhbYurVb10c",
    authDomain: "bloc-chat-32d22.firebaseapp.com",
    databaseURL: "https://bloc-chat-32d22.firebaseio.com",
    projectId: "bloc-chat-32d22",
    storageBucket: "bloc-chat-32d22.appspot.com",
    messagingSenderId: "1058393817899"
  };
  
  firebase.initializeApp(config);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeRoomId: null,
      user: null
    }
  }

  setActiveRoom(e) {
    const roomId = e.target.id;
    this.setState({ activeRoomId: roomId });
  }

  setUser(user) {
    this.setState({ user: user })
  }

  render() {
    return (
      <div className="App">
          <RoomList firebase={firebase} activeRoom={this.state.activeRoomId} setActiveRoom={(e) => this.setActiveRoom(e)} />
          <main>
            <User firebase={firebase} setUser={(user) => this.setUser(user)} user={this.state.user} />
            <section className="message-display">
            {
              this.state.activeRoomId
              ? <MessageList firebase={firebase} activeRoomId={this.state.activeRoomId} />
              : <h3>Select a room to start!</h3>
            }
              </section>
          </main>
      </div>
    );
  }
}

export default App;
