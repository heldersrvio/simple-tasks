import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDPD5b6fyqQh5J-FnZMYYgpp_L-CQubjIo',
	authDomain: 'simple-tasks-734ac.firebaseapp.com',
	projectId: 'simple-tasks-734ac',
	storageBucket: 'simple-tasks-734ac.appspot.com',
	messagingSenderId: '373484943675',
	appId: '1:373484943675:web:b52e1585d6b1d56d3c1f1e',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
