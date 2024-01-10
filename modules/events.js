const Events = require('events')
const { data } = require('jquery')

// +
class Logger extends Events{
    log(a,b){
        this.emit('calculate', a + b)
    }
}

const logger = new Logger()
logger.on('calculate', data=>{
    console.log(data)
})
logger.log(12, 13)

// x
class Logger1 extends Events{
    log(a,b){
        this.emit('calculate', a * b)
    }
}

const logger1 = new Logger1()
logger1.on('calculate', data=>{
    console.log(data)
})
logger1.log(12, 13)










