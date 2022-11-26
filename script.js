//your code here
function myFunction() {
    
    var x = document.getElementById("evaluatedText").value;
    var a = x.split(" ");
   
    document.getElementById("wordCount").innerHTML =  a.length;
  }