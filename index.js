var mposition = window.innerWidth;

var m2position = window.innerWidth;
  
var pposition = 0;
console.log(m2position,mposition)

    function myMove() {
        
        
      var elem = document.getElementById("plane");
      console.log(typeof(elem))
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
          },2500) 
          
          elem.style.left = pposition + 'px';
        }
      }
    }



/* animation for missile */


setTimeout(
  function missile() {
    
      
      var missile=document.getElementById('missile')
       
        
      var id = setInterval(animate1, 2);
      function animate1() {
        if (mposition<0) {
            mposition=window.innerWidth+200
        } else {
          mposition-=2; 
          
          missile.style.left = mposition + 'px';
          missile.style.rotate="225deg"
          
          
        }
    
      }
    
    },1500)
   
  /* animation for missile-2 */
  setTimeout(function missile2() {
    
   
    var missile=document.getElementById('missile2')
 
  var id = setInterval(animate1, 2);
  function animate1() {
    if (m2position<50) {

        m2position=window.innerWidth
       

    } else {
      m2position-=2; 
      
      missile.style.left = m2position + 'px';
      missile.style.rotate="225deg"
     
      
      
    }

  }

},2000)
