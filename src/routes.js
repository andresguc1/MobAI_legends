const express = require('express')
const router = express.Router()
const createStrategyController = require('./controllers/createStrategy')

// Cambia la ruta a /createStrategy
router.post('/createStrategy', createStrategyController)

// Exportar el enrutador
module.exports = router
