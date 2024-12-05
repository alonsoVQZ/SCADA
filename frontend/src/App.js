import {Routes, Route} from 'react-router'


import './App.css'

import Home from './components/pages/Home'
import Auth from './components/pages/Auth'
import LoginForm from './components/forms/LoginForm'
import RegisterForm from './components/forms/RegisterForm'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/auth/*' element={<Auth/>}/>
      </Routes>
    </div>
  );
}

export default App;
