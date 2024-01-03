import 'dotenv/config'

const endpoint = 'https://api.apilayer.com/exchangerates_data/latest'
const header = new Headers()

header.append('apikey', `${process.env.CONVERT_CURR_KEY}`)

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: header,
}

async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`, requestOptions)
  const rates = await res.json()
  return rates
}

export default fetchRates
