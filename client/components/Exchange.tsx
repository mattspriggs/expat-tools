import { useEffect, useState } from 'react'
import { convert } from '../src/convert.js'
import { Exchange as ExchangeType } from '../../models/Exchange.ts'
import { generateOptions } from '../utils/utils.js'
import { currencies as currencyValues } from '../../models/currencies.js'
import { Currency } from '../../models/Currency.ts'
import { getRates } from '../apiClient.ts'

export default function Exchange() {
  const fromSelect = document.querySelector('[name="from_currency]"]')
  const optionsHTML = generateOptions(currencyValues)
  const [exch, setExch] = useState<ExchangeType[] | null>(null)
  const currencyCode = Object.keys(currencyValues)

  async function fetchRates() {
    const exchData = await getRates()
    try {
      setExch(exchData)
      console.log(exchData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    try {
      fetchRates()
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <>
      <h2>Current Currency Exchange Rates</h2>
      <form>
        <input type="number" name="from_amount" />
        <select name="from_currency" id="">
          <option>Select a Currency</option>
          {currencyValues.map(
            (currency) =>
              `<option value= "${currency}">${currency} - ${currency}</option>`
          )}
        </select>
        <p>in</p>
        <select name="to_currency" id="">
          <option>Select a Currency</option>
        </select>
        <p>is</p>
        <p className="to_amount">$0</p>
      </form>
    </>
  )
}
