import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import loginBackground from '../../assets/login.jpg';
import { firebaseAuth } from '../../utils/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      alert("Login successful!");
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${loginBackground})` }}
    >
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <div className={styles.line}><span></span></div>
        <h5>Don't have account?</h5>
        <button onClick={() => navigate('/signup')}>Signup</button>
      </div>
    </div>
  );
}
