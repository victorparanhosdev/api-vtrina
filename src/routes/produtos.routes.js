const { Router } = require('express')
const produtosController = require('../controllers/produtosController')
const ProdutosController = new produtosController()

const produtosRouter = Router()

produtosRouter.get('/', ProdutosController.buscar)
produtosRouter.post('/', ProdutosController.criar)


module.exports = produtosRouter