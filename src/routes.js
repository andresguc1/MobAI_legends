const express = require('express')
const router = express.Router()
const createStrategyController = require('./controllers/createStrategy')

// Cambia la ruta a /create-strategy para que coincida con la solicitud desde index.html
router.post(
  '/create-strategy',
  createStrategyController.executeFunctionInCreateStrategy
)
router.post(
  '/execute-function-in-create-strategy',
  createStrategyController.executeFunctionInCreateStrategy
)

// Exportar el enrutador
module.exports = router
