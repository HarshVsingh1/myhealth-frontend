
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homapage from './homepage'

import Navbar from './nav'
import Admindashboard from './admindashboard'
import Signup from './signup'
import Signin from './signin'
import Userdashboard from './userdashboard'

function App() {


  return (
    <>
    <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path='/' element={<Homapage></Homapage>} />
          <Route path='/admindashboard' element={<Admindashboard></Admindashboard>} />
          <Route path='/userdashboard' element={<Userdashboard></Userdashboard>} />
          <Route path='/signup' element={<Signup></Signup>} />
          <Route path='/signin' element={<Signin></Signin>} />   
        </Routes>
      </Router>
    </>
  )
}

export default App