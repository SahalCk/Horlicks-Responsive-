var input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    var search = document.getElementById("myInput").value

    if(search==""){
      alert("Please enter the item you want to search")
    }else{
      alert("You have searched "+search)
    }
  }
});


function sendmail(){
    var mail = document.getElementById("mailbox").value

    if(mail==""){
        alert("Please enter the mail")
    }else if((mail.indexOf('@') < 0) && (mail.indexOf('.') < 0)){
        alert(mail+" is not containing '.' or '@'")
    }
    else{
        alert("Your mail has to contact@horlicks.com")
    }
    
}