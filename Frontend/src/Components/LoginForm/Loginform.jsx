import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Loginform.css';
import logo from '../../Assets/metamask.svg'
import { MdAccountCircle } from "react-icons/md";

const Loginform = () => {
    const [redirect, setRedirect] = useState(false);

    const handleLogin = () => {
    // Implement login logic here
    // Assuming login is successful, set redirect to true
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Welcome to LegalLock</h1>
            <div className='logo-header'>
                <img src ={logo} className='login-icon' alt='logo' />
            </div>

            <button type='submit' onClick={handleLogin}>Login with MetaMask</button>

            <div className='register-link'>
                <p>Don't have a MetaMask account? 
                    <a href ="#"> Create!</a>
                    <MdAccountCircle className='icon'/>
                </p>
            </div>
        </form>
    </div>
  );
};

export default Loginform;

