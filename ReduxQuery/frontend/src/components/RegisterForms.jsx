import React, { useState } from 'react';
import { useUserRegisterMutation } from '../Api/auth.api.js';

const RegisterForms = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRegister] = useUserRegisterMutation();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = {
      username,
      email,
      password
    }
    // Handle form submission here, e.g., send data to server
    userRegister(userInput);
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          placeholder='Enter your username'
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder='Enter your password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default RegisterForms;
