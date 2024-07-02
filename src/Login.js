import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div className="login-container">
      
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="La fecha va aquí..."
          value={password}
          onChange={handleChange}
          style={{ width: '200px', padding: '10px', fontSize: '16px' }} // Ajusta el tamaño y otros estilos aquí
        />
        <button type="submit">Ingresar</button>
      </form>
      {/* Aquí se inserta el iframe de Spotify */}
      
    </div>
  );
};

export default Login;
