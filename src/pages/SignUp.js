import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './SignUp.css';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [role, setRole] = useState('student');

  const  {login} = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle backend api here 
    const userData = {email, role};  // Automatically log in the user after signup
    login(userData);
    navigate('/');
  }
   
  const handleSendOtp = () => {
    // mock sending OTP logic
    console.log('OTP send to', email);
  };


  return (
    <div className='signup-page'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => 
          setName(e.target.value)}
          required
        />
        <div className='email-otp-container'>
        <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <button type='button' onClick={handleSendOtp} className='send-otp-btn'>Send OTP</button>
        </div>
        <input
          type='text'
          placeholder='Enter OTP'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <input 
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        
        <select val={role} onChange={(e) => setRole(e.target.value)}>
          <option value="value">Teacher</option>
          <option value="value">Student</option>
        </select>
        
        <button type='submit'>Signup</button>

      </form>
       
       <div className='login-link'>
          <p> Already have an account? <Link to="/login">Login here</Link></p>
       </div>

    </div>
  )
}
