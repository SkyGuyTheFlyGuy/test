const readlineSync = require('readline-sync');

function getAndGreet() {
    var name = readlineSync.question("Please enter your name: ");
    console.log("Hello " + name);
}

getAndGreet();