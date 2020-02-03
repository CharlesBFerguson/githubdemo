
    // Exercise Array

//  - make an array of 10 grocery store items loop through that array and log each item.
//  - loop through a string at least 10 characters long and log each character
//  - make that string upper case //

var salad=["lettuce","tomato","celery","radish","carrot","onion","bacon","egg","cucumber","Craisins"];

for(var i=0;i<salad.length;i++){
  console.log(salad[i]);
}

var str="Log each character."

for(var i=0;i<str.length;i++){
  console.log(str[i]);
}

var str2=str.toUpperCase();
  console.log(str2);


    // Exercise Arrays 2

// Create an inventory array and associate a number with each item.
// Then get user input that purchases items (subtracts one from the item).

var chocBar=[
  "Hershey",12,
  "KitKat",12,
  "Mr. Goodbar",12,
  "Snickers",12,
  "Three Musketeers",12];

  for(var i=0;i<chocBar.length;i++){
    console.log(chocBar[i]);
  }