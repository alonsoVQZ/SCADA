import {Routes, Route} from 'react-router'


import './App.css'

import Home from './components/pages/Home'
import LoginForm from './components/forms/LoginForm'
import RegisterForm from './components/forms/RegisterForm'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='auth'>
          <Route path='login' element={<LoginForm/>}/>
          <Route path='register' element={<RegisterForm/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
