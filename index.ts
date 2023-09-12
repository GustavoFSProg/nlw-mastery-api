import {fastify} from 'fastify'
import dotenv from 'dotenv'

 dotenv.config()

 const {PORT} = process.env

const app = fastify()

app.get('/', () => {
  return  `🍰 Api Running: ${PORT}`})


app.listen({port: PORT, }).then(() =>
{ console.log(  `🍰 Api Running: ${PORT}`)})