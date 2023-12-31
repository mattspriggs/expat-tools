import { join } from 'node:path'
import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
import request from 'superagent'
import 'dotenv/config'
import welcome from './routes/welcome.ts'
import routes from './routes/routes.ts'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)

server.get('/api/v1/rates', async (req, res) => {
  try {
    const response = await request
      .get('https://api.apilayer.com/exchangerates_data/latest?base=USD')
      .set('apikey', `${process.env.CONVERT_CURR_KEY}`)
    res.json(response.body)
  } catch (error) {
    res.sendStatus(500).json({ message: 'Unable to get rates' })
  }
})

export default server
