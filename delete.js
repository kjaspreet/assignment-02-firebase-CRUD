const firebase = require('firebase');

firebase.initializeApp({
	databaseURL: "https://nodejs-3ce6a.firebaseio.com"
})

var ref = firebase.database().ref("mydatabase/object3");

ref.remove();
