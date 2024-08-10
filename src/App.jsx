import { useEffect, useState } from 'react'
import './App.css'
import classNames from 'classnames'

function App() {


  const [n, setNumbers] = useState(getNumbers())
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    setNumbers(getNumbers())
  }, [])


  const refreshNumbers = () => {
    setNumbers(getNumbers())
  }

  const isShowResult = () => {
    setShowResult(!showResult)
  }
  return (
    <>
      <div className="header">
        <button onClick={isShowResult}>ShowReult</button >
      </div>
      <div className="body">
        <h1>{n.a}+{n.b}=
          {
            showResult ? n.c : '?'
          }
        </h1 >
        <button onClick={refreshNumbers}>Refresh</button>
      </div>
      <div className="footer"></div>

    </>
  )
}

export default App


function getNumbers() {

  for (; ;) {
    const a = getRandInt(9) + 1
    const b = getRandInt(9) + 1
    const c = a + b
    if (c <= 10) {
      return { a, b, c }
    }
  }
}

function getRandInt(max) {
  return Math.floor(Math.random() * max)
}