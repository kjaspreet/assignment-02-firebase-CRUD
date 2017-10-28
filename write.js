const firebase = require('firebase');

	firebase.initializeApp({
	databaseURL: "https://nodejs-3ce6a.firebaseio.com"
	})

	var dbRef = firebase.database().ref('mydatabase/');
	dbRef.set({
		object1:{
			name: 'jaspreet'
		},
		object2:{
			name:'ramanpreet'
		},
		object3:{
			name:'ashley'
		}
	});



