import { useState } from 'react'
import './App.css'

function app() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Olá react</h1>
      <p>Esse é meu primeiro app com react</p>
      </div>
    </>
  )
}

export default app
