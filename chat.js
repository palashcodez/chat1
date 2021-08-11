// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA007tq-5cydZGYOCQKcoVKXXF-wQabg74",
    authDomain: "schoolchat-d37e7.firebaseapp.com",
    databaseURL: "https://schoolchat-d37e7-default-rtdb.firebaseio.com",
    projectId: "schoolchat-d37e7",
    storageBucket: "schoolchat-d37e7.appspot.com",
    messagingSenderId: "674782858679",
    appId: "1:674782858679:web:9c0def9ff371a9fe4cec32",
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

      function addroom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding the room..."
        });
        localStorage.setItem("room_name", room_name);
        window.location="chat_page.html";
  }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log("room name "+Room_names);
       row ="<div class='room' id= "+Room_names+"onclick='redirectToroomname(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;
       //End code
       });});}
getData();

function redirectToroomname(name){
  localStorage.setItem("room name", name);
  window.location="chat_page.html";
}



 
