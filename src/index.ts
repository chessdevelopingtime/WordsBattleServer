import express from 'express'
import http from 'http'
import env from 'dotenv'
import { apiRoute } from './api/routes/api'
import { WSS } from './helpers/wss/wss'

import { mongoDbConnect } from './tools/bd/mongoDb'
import { homeRoute } from './api/routes/home'

env.config()
global.__root = __dirname

const PORT = process.env.PORT
const app = express()

const db = mongoDbConnect((db) => {
  console.log('db accessed success! ^w^')
  // прослушиваем прерывание работы программы (ctrl-c)
  process.on('SIGINT', () => {
    db.close()
    process.exit()
  })
})

app.use('/', homeRoute)
app.use('/api', apiRoute)
app.use('/public', express.static(`${global.__root}/public`))

const server = http.createServer(app)
WSS.run(server)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})
