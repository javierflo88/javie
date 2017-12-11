import React, { Component } from 'react';
import MessageList from './components/MessageList';

import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';

class App extends Component {

  constructor(props){
    super(props);
    firebase.initializeApp({
      apiKey: "AIzaSyDSd7vob-sWg3Ei4jBfSPdIWfg-t01OFNE",
      authDomain: "lavase-6ba0e.firebaseapp.com",
      databaseURL: "https://lavase-6ba0e.firebaseio.com",
      projectId: "lavase-6ba0e",
      storageBucket: "lavase-6ba0e.appspot.com",
      messagingSenderId: "989407509190"
    });
  }

  render(){
    return (
      <div className="container">
            <Header title="Ejemplo  de  Chat" />
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
            </div>
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox db={firebase} />
              </div>
            </div>
        </div>
    )
  }
}

export default App;
