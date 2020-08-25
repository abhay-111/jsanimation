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
