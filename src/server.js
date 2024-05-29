require('express-async-errors')
const express = require('express')
const routes = require('./routes')
const AppError = require('./utils/AppError')
const app = express()

app.use(express.json())
app.use(routes)

app.use((error, req, res, next)=> {
    if(error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }

    console.log(error)

    return res.status(500).json({
        status: 'error',
        message: 'Error Internal Server'
    })

})

const PORT = 3333
app.listen(PORT, ()=> console.log(`Rodando o servidor em http://localhost:${PORT}`))