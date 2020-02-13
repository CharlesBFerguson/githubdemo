//  Exercise Dom manipulation
//  - change styles of 3 separate elements using Javascript
//  - change the class name and text of a a child or sibling
//  of each of the above elements:

let country="USA"
console.log(country)

  if (country=="USA") {
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
    }
    whiteBar()

    function blueBar() {
      var c = document.getElementById("unorderedList").children;
      c[2].style.backgroundColor = "blue";
      c[2].textContent = "BLUE";
    }
    blueBar()
  
  } else if (country=="France") {
    document.getElementById("title").textContent = "Vive la France!";
    document.getElementById("unorderedList").style.color = "white";

    function blueBar() {
      var c = document.getElementById("unorderedList").children;
      c[0].style.backgroundColor = "blue";
      c[0].textContent = "BLUE";
    }
    blueBar()

    function whiteBar() {
      var c = document.getElementById("unorderedList").children;
      c[1].textContent = "WHITE";
    }
    whiteBar()

    function redBar() {
      var c = document.getElementById("unorderedList").children;
      c[2].style.backgroundColor = "red";
      c[2].textContent = "RED";
    }
    redBar()
  }