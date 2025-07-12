import React, { useState } from 'react';

export default function LoginModal({ onClose, onLogin }) {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    localStorage.setItem('muuvizUser', email);
    onLogin(email);
    onClose();
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <h3>Login to Muuviz</h3>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleLogin} style={buttonStyle}>Login</button>
      </div>
    </div>
  );
}

const modalStyle = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
};
const contentStyle = { background: '#fff', padding: '2rem', borderRadius: '10px' };
const inputStyle = { padding: '0.5rem', marginBottom: '1rem', width: '100%' };
const buttonStyle = { padding: '0.5rem 1rem' };
