import { Link } from 'react-router'
import { useEffect , useContext} from 'react'
import { AuthContext } from '../../contexts/AuthContext'

import './syles/header.css'

function Header() {
  const { currentUser } = useContext(AuthContext)
  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])
  return (
    <div className='header'>
      <div className='header-Di header-Di1'></div>
      <div className='header-Di header-Di2'></div>
      { currentUser ? <HeaderLoggedIn/> : <HeaderAnonymous/> }
    </div>
  )
}

function HeaderLoggedIn() {
  return (
    <div className='header-Di header-Di3'>
      <span>Welcome</span>
      <button>Logout</button>
    </div>
  )
}

function HeaderAnonymous () {
  return (
    <div className='header-Di header-Di3'>
      <Link to='/auth/login'>
          <button>Login</button>
      </Link>
      <Link to='/auth/register'>
          <button>Register</button>
      </Link>
    </div>
  )
}

export default Header