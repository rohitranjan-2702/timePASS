const user = [
    { "username": "john_do" },
]

// define the function to check if the username exists
function isUsernameExists(username, user) {
  const data = user; // read the JSON file and parse the data
  const usernames = data.map(user => user.username); // extract the usernames from the data
  return usernames.includes(username); // check if the given username exists in the array of usernames
}

// example usage:
const username = 'john_doe';
const isExists = isUsernameExists(username, user);

if (isExists) {
  console.log(`The username '${username}' already exists in the JSON file.`);
} else {
  console.log(`The username '${username}' does not exist in the JSON file.`);
}


// reading form file
// const fs = require('fs'); 

// // define the function to check if the username exists
// function isUsernameExists(username, jsonFilePath) {
//   const data = JSON.parse(fs.readFileSync(jsonFilePath)); 
//   const usernames = data.map(user => user.username);
//   return usernames.includes(username); 
// }

// // example usage:
// const username = 'john_doe';
// const jsonFilePath = 'users.json';
// const isExists = isUsernameExists(username, jsonFilePath);

// if (isExists) {
//   console.log(`The username '${username}' already exists in the JSON file.`);
// } else {
//   console.log(`The username '${username}' does not exist in the JSON file.`);
// }
