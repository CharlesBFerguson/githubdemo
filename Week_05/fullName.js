const fs = require('fs');

const fsFirstName = fs.readFileSync('firstName.txt', 'utf8');
const fsLastName = fs.readFileSync('lastName.txt', 'utf8');
console.log(`Welcome, ${fsFirstName} ${fsLastName}`)

// YAY!