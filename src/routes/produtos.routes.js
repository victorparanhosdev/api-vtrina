const { Router } = require('express')
const produtosController = require('../controllers/produtosController')
const ProdutosController = new produtosController()

const produtosRouter = Router()

produtosRouter.get('/', ProdutosController.buscar)


module.exports = produtosRouter