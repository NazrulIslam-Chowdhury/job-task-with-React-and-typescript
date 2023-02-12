import './App.css'
import { Routes, Route } from 'react-router-dom';
import UserInfo from './pages/UserInfo/UserInfo';
import Data from './pages/Data/Data';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<UserInfo />} />
        <Route path='/data' element={<Data />} />
      </Routes>
    </div>
  )
}

export default App
