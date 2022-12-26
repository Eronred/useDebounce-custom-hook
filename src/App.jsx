import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [value, setValue] = useState("")
  const [timer, setTimer] = useState(500)

  const debouncedValue = useDebounce(value, timer)

  return (
    <div className="App">
      <div style={{
        marginBottom: 12,
      }}>
        <span>Timer</span>
        <input style={{
          maxWidth: 50,
          marginBottom: 12,
          marginLeft: 20
        }} type='number' value={timer} onChange={event => setTimer(event.target.value)} />
      </div>
      <div>
        <input value={value} placeholder="Type to debounce" onChange={event => setValue(event.target.value)} />
        <p>
          Debounced Value: <br/> <code>{debouncedValue}</code>
        </p>
      </div>
    </div>
  )
}

export default App
