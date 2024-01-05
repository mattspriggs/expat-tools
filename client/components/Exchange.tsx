import { useEffect, useState } from 'react'
import { convert } from '../src/convert.js'
import { Exchange as ExchangeType } from '../../models/Exchange.ts'

export default function Exchange() {
  return (
    <>
      <h2>Current Currency Exchange Rates</h2>
      <form>
        <input type="number" name="from_amount" />
        <select name="from_currency" id="">
          <option>Select a Currency</option>
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
