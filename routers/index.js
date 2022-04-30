const express = require('express')
const router = express.Router()

router.use('/v1', require('../routers/v1/index'))
router.use('/v2', require('../routers/v2/index'))

module.exports = router
