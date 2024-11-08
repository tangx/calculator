import { useState } from 'react'
import './App.css'
import { Button, InputNumber } from 'antd'

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

  return (
    <>
      <div className="header">
        <span>最大数</span>
        <InputNumber placeholder={max} defaultChecked={max} min={1} max={10}
          onBlur={(e) => setMax(e.target.value)}
        />

        <Button
          // variant='outlined'
          color={isMinus ? 'primary' : 'danger'}
          variant='outlined'
          // type='default'

          onClick={() => setIsMinus(!isMinus)}
        >换{isMinus ? "减" : "加"}法</Button>
        <br />

      </div>
      <div className="body">

        {
          isMinus
            ? <h1> {n.a}+{n.b}= {showResult && n.c || '?'}</h1>
            : <h1> {n.c}-{n.b}={showResult && n.a || '?'}</h1>
        }

        <Button onClick={refreshNumbers}>下一题</Button>
        <Button onClick={isShowResult}>显示结果</Button >
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
