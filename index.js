console.log("Hello World!")

const logger = () => console.log("Hello Uzbekistan!")
logger()

console.log("Hello World!", __dirname)
console.log("Hello World!", __filename)


//Import Module

//User model import
const userData = require('./user')

console.log(userData.user)
userData.userLogger()















