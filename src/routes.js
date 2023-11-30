import express from 'express'
import { executeFunctionInCreateStrategy } from '../src/controllers/createStrategy.js'

const router = express.Router()

router.post('/create-strategy', executeFunctionInCreateStrategy)

export default router
