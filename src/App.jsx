import { useEffect, useState } from 'react'
import './App.css'

function App() {


  const [n, setNumbers] = useState(getNumbers())
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    setNumbers(getNumbers())
  }, [])


  const refreshNumbers = () => {
    setShowResult(false)

    const n = getNumbers()
    console.log(n);

    setNumbers(n)
  }

  const isShowResult = () => {
    setShowResult(!showResult)
  }
  return (
    <>
      <div className="header">
        <button onClick={isShowResult}>结果</button >
      </div>
      <div className="body">
        <h1>{n.a}+{n.b}=
          {
            showResult ? n.c : '?'
          }
        </h1 >
        <button onClick={refreshNumbers}>下一题</button>
      </div>
      <div className="footer"></div>

    </>
  )
}

export default App


function getNumbers() {

  // const a = getRandInt(9) + 1
  const a = 1

  for (; ;) {
    const b = getRandInt(9) + 1
    const c = a + b

    if (c <= 10) {

      const z = getRandInt(2) % 2
      if (z === 1) {
        return { a: b, b: a, c }
      }

      return { a, b, c }
    }
  }
}

function getRandInt(max) {
  return Math.floor(Math.random() * max)
}