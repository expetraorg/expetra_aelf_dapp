import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import GlobalStyle from './globalStyles';
import Home from './pages';
import { UserAuthContextProvider } from './contexts/AuthContext'
import AfterLogin from './pages/AfterLogin';


function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/home' element={<AfterLogin />} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
