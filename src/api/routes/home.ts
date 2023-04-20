import express from 'express'
const route = express.Router()

route.get('/', (req, res) => {
  res.status(200).sendFile(`${global.__root}/public/meow.html`)
})

export const homeRoute = route
