function myMove() {
    
    
  var elem = document.getElementById("plane");
    var missile=document.getElementsByClassName('.missile')
  var pos = 0;
  var pos1=window.innerWidth
  var count=0;
  var id = setInterval(animate1, 5);
  function animate1() {
    if (pos>1200) {
        pos=0
      

    } else {
      pos++; 
      elem.style.left = pos + 'px';
      
    }

  }
  

}
/* animation for missile */
function missile() {
    
   
      var missile=document.getElementById('missile')
    var pos = window.innerWidth;
    var pos1=window.innerWidth
    var up=0;
    var id = setInterval(animate1, 2);
    function animate1() {
      if (pos<0) {
          pos=window.innerWidth+200
         
  
      } else {
        pos--; 
        
        missile.style.left = pos + 'px';
        missile.style.rotate="225deg"
        
        
      }
  
    }
  
  }
