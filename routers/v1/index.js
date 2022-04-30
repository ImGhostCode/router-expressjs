const express = require('express')
const router = express.Router()

router.use('/order', require('./orders/order.router'))
router.use('/payment', require('./payments/payment.router'))

module.exports = router