import request from 'superagent'
import { Welcome } from '../models/welcome.ts'
import { Exchange } from '../models/Exchange.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***
export async function getRates(): Promise<Exchange[]> {
  const response = await request.get(`${serverURL}/rates`)
  return response.body
}
