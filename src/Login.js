import React, { useState } from 'react';
import './Login.css'; // Archivo CSS para estilos específicos del Login
import heartBeatAudio from './song.mp3'; // Ruta al archivo de audio

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [audioPlaying, setAudioPlaying] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '30112008') { // Aquí verificar la contraseña correcta
      onLogin(password);
      playAudio();
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const playAudio = () => {
    const audio = new Audio(heartBeatAudio);
    audio.volume = 0.23; // Volumen al 33%
    audio.play();
    setAudioPlaying(true);
  };

  return (
    <div className="login-container">
      <h1>Tu cumpleaños Amor <span className="heart">❤️</span></h1>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="La fecha va aqui..."
          value={password}
          onChange={handleChange}
          style={{ width: '200px', padding: '10px', fontSize: '16px' }} // Ajusta el tamaño y otros estilos aquí
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
