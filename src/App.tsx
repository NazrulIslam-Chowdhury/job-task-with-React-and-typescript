import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from '@mui/material'
import { Routes, Route } from 'react-router-dom';
import UserInfo from './pages/UserInfo/UserInfo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<UserInfo />} />
      </Routes>
    </div>
  )
}

export default App
