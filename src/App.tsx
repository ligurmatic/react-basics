import { useState } from 'react'
import './App.css'

function App() {


  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <button className="add">🇫🇷</button>
          <button className="remove">🇯🇵</button>
        </nav>
        <form id="addblock">
          <fieldset>
            <input type="text" id="newBlockText"></input>
            <select id="newBlockColour">
              {
                return (
                  colours.map(colours => {
                    <option className={colour.style} key={colour.id}>{colour.name}</option> 
                  }
                )
              }

            </select>
          </fieldset>
        </form>
      </header>
    </>
  )
}

export default App
