import db from '../connection'

export async function getExchangeCodes() {
  return await db('excodes').select('*')
}
