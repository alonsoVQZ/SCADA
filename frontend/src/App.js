import { BrowserRouter, Routes, Route } from 'react-router'

import { AuthProvider } from './contexts/AuthContext'

import './App.css'

import Home from './components/pages/Home'
import Auth from './components/pages/Auth'


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/auth/*' element={<Auth/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
