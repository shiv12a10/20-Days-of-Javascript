// function validate(){
//     let x = document.forms["details"]["name"].value;
//     if(x =="")
//     {
//         alert("please input mail");
//         return false;
//     }
// }
// alert("hello");

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        // elem.style.left = pos + "px"; 
      }
    }
  }