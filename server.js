// 1. set up express methods
const express = require('express')
const app = express()

//1.
app.use(express.json())

//1.
app.use('/auth', require('./routes/authRouter.js'))

//1.
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//1.
app.listen(9000, () => {
    console.log('Server: Local - Port - 9000')
})