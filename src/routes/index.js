const {Router} = require('express')
const produtosRouter = require("./produtos.routes")
const routes = Router()

routes.use("/produtos", produtosRouter)


module.exports = routes