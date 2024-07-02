import React, { useState, useEffect } from 'react';
import Login from './Login';
import NoteBoard from './NoteBoard';
import './App.css';

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
      titulo: '',
      texto: '',
    },

  ];
  const sortedNotas = notas.sort((a, b) => b.id - a.id);

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