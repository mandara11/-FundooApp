import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from '../../pages/signin/SignIn'
import SignUp from '../../pages/signup/SignUp'
import Dashboard from '../dashboard/dashboard'

function Routerone() {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Routerone
