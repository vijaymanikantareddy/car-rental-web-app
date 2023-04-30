import React, { useState } from 'react';

import './Login.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import OwnerViewStatus from './owner/OwnerViewStatus';

function LoginCom() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-input">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
      <Router>
      <Routes>
        <Route exact path="/login">
          {isLoggedIn ? <Link to="/owner" /> : <LoginCom setIsLoggedIn={setIsLoggedIn} />}
        </Route>
        <Route path="/">
          {isLoggedIn ? <OwnerViewStatus /> : <Link to="/login" />}
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default LoginCom;