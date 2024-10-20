import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import SignUp from './pages/singUpPage/SingUpPage.jsx';
import LoginPage from './pages/loginPage/LoginPage.jsx';
import DrawerComponent from './common/drawer/DrawerComponent.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Navigate to={'/login'} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/drawer" element={<DrawerComponent />} />
      </Routes>
    </div>
  )
}

export default App
