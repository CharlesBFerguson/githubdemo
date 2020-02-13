//  Exercise Dom manipulation
//  - change styles of 3 separate elements using Javascript
//  - change the class name and text of a a child or sibling
//    of each of the above elements:

//  Future Chuck: Find a way to enter the color bar funtions
//  only once and use in both instances.

function countryCheck() {
  let country="USA";
  document.getElementById("title").textContent = "AMERICA!";
  document.getElementById("unorderedList").style.color = "white";

  function redBar() {
    var c = document.getElementById("unorderedList").children;
    c[0].style.backgroundColor = "red";
    c[0].textContent = "RED";
  }
  redBar()

  function blueBar() {
    var c = document.getElementById("unorderedList").children;
    c[2].style.backgroundColor = "blue";
    c[2].textContent = "BLUE";
  }
  blueBar()
}

function countryCheckTwo() {
  let country="France";
  document.getElementById("title").textContent = "Vive la France!";
  document.getElementById("unorderedList").style.color = "white";

  function blueBar() {
    var c = document.getElementById("unorderedList").children;
    c[0].style.backgroundColor = "blue";
    c[0].textContent = "BLUE";
  }
  blueBar()

  function redBar() {
    var c = document.getElementById("unorderedList").children;
    c[2].style.backgroundColor = "red";
    c[2].textContent = "RED";
  }
  redBar()
}