
// // CODE FOR OPTION 1
// // option 1: multideminsional array
// let inventory = [
//     ['apple', 10],
//     ['blueberry', 15],
//     ['broccoli', 5],
//     ['milk', 25],
//     ['cheese', 0]
// ];
// function add() {
//     let input = document.getElementById('userInput').value;
//     inventory.forEach(function(array) {
//         if(input == array[0]) {
//             array[1]++;
//             console.log(array);
//         }
//     });
// }
// function sub() {
//     let input = document.getElementById('userInput').value;
//     for(let i = 0; i < inventory.length; i++) {
//         if(input == inventory[i][0]) {
//             if(inventory[i][1] > 1) {
//                 inventory[i][1]--;
//                 console.log(inventory[i]);
//             } else if(inventory[i][1] == 0) {
//                 console.log(`${input} is out of stock!!!`);
//                 console.log(inventory[i]);
//             } else {
//                 console.log(`${input} is out of stock!!!`);
//                 inventory[i][1]--;
//                 console.log(inventory[i]);
//             }
//         }
//     } 
// }

//

// CODE FOR OPTION 2
// option 2: parallel array
let name = ['apple', 'blueberry', ' broccoli', 'milk', 'cheese'];
let qty = [10, 15, 5, 25, 4]; 
function add() {
    let input = document.getElementById('userInput').value;
    for(let i = 0; i < name.length; i++) {
        if(input == name[i]) {
            qty[i]++;
            console.log(`${name[i]}: ${qty[i]}`);
        } 
    }
}
function sub() {
    let input = document.getElementById('userInput').value;
    let i = 0;
    name.forEach(function (name) {
        if(name == input) {
            if(qty[i] > 1) {
                qty[i]--;
                console.log(`${name}: ${qty[i]}`);
            } else if(qty[i] == 0) {
                console.log(`${name} is out of stock!!!`);
                console.log(`${name}: ${qty[i]}`);
            } else {
                console.log(`${name} is out of stock!!!`);
                qty[i]--;
                console.log(`${name}: ${qty[i]}`);
            }
        }
        i++;
    });
}

var