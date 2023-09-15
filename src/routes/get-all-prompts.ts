import { FastifyInstance } from "fastify"
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()


export async function getAllPromptsRoute(app: FastifyInstance)
{
app.get('/prompts', async () => {
   
  const prompts = await prisma.prompt.findMany()

  
   return prompts})}