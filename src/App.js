import React, { useState, useEffect } from 'react';
import Login from './Login';
import NoteBoard from './NoteBoard';
import './App.css';
import song from './song.mp3'; // Ruta al archivo MP3 de la canción
import banner from './banner.jpg'; // Ruta al archivo JPG del banner

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const correctPassword = '30112008';


  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const notas = [
    {
      id: 1,
      titulo: '25/06/2024',
      texto: 'Te Quiero, Me gusta estar contigo y pasar el tiempo juntos, me gusta poder abrazarte y ver tu linda mirada y tus bonitos cachetitos y molestarte y decirte que te quiero mucho, me gustas mucho y te quiero asi toda enojona y celosa,Todo va a estar bien amor, animo, ten una linda noche y recuerda que te quiero mucho preciosa ❤️',
      imagen: 'banner.jpg'
    },
    {
      id: 2,
      titulo: '26/06/2024',
      texto: 'Waos, no se que escribirte pero quiero que recuerdes que te quiero mucho y me gusta mucho el sabor de tu gloss JAJAJA, no se pero fue un bonito dia aunque no estuvimos juntos mucho rato pero igual, estoy feliz de estar contigo y ya dejate querer no?, Te Quiero Mucho Doña fresona (estabas rojisima amor ❤️). Besitos y Piquetitos 💕'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      handleLogin();
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <NoteBoard notas={notas} />
          
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
  
};

export default App;
