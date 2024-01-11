import db from '../connection'
import { Currency } from '../../../models/Currency.ts'

export async function getExchangeCodes(): Promise<Currency[]> {
  return await db('excodes').select('*')
}
