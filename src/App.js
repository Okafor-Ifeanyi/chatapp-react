import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import DashboardPage from './Pages/DashboardPage';
import IndexPage from './Pages/IndexPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
