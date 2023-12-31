import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const exrouter = express.Router()

// exrouter.get('/api/v1/rates', async (req, res) => {
//   try {
//     const response = await request
//       .get('https://api.apilayer.com/exchangerates_data/latest')
//       .set('Authorization', `apikey ${process.env.CONVERT_CURR_KEY}`)
//     res.json(response.body)
//   } catch (error) {
//     res.sendStatus(500).json({ message: 'Unable to get rates' })
//   }
// })

export default exrouter
