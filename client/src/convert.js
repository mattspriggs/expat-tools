import fetchRates from './fetch-rates.js'

const ratesByBase = {}

export async function convert(amount, from, to) {
  if (!ratesByBase[from]) {
    console.log(`We don't have ${from} to convert to ${to}. So lets get it!`)
    const rates = await fetchRates(from)
    console.log(rates)
  }
}
