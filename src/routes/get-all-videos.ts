
import { PrismaClient } from '@prisma/client'
import { FastifyInstance } from 'fastify'

const prisma = new PrismaClient()

export async function getAllVideoRoute(app: FastifyInstance) {
  app.get('/get-videos', async (res) => {
    const videos = await prisma.video.findMany()

    return  {videos}

    })


}
