import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import SignUp from './pages/singUpPage/SingUpPage.jsx';
import LoginPage from './pages/loginPage/LoginPage.jsx';
import DrawerComponent from './common/drawer/DrawerComponent.jsx';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false);

  return (
    <div>
      {login ?
        <DrawerComponent /> :
        <Routes>
          <Route path='*' element={<Navigate to={'/login'} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      }
    </div>
  )
}

export default App
// <Route path="/drawer" element={

// route eka hadhanna one api page eka load karanna one thana