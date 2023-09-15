import { FastifyInstance } from 'fastify'
import { PrismaClient } from '@prisma/client'
import fastifyMultipart from '@fastify/multipart'
import path from 'node:path'
import { randomUUID } from 'node:crypto'
import fs from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'

const pump = promisify(pipeline)

const prisma = new PrismaClient()

export async function uploadVideoRoute(app: FastifyInstance) {
  app.register(fastifyMultipart, {
    limits: {
      fileSize: 1_048_576 * 50, // 25mb
    },
  })

  app.post('/videos', async (request, reply) => {
    const data = await request.file()

    if (!data) {
      return reply.status(400).send({ error: 'Missing video file!!' })
    }

    const extentions = path.extname(data.filename)

    if (extentions !== '.mp3') {
      return reply.status(400).send({ error: 'Invalid input type, upload .MP3 file!!!' })
    }
    const filebasename = path.basename(data.filename, extentions)

    const fileUploadName = `${filebasename}-${randomUUID()}${extentions}`

    const uploadDestination = path.resolve(__dirname, '../../tmp', fileUploadName)

    await pump(data.file, fs.createWriteStream(uploadDestination))

    const video = await prisma.video.create({
      data: {
        name: data.filename,
        path: uploadDestination,
      },
    })


    return {
      video,
    }
  })
}
