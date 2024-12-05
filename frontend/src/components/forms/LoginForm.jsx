import {useState} from 'react'
import {Link} from 'react-router'

import './styles/forms.css'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitRegister = (e) => {
    e.preventDefault()
    const formData = {
      email,
      password
    }
    return formData
  }  
  return (
    <form className='forms-Fo' onSubmit={submitRegister}>
      <label className='forms-FoLa'>
        <span>Email</span>
        <input type="email" value={email} onChange={e =>setEmail(e.target.value)}/>
      </label>
      <label className='forms-FoLa'>
        <span>Password</span>
        <input type="password" value={password} onChange={e =>setPassword(e.target.value)}/>
      </label>
      <Link to={'/'}>
        <button className='forms-FoBu' type='submit'>Register</button>
      </Link>
    </form>
  )
}

export default LoginForm