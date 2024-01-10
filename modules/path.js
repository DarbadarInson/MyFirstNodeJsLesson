const path = require('node:path');

console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))


console.log(path.basename(__dirname))
console.log(path.extname(__dirname))
console.log(path.dirname(__dirname))


console.log(path.parse(__filename))
console.log(path.parse(__dirname))

console.log(path.parse(__filename).base)
console.log(path.parse(__filename).dir)
console.log(path.parse(__filename).ext)
console.log(path.parse(__filename).name)
console.log(path.parse(__filename).root)

//NodeJs join method for file and folder......
console.log(path.join(__dirname, 'template', 'index.html'))
//It performs the same function as above
console.log(path.resolve(__dirname, 'templatess', 'index.html'))
//Here, the index.html file is given root rights
console.log(path.resolve(__dirname, 'templates', '/index.html'))










