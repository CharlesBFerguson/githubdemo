
//  Exercise Dom manipulation

//  - change styles of 3 separate elements using Javascript.
//  - change the class name and text of a a child or sibling of each of the above elements.

//  Future Chuck:
//  - Fix shadow in whiteBar()
//  - Add left padding on all text.
//  - Try using .removeElementListener() to return button mouseover state to original state.
//  - Find a way to enter the colorBar() funtions only once and use in both instances.
//  - Add border around menu (colorBar). Try to encapsulate all 3 instead of individually.
//  - Still need to change class names to complete assignment.
//  - Try adding control to apply JS and/or CSS styles.

document.getElementById("usaBtn").addEventListener("mouseover",function(){
  document.getElementById("usaBtn").style.color = "red";
});
document.getElementById("usaBtn").addEventListener("mouseout",function(){
  document.getElementById("usaBtn").style.color = "black";
});
document.getElementById("usaBtn").addEventListener("click",countryCheck);
//
document.getElementById("franceBtn").addEventListener("mouseover",function(){
  document.getElementById("franceBtn").style.color = "red";
});
document.getElementById("franceBtn").addEventListener("mouseout",function(){
  document.getElementById("franceBtn").style.color = "black";
});
document.getElementById("franceBtn").addEventListener("click",countryCheck2);

function countryCheck() {
  document.getElementById("title").textContent = "AMERICA!";
  document.getElementById("unorderedList").style.color = "white";

  function redBar() {
    var c = document.getElementById("unorderedList").children;
    c[0].style.backgroundColor = "red";
    c[0].textContent = "RED";
  }
  redBar()
  
    function whiteBar() {
    var c = document.getElementById("unorderedList").children;
    c[1].textContent = "WHITE";
    //C[1].style = "text-shadow:2px 2px green";
  }
  whiteBar()

  function blueBar() {
    var c = document.getElementById("unorderedList").children;
    c[2].style.backgroundColor = "blue";
    c[2].textContent = "BLUE";
  }
  blueBar()
}

function countryCheck2() {
  let country="France";
  document.getElementById("title").textContent = "Vive la France!";
  document.getElementById("unorderedList").style.color = "white";

  function blueBar() {
    var c = document.getElementById("unorderedList").children;
    c[0].style.backgroundColor = "blue";
    c[0].textContent = "BLEU";
  }
  blueBar()
  
function whiteBar() {
  var c = document.getElementById("unorderedList").children;
  c[1].textContent = "BLANC";
  }
  whiteBar()

  function redBar() {
    var c = document.getElementById("unorderedList").children;
    c[2].style.backgroundColor = "red";
    c[2].textContent = "ROUGE";
  }
  redBar()
}
