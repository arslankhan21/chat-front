import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatGPT from './components/ChatGPT'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
          <ChatGPT/>
      </div>
    </>
  )
}

export default App
