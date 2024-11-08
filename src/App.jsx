import { useEffect, useState } from 'react'
import './App.css'

function App() {



  const [max, setMax] = useState(9)
  // const max = 10

  const [n, setNumbers] = useState(getNumbers(max))
  const [showResult, setShowResult] = useState(false)
  const [isMinus, setIsMinus] = useState(false)

  const refreshNumbers = () => {
    // setShowResult(false)
    setNumbers(getNumbers(max))
    setIsMinus(getRandInt(2) === 1)
  }

  const isShowResult = () => {
    setShowResult(!showResult)
  }


  function showMinusOrAdd(n) {
    return isMinus
      ? <h1> {n.a}+{n.b}= {showResult && n.c || '?'}</h1>
      : <h1> {n.c}-{n.b}={showResult && n.a || '?'}</h1>
  }

  return (
    <>
      <div className="header">
        <span>最大数</span><input type="number" placeholder={max}
          onBlur={(e) => setMax(e.target.value)}
        />
        <br />

      </div>
      <div className="body">


        {showMinusOrAdd(n)}


        {/* <h1>{n.a}+{n.b}={n.c}</h1 > */}
        {/* <h1>{n.c}-{n.b}={n.a}</h1 > */}

        <button onClick={refreshNumbers}>下一题</button>
        <button onClick={isShowResult}>显示结果</button >
        <button onClick={() => setIsMinus(!isMinus)}>换{isMinus ? "减" : "加"}法</button>
        {/* <button onClick={setIsMinus(!isMinus)}>+</button> */}
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
