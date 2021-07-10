
document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login = document.getElementById("login");

  login.addEventListener("click", function () {
    if (email.value && password.value) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(function (data) {
          const user = firebase.auth().currentUser;
          console.log('User logged in')
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  });

  firebase.auth().onAuthStateChanged(function (user) {
    if (firebase.auth().currentUser) {
      // window.location = "feedback.html";
    }
  });
});












// document.addEventListener("DOMContentLoaded", function(){
//  console.log("loaded");
//   firebase.auth().onAuthStateChanged((user) => {
//       var notloggedin = document.getElementById('not-logged-in')
//       var loggedin = document.getElementById('logged-in')
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       loggedin.style.display = 'none'
//       notloggedin.style.display = 'block'
//       console.log(user)
//     } else {
//       // User is signed out
//       loggedin.style.display = 'block'
//       notloggedin.style.display = 'none'
//       console.log(user)
//     }
//   });

//   function login(event){
//       event.preventDefault()
//       var email = document.getElementById('email').value
//       var password = document.getElementById('password').value
//       firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((user) => {
//     if(user){
//         alert('welcome back you are logged in now ')
//     }
//   })
//   .catch((error) => {
//     console.error('error signing in',error)
//     alert(error)
//   });

//   }
//   login()
//   function logout() {
//     firebase.auth().signOut().then(() => {
//         // Sign-out successful.
//       }).catch((error) => {
//         // An error happened.
//       });
//   }
// logout()
// });