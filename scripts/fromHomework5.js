var answer = prompt("Hi, What's your name?");

      var firstReply = "Oh, so your name is ";

      function replyToName() {
        alert(firstReply + answer)
      }
      
      replyToName()


      var replyToAge = prompt("So how old are you?");

      function ResponseToAge() {
        if (replyToAge <= 24)/* Boolean*/ {
           alert("So your " + replyToAge + "... a young spring chiken!")
        }
        else {
          alert(replyToAge + "... What an old person YOU are...")
          alert("Relax, I'm just joking.")
        }
      }
     
      ResponseToAge()
      

      var firstName = ["Al", "Yosef", "John", "Josh"];
      var lastName = ["Smith", "Johnson", "Levertov"];


      var aboutMe = alert("Ok, now about me:")

      function myIntro() {
        alert("My name is " + (firstName[0, 1] + " " + (lastName[0, 2]) + "."))
        alert("I'm 24 years old.")
        alert("...and I'm looking into getting a job as a Full Stack web dev.")
      }

      myIntro()