const firebase = require('firebase');

firebase.initializeApp({
	databaseURL: "https://nodejs-3ce6a.firebaseio.com"
})

var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});