import { useEffect, useState } from 'react'
import './App.css'

function App() {


  const [n, setNumbers] = useState(getNumbers())

  useEffect(() => {
    setNumbers(getNumbers())
  }, [])


  const refreshNumbers = () => {
    setNumbers(getNumbers())
  }

  return (
    <>
      <h1>{n.a}+{n.b}={n.c}</h1>
      <button onClick={refreshNumbers}>Refresh</button>
    </>
  )
}

export default App


function getNumbers() {

  for (; ;) {
    const a = getRandInt(10)
    const b = getRandInt(10)
    const c = a + b
    if (c <= 10) {
      return { a, b, c }
    }
  }
}

function getRandInt(max) {
  return Math.floor(Math.random() * max)
}