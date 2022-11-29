

//your code here
function myFunction() {
    
    var x = document.getElementById("evaluatedText").value;
    var a = x.trim();
    if (a.length == 0) {
      document.getElementById("wordCount").innerHTML =  0;
      return;
    }
    var b= a.split(" "); 
    
   // console.log(b);
    document.getElementById("wordCount").innerHTML =  b.length;
}