// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAGIwcP388xbKUIZFxsleYArU9h2593YmY",
  authDomain: "schoolchat-c2aef.firebaseapp.com",
  databaseURL: "https://schoolchat-c2aef-default-rtdb.firebaseio.com",
  projectId: "schoolchat-c2aef",
  storageBucket: "schoolchat-c2aef.appspot.com",
  messagingSenderId: "93817352528",
  appId: "1:93817352528:web:8b362e4178b81411b4bc55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


      user_name= localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

      function logout(){
            localStorage.removeItem("username");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
 
       //End code
       });});}
getData();



 
