document.addEventListener("DOMContentLoaded", function() {
    console.log("Loaded!");
  
    const db= firebase.firestore();
    const feedback = document.getElementById("feedback");
    const textarea = document.getElementById("textarea");
    const users = document.getElementById("users");


    feedback.addEventListener("submit", function(event){
        event.preventDefault();

        if(textarea.value){
            console.log(textarea.value);
        }
        addUser(textarea.value);
    })

    function addUser(text){

        db.collection('FeedbackUsers').add({
            textarea:text,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      }).then(function(docRef){
          console.log("Document written with ID:", docRef.id);
         // getUser();
          textarea.value="";
      }).catch(function(error){
          console.error("Error added to Document:", error);
      })
      }



    function getUser(){
        db.collection("FeedbackUsers")
        .orderBy("timestamp", "asc")
        .limit(20)
        .get()
        .then(function (querySnapshot) {

           let output ="";
           
           querySnapshot.forEach((doc) => {
              output+=`<li>${doc.data().textarea}</li>` 
           });
           users.innerHTML= output;
        });
    }  

    function getUserRealTime(){
        db.collection("FeedbackUsers")
        .orderBy("timestamp", "asc")
        .onSnapshot(function(querySnapshot){
            let output ="";
           
            querySnapshot.forEach((doc) => {
               output+=`<li>${doc.data().textarea}</li>` 
            });
            users.innerHTML= output;

            
         });
        }
        
  //  getUser();
  getUserRealTime();
});
