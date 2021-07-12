//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCUBltbInT4IGLj6GLhQKGASnlml1zs9sw",
      authDomain: "kwitter1-c06dd.firebaseapp.com",
      databaseURL: "https://kwitter1-c06dd-default-rtdb.firebaseio.com",
      projectId: "kwitter1-c06dd",
      storageBucket: "kwitter1-c06dd.appspot.com",
      messagingSenderId: "1047041298007",
      appId: "1:1047041298007:web:2c3c177f0a4ecb6fac5d12"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value ; 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = " " ;

}
