var mposition = window.innerWidth;

var pposition = 0;
function myMove() {
    
    
  var elem = document.getElementById("plane");
    var missile=document.getElementsByClassName('.missile')
  
  var id = setInterval(animate1, 5);
  function animate1() {
    if (pposition>1200) {
        pposition=0
      

    } else {
      pposition++; 
      elem.style.left = pposition + 'px';
      
    }

  }
  

}
 
/* animation for missile */
function missile() {
    
    var missile=document.getElementById('missile')
     
      
    var id = setInterval(animate1, 2);
    function animate1() {
      if (mposition<0) {
          mposition=window.innerWidth+200
         
  
      } else {
        mposition--; 
        
        missile.style.left = mposition + 'px';
        missile.style.rotate="225deg"
        
        
      }
  
    }
  
  }
  
  
  function missile2() {
    
    console.log("misile")
   
      var missile=document.getElementById('missile2')
    var pos = window.innerWidth;
    var pos1=window.innerWidth
    var up=0;
    var id = setInterval(animate1, 3);
    function animate1() {
      if (pos<50) {
          pos=window.innerWidth+200
         
  
      } else {
        pos--; 
        
        missile.style.left = pos + 'px';
        missile.style.rotate="225deg"
        
        
      }
  
    }
  
  }
