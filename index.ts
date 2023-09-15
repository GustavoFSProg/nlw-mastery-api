import { fastify } from 'fastify'
import dotenv from 'dotenv'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from './src/routes/get-all-prompts'
import { uploadVideoRoute } from './src/routes/upload-video'
import { createTranscriptionRoute } from './src/routes/create-transcription'
import { generateAiCompletionRoute } from './src/routes/generate-ai-comlemtions'

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
