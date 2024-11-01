import express from 'express'
import cors from 'cors'
import authRouter from './routers/authRouter.js'
import accountRouter from './routers/accountRouter.js'
import welcome from './controllers/welcome.js'
import errorHandler from './middlewares/errorHandler.js'
import logger from './middlewares/logger.js'
import { ENVIRONMENT, PORT, HOST } from './config.js'

const app = express()

app.use(logger)
app.use(cors())
app.use(express.json())

app.get('/', welcome)

app.use('/auth', authRouter)
app.use('/account', accountRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST+':'+PORT}`)
});