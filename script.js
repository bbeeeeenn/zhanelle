      let password = "brookhaven";
      let response = ""; 
      let entryCount = 0;
      let entryLimit = 3;      
      
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
           document.getElementById("message").innerHTML=("Isipin mo")
         }
         else if (entryCount == 2){
           document.getElementById("message").innerHTML=("Dito lang tayo nagbobonding dati")
         }
         else if(entryCount == 3){
           document.getElementById("message").innerHTML=("# #### ###")
         }  
       }
       else{
         alert("iloveyou!(灬♥ω♥灬)");
         window.location.href = "content.html"
          }
       
       if (entryCount > entryLimit) {
       document.getElementById("container").innerHTML=("<br><br><p onclick=window.location.href='index.html'>HAYS, BALAKAJAN..</p>〒_〒<br><br>")
       };
    }/* end of funnction*/
