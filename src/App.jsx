import { useEffect, useState } from 'react'
import './App.css'

function App() {



  const [max, setMax] = useState(10)

  const [n, setNumbers] = useState(getNumbers(max))
  const [showResult, setShowResult] = useState(false)

  const refreshNumbers = () => {
    // setShowResult(false)
    setNumbers(getNumbers(max))
  }

  const isShowResult = () => {
    setShowResult(!showResult)
  }

  return (
    <>
      <div className="header">
        <span>最大数</span><input type="number" value={max}
          onChange={(e) => setMax(e.target.value)} />
        <br />

      </div>
      <div className="body">


        {showMinusOrAdd(n, showResult)}


        {/* <h1>{n.a}+{n.b}={n.c}</h1 > */}
        {/* <h1>{n.c}-{n.b}={n.a}</h1 > */}

        <button onClick={refreshNumbers}>下一题</button>
        <button onClick={isShowResult}>显示结果</button >
      </div>
      <div className="footer"></div>

    </>
  )
}

export default App


function getNumbers(max) {

  for (; ;) {
    const a = getRandInt(max) + 1
    const b = getRandInt(max) + 1
    const c = a + b

    if (c <= max) {
      return { a, b, c }
    }
  }
}

function getRandInt(max) {
  return Math.floor(Math.random() * max)
}

function showMinusOrAdd(n, show) {
  return getRandInt(2) === 1
    ? <h1> {n.a}+{n.b}= {show && n.c || '?'}</h1>
    : <h1> {n.c}-{n.b}={show && n.a || '?'}</h1>
}