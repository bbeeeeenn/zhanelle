      let date = "2021-09-25";
      let response; 
      let entryCount = 0;
      let entryLimit = 3;      
      
      /* the funnction*/
      function myFunction(){
     response = document.getElementById("date").value;
        
         while (response == "1969-06-09") {
          alert("Choose ka date mahal");
          return
        } 
        
       if (response != date) {
      document.getElementById("date").value = "1969-06-09";
       alert("Wrong Date");
       entryCount++;
       console.log(entryCount)    
         if (entryCount == 1) {
           document.getElementById("message").innerHTML=("Ano babe")
         }
         else if (entryCount == 2){
           document.getElementById("message").innerHTML=("Wag mo sabihing di mo alam")
         }
         else if(entryCount == 3){
           document.getElementById("message").innerHTML=("shit")
         }  
       }
       else{
         alert("Welcome, Babe!(づ￣ ³￣)づ");
         window.location.href = "content.html"
          }
          
       if (entryCount > entryLimit) {
       document.getElementById("container").innerHTML=("<br><br><p>DI IKAW YUNG BEBE KO!</p><br><button onclick=window.location.href='index.html'>Lumayas</button>")
       };
    }/* end of funnction*/
