const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('/v2/order')
})

module.exports = router