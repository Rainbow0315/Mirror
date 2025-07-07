import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import notesRouter from './routes/notes'

config()

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

// 把在 notesRouter 里面写的所有路由，统一加上前缀 /api/notes，然后交给 Express 管理
app.use('/api/notes', notesRouter)

const PORT = process.env['PORT ']|| 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
