import React, { useState } from 'react';
import axios from 'axios';

import './Login.css';

function LoginCom() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = {
      "username":username,
      "password":password
    }
    axios.post("https://localhost:1260/adduser", {users}).then((res) => {
      console.log(res.data);
    })
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
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginCom;