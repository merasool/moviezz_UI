import React, { useState } from 'react';
import styles from './Signup.module.css';
import signupBackground from '../../assets/login.jpg';
import { firebaseAuth } from '../../utils/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      alert("Signup successful!");
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${signupBackground})` }}
    >
      <div className={styles.formContainer}>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignup}>Register</button>
      </div>
    </div>
  );
}
