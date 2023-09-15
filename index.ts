import { fastify } from 'fastify'
import dotenv from 'dotenv'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAiCompletionRoute } from './routes/generate-ai-comlemtions'

dotenv.config()

const { PORT } = process.env

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)

app.get('/', () => {
  return `🍰 Api Running:`
})

app.listen({ port: Number(PORT) }).then(() => {
  console.log(`🍰 Api Running: ${PORT}`)
})
