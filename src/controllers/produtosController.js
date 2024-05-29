const AppError = require("../utils/AppError");
const api = require("../services/axios");

class produtosController {
  async buscar(req, res) {
    const { variantId } = req.body;

    if (!variantId) {
      throw new AppError("Para buscar o produto, é necessario colocar o numero da Variante")
    }
    const produtos = api.get(`/api/Products?store=true&variantId=${variantId}`);

    try {
      const { data } = await produtos;

      if (data.length === 0) {
        return res.status(404).json({message: 'Produto nao existe'});
      }

      return res.status(200).json(data);

    } catch (error) {
      throw new AppError("Error ao buscar o produto.", 500);
    }
  }
}

module.exports = produtosController;
