import { useState, useEffect } from 'react'
import { Exchange } from './Exchange.tsx'
import { getWelcome } from '../apiClient.ts'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      <h1>{welcomeStatement}</h1>
      <div>
        <Exchange />
      </div>
    </>
  )
}

export default App
