import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement signup logic here, e.g. API call to register user
    // using email and password
    console.log('Signing up with email:', email, 'and password:', password);
  }

  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
