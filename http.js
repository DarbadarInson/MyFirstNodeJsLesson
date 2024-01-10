const server = require('http')

const server = http.createServer((request, Response) => {
    //request - so'rov
    //response - javob
    console.log(request.url)
    Response.write('Hello Tashkent')
})

server.listen(3000, () => {
    console.log('Server has been started on port: 3000')
})










