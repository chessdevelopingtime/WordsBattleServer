import express from 'express'
const route = express.Router()

route.get('/websocket', (req, res) => {
  res.status(200).sendFile(`${global.__root}/public/doc/index.html`)
})

export const apiRoute = route
