import React from 'react';

const Login = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <h1>Tu Cumpleaños Amor <span className="heart">❤️</span></h1>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="La fecha va aqui..."
          style={{ width: '200px', padding: '10px', fontSize: '16px' }} // Ajusta el tamaño y otros estilos aquí
        />
        <button type="submit">Ingresar</button>
      </form>
      {/* Aquí se inserta el iframe de Spotify */}
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/1l6ECiruys6VynapMCMaL5?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Login;
