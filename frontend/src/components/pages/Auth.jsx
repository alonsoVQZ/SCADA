import { Routes, Route } from 'react-router'

import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'

import './styles/auth.css'

function Auth() {
  return (
    <div className="auth pages">
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
      </Routes>
    </div>
  )
}

export default Auth