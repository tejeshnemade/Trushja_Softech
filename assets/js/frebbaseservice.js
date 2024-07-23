// // Import the Firebase SDK
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// import {
//   getFirestore,
//   collection,
// } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

// // Your Firebase configuration
// // Import the functions you need from the SDKs you need

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCZ1dUkoDR_qX2ML5D46lHzm4V9sGXCnfk",
//   authDomain: "trushja-contactform.firebaseapp.com",
//   databaseURL: "https://trushja-contactform-default-rtdb.firebaseio.com",
//   projectId: "trushja-contactform",
//   storageBucket: "trushja-contactform.appspot.com",
//   messagingSenderId: "862565810004",
//   appId: "1:862565810004:web:97b2556bd5086d033652c1",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Function to handle form submission
// function handleSubmit(event) {
//   event.preventDefault(); // Prevent default form submission

//   // Get form data
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const subject = document.getElementById("subject").value;
//   const message = document.getElementById("message").value;

//   // Create a new document in the "messages" collection
//   addDoc(collection(db, "messages"), {
//     name: name,
//     email: email,
//     subject: subject,
//     message: message,
//     timestamp: new Date(), // Add a timestamp for ordering
//   })
//     .then((docRef) => {
//       // Success!
//       console.log("Document written with ID:", docRef.id);
//       // You can update the UI here to show a success message
//       document.querySelector(".sent-message").style.display = "block";
//       document.querySelector(".loading").style.display = "none";
//       document.querySelector(".error-message").style.display = "none";
//       // Clear the form
//       document.getElementById("myForm").reset();
//     })
//     .catch((error) => {
//       // Error!
//       console.error("Error adding document:", error);
//       // You can update the UI here to show an error message
//       document.querySelector(".error-message").style.display = "block";
//       document.querySelector(".loading").style.display = "none";
//       document.querySelector(".sent-message").style.display = "none";
//     });
// }

// // Attach the event listener to the form
// document.getElementById("myForm").addEventListener("submit", handleSubmit);

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// import {
//   getFirestore,
//   collection,
//   addDoc,
// } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCZ1dUkoDR_qX2ML5D46lHzm4V9sGXCnfk",
//   authDomain: "trushja-contactform.firebaseapp.com",
//   databaseURL: "https://trushja-contactform-default-rtdb.firebaseio.com",
//   projectId: "trushja-contactform",
//   storageBucket: "trushja-contactform.appspot.com",
//   messagingSenderId: "862565810004",
//   appId: "1:862565810004:web:97b2556bd5086d033652c1",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Function to handle form submission
// function handleSubmit(event) {
//   event.preventDefault(); // Prevent default form submission

//   // Get form data
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const subject = document.getElementById("subject").value;
//   const message = document.getElementById("message").value;

//   // Create a new document in the "messages" collection
//   addDoc(collection(db, "messages"), {
//     name: name,
//     email: email,
//     subject: subject,
//     message: message,
//     timestamp: new Date(), // Add a timestamp for ordering
//   })
//     .then((docRef) => {
//       // Success!
//       console.log("Document written with ID:", docRef.id);
//       // You can update the UI here to show a success message
//       document.querySelector(".sent-message").style.display = "block";
//       document.querySelector(".loading").style.display = "none";
//       document.querySelector(".error-message").style.display = "none";
//       // Clear the form
//       document.getElementById("myForm").reset();
//     })
//     .catch((error) => {
//       // Error!
//       console.error("Error adding document:", error);
//       // You can update the UI here to show an error message
//       document.querySelector(".error-message").style.display = "block";
//       document.querySelector(".loading").style.display = "none";
//       document.querySelector(".sent-message").style.display = "none";
//     });
// }

// // Attach the event listener to the form
// document.getElementById("myForm").addEventListener("submit", handleSubmit);
