// nesse arquivo contém a lógica das rotas
const Order = require('../models/Order');

//função para criar os pedidos
exports.createOrder = async (req, res) => {
  try {

    const body = req.body;

    //mappeando os dados
    const mappedOrder = {
      orderId: body.numeroPedido.split("-")[0],
      value: body.valorTotal,
      creationDate: new Date(body.dataCriacao),
      items: body.items.map(item => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    };
    //cria o pedido no banco
    const order = await Order.create(mappedOrder);

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//função p/ buscar pedidos
exports.getOrder = async (req, res) => {
  try {

    //buscando o id através do valor da url
    const order = await Order.findOne({
      orderId: req.params.orderId
    });

    //se estiver vazio é retornado um erro
    if (!order)
      return res.status(404).json({ message: "Pedido não encontrado" });

    res.json(order);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
