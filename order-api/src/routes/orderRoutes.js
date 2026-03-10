const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');

router.post('/order', controller.createOrder);
router.get('/order/:orderId', controller.getOrder);
router.get('/order/:orderAll', controller.getOrders);

module.exports = router;