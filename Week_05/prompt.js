/*
Exercise prompt
(/) - Create a Node Prompt that asks a question.
(/) - Then have the prompt print to the console a string with some of the user's response.
( ) - Then after that question is asked. Ask another question.
( ) - Put the input logic and the output logic into different files and require both of them into a main file.
( ) - Make the main file callable from the cli.
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your First Name?`, (firstName) => {
  readline.question(`What's your Last Name?`, (lastName) => {
    console.log(`Hi ${firstName} ${lastName}!`);
    readline.close()
  })
})