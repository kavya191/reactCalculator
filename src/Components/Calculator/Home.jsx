import React, { useState } from 'react'
import '../Calculator/Home.css'
function Home() {
  //state to store inputer number
  const [inputNum, setInputNum] = useState('');

  const handleClick = (value) => {
    setInputNum(inputNum + value)
  }
  const handleResult = () => {
    try {
      const result = eval(inputNum)
      setInputNum(result)
    } catch (error) {
      setInputNum(error, "invalid")
    }

  }
  const handleClear = () => {
    setInputNum("")
  }

  const clearData = () => {
    setInputNum(inputNum.slice(0, -1))
  }
  return (
    <div className='clac_Main'>
      <div className='calc_inner'>
        <div >
          <input className='calc_display' type="text" placeholder={inputNum} />
        </div>
        <div className='calc_btn'>
          <div>
            <button onClick={() => (handleClick("7"))} className='btn_style' >7</button>
            <button onClick={() => (handleClick("8"))} className='btn_style'>8</button>
            <button onClick={() => (handleClick("9"))} className='btn_style'>9</button>
            <button onClick={() => (handleClick("/"))} className='btn_style'>/</button>
          </div>
          <div>
            <button onClick={() => (handleClick("4"))} className='btn_style'>4</button>
            <button onClick={() => (handleClick("5"))} className='btn_style'>5</button>
            <button onClick={() => (handleClick("6"))} className='btn_style'>6</button>
            <button onClick={() => (handleClick("*"))} className='btn_style'>*</button>

          </div>
          <div>
            <button onClick={() => (handleClick("1"))} className='btn_style'>1</button>
            <button onClick={() => (handleClick("2"))} className='btn_style'>2</button>

            <button onClick={() => (handleClick("3"))} className='btn_style'>3</button>
            <button onClick={() => (handleClick("-"))} className='btn_style'>-</button>
          </div>
          <div>
            <button onClick={() => (handleClick("0"))} className='btn_style'>0</button>
            <button onClick={() => (handleClick("."))} className='btn_style'>.</button>

            <button onClick={() => (handleClick("+"))} className='btn_style'>+</button>
            <button onClick={handleResult} className='btn_style' style={{ backgroundColor: "orange", color: "white" }}>=</button>
          </div>
          <div>
            <button onClick={handleClear} className='btn_style'>AC</button>
            <button onClick={() => clearData()} className='btn_style'>DE</button>
          </div>

        </div>
      </div>
      <div className='clippy_div'>

      </div>
    </div>
  )
}

export default Home
