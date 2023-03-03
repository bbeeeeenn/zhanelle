      const password = "zenith";
      let response = ""; 
      let entryCount = 0;
      const entryLimit = 3;      
      
      /* the funnction*/
      function myFunction(){
     response = document.getElementById("password").value;
        
        while (response == "") {
          alert("Put a password, babe:*");
          return
        }
        
       if (response != password) {
      document.getElementById("password").value = "";
       alert("Wrong Password");
       entryCount++;
       console.log(entryCount)    
         if (entryCount == 1) {
           document.getElementById("message").innerHTML=("Pinangalan ko base sa laro at ngalan mo")
         }
         else if (entryCount == 2){
           document.getElementById("message").innerHTML=("Pinangalan ko base sa laro at ngalan mo")
         }
         else if(entryCount == 3){
           document.getElementById("message").innerHTML=("Pinangalan ko base sa laro at ngalan mo")
         }  
       }
       else{
         //alert("iloveyou!(灬♥ω♥灬)");
         window.location.href = "gateway2.html"
          }
       
       if (entryCount > entryLimit) {
       document.getElementById("container").innerHTML=("<br><br><p>Di ikaw si zhanelle..</p><button onclick=window.location.href='index.html'>Back</button><br><br>")
       };
    }/* end of funnction*/
