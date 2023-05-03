import React, { useState } from 'react';
import { Route, Router, useNavigate } from 'react-router-dom';
import './Login.css';
import OwnerViewStatus from './owner/OwnerViewStatus';
import UserDashboard from './user/UserDashboard';

function LoginCom() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
 
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleRoleChange = (event) =>{
    setRole(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password, role);
    let users = {
      "username":username,
      "password":password,
      "role":role
    }
    axios.post("https://localhost:1234/adduser", {users}).then((res) => {
      console.log(res.data);
    })
    if(role==='Admin'){
      navigate('/admindashboard');
    }
    else if(role==='Owner'){
      navigate('/ownerdashboard');
    }else if(role === 'User'){
      navigate('/userdashboard');
    }else{
      alert("Enter valid Credentials");
    }
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
            <select onChange={handleRoleChange} name='role' value={role} style={{borderRadius:'10px',padding:'2%'}}><br/>
                <option>Choose your role</option>
                <option>Owner</option>
                <option>User</option>
                <option>Admin</option>
            </select><br/>
            <Router>
            <Route path="/userdashboard" element={<UserDashboard/>}/>
            <Route path="/admindashboard" element={<UserDashboard/>}/>
            <Route path="/ownerdashboard" element={<UserDashboard/>}/>

              
            </Router>
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
     
    </div>
  );
}

export default LoginCom;