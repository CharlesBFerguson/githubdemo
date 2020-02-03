// Exercise array
//  - make an array of 10 grocery store items loop through that array and log each item.
//  - loop through a string at least 10 characters long and log each character
//  - make that string upper case

var salad=["lettuce","tomato","celery","radish","carrot","onion","bacon","egg","cucumber","Craisins®"];

for(var i=0;i<salad.length;i++){
  console.log(salad[i]);
}

var str="Log each character."
for (var i=0;i<str.length;i++){
  console.log(str[i]);
}

var str2=str.toUpperCase();
  console.log(str2);