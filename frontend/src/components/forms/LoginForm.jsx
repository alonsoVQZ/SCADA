import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'

import { AuthContext, currentUser } from '../../contexts/AuthContext'

import './styles/forms.css'
import './styles/login-form.css'

function LoginForm() {
  const navigate = useNavigate()
  const { userContextLogin } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitLogin = (e) => {
    console.log('currentUser')
    e.preventDefault()
    const formData = {
      email,
      password
    }
    userContextLogin(true)
    navigate('/')
    return formData
  }  
  return (
    <form className='forms-Fo login-form-Fo' onSubmit={submitLogin}>
      <label className='forms-FoLa'>
        <span>Email</span>
        <input type="email" value={email} onChange={e =>setEmail(e.target.value)}/>
      </label>
      <label className='forms-FoLa'>
        <span>Password</span>
        <input type="password" value={password} onChange={e =>setPassword(e.target.value)}/>
      </label>
      <button className='forms-FoBu' type='submit'>Login</button>
    </form>
  )
}

export default LoginForm