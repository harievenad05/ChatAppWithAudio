import firebase from 'firebase';
import {
  F_API_KEY,
  F_PROJECT_ID,
  F_MSG_ID,
  APP_ID,
  MEASURE_ID,
} from 'react-native-dotenv';

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () =>
    firebase.initializeApp({
      apiKey: F_API_KEY,
      authDomain: 'rnchat-c1c72.firebaseapp.com',
      databaseURL: 'https://rnchat-c1c72.firebaseio.com',
      projectId: F_PROJECT_ID,
      storageBucket: 'rnchat-c1c72.appspot.com',
      messagingSenderId: F_MSG_ID,
      appId: APP_ID,
      measurementId: MEASURE_ID,
    });

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = (user) => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({message}) {
        alert(message);
      }
    }
  };
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  parse = (snapshot) => {
    const {timestamp: numberStamp, text, user} = snapshot.val();
    const {key: _id} = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = (callback) =>
    this.ref
      .limitToLast(20)
      .on('child_added', (snapshot) => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = (messages) => {
    for (let i = 0; i < messages.length; i++) {
      const {text, user} = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = (message) => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;

//Access Key ID:
// AKIAI63QUSL2Y6KATC5A
// Secret Access Key:
// 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
//Bucket rnchatapp
//keyprefix: audio
//Region: ap-south-1
