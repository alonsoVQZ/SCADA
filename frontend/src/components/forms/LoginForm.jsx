import {useState} from 'react'

function LoginForm() {
  const [firtName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitLogin = (e) => {
    e.preventDefault()
    const formData = {
      firtName,
      lastName,
      email,
      password,
      role: 'admin'
    }
    console.log(formData)
    return formData
  }  
  return (
    <form onSubmit={submitLogin}>
      <label>
        <span>First Name</span>
        <input className='forms-FLItext' type="text" value={firtName} onChange={e => setFirstName(e.target.value)}/>
      </label>
      <label>
        <span>Last Name</span>
        <input className='forms-FLItext' type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
      </label>
      <label>
        <span>Email</span>
        <input className='forms-FLItext' type="email" value={email} onChange={e =>setEmail(e.target.value)}/>
      </label>
      <label>
        <span>Password</span>
        <input className='forms-FLItext' type="password" value={password} onChange={e =>setPassword(e.target.value)}/>
      </label>
      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm