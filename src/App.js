import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar'; 
import Login from './pages/Login';
import  SignUp  from './pages/SignUp';
import HomePage from './pages/HomePage';
import { AuthProvider, useAuth } from './context/AuthContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Protected Route
const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  return auth.user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage/>
              </ProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer/>
      </Router>
    </AuthProvider>
  )
};

export default App;
