import {fastify} from 'fastify'
import dotenv from 'dotenv'

 dotenv.config()

 const {PORT} = process.env

const app = fastify()

app.get('/', () => {
  return ' 🍰 Api Running'})


app.listen({port: 5000, }).then(() =>
{ console.log( ' 🍰 Api Running')})