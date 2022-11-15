import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Comments} from './components/Comments';
import { Form } from './components/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form />
      {/* <Comments /> */}
    </div>
  )
}

export default App
