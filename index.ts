import {fastify} from 'fastify'
import dotenv from 'dotenv'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

 dotenv.config()

 const {PORT} = process.env

const app = fastify()

app.get('/', () => {
  return  `🍰 Api Running:`})


  app.get('/prompts', async () => {
   
   const prompts = await prisma.prompt.findMany()
    return prompts})
  

app.listen({port: Number(PORT), }).then(() =>
{ console.log(  `🍰 Api Running: ${PORT}`)})

export default app
