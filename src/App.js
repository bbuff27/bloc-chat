import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.jsx';
import MessageList from './components/MessageList.jsx';

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
  render() {
    return (
      <div className="App">
          <RoomList firebase={firebase} />
          <MessageList firebase={firebase} />
      </div>
    );
  }
}

export default App;
