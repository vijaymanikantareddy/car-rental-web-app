import React, { useState } from 'react';
import './Signup.css';

function SignupCom() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handleRoleChange = (event) =>{
    setRole(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your signup logic goes here
    console.log(username, password, role, email);
    let users = {
      "username":username,
      "password":password,
      "role":role,
      "email":email
    }
    axios.post("https://localhost:1234/signup", {users}).then((res) => {
      console.log(res.data);
    })
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Signup</h1>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
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
        <select onChange={handleRoleChange} name='role' value={role} style={{borderRadius:'10px',padding:'2%'}}><br/>
                <option>Choose your role</option>
                <option>Owner</option>
                <option>User</option>
            </select><br/>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupCom;