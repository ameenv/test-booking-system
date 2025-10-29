
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify/unstyled'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> }/>
      </Routes>

      <ToastContainer position='top-right'/>
    </>
  )
}

export default App
