import { useState } from 'react'
import './App.css'
import RandomDog from './RandomDog';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <div>
        <RandomDog key={`${refresh}1`}/>
        <RandomDog key={`${refresh}2`}/>
        <RandomDog key={`${refresh}3`}/>
      </div>
      <button onClick={() => setRefresh(!refresh)}>
        refresh
      </button>
    </>
  )
}

export default App
