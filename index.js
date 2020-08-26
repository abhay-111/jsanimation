var mposition = window.innerWidth;

var pposition = 0;


    function myMove() {
        
        
      var elem = document.getElementById("plane");
        var missile=document.getElementsByClassName('.missile')
      
      var id = setInterval(animate1, 4);
      function animate1() {

        if (pposition>window.innerWidth+500) {
          clearInterval(id)
        location.reload()
        } 
        else {
      
          pposition++;
          setTimeout(()=>{
            
          elem.style.rotate='360deg'
          elem.style.transition='1s'
          },2000) 
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
  
  
  /* animation for missile-2 */
  function missile2() {
    
    console.log("misile")
   
      var missile=document.getElementById('missile2')
    var m2position = window.innerWidth;
    
    var id = setInterval(animate1, 2);
    function animate1() {
      if (m2position<50) {
          m2position=window.innerWidth+200
         
  
      } else {
        m2position--; 
        
        missile.style.left = m2position + 'px';
        missile.style.rotate="225deg"
       
        
        
      }
  
    }
  
  }
