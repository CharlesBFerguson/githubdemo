/*
Exercise prompt
(/) - Create a Node Prompt that asks a question.
(/) - Then have the prompt print to the console a string with some of the user's response.
(/) - Then after that question is asked. Ask another question.
(/) - Put the input logic and the output logic into different files and require both of them into a main file.
(/) - Make the main file callable from the cli.
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const fs = require('fs');

readline.question(`What's your First Name?`, (firstName) => {
  fs.writeFileSync('firstName.txt', firstName);
  readline.question(`What's your Last Name?`, (lastName) => {
    fs.writeFileSync('lastName.txt', lastName);
    console.log('files written')
    // console.log(`Welcome, ${firstName} ${lastName}!`);
    readline.close()
  })
})
// See fullName.js to read and output the files that were written