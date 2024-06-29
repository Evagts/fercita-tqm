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
    },
    {
      id: 2,
      titulo: '26/06/2024',
      texto: 'Waos, no se que escribirte pero quiero que recuerdes que te quiero mucho y me gusta mucho el sabor de tu gloss JAJAJA, no se pero fue un bonito dia aunque no estuvimos juntos mucho rato pero igual, estoy feliz de estar contigo y ya dejate querer no?, Te Quiero Mucho Doña fresona (estabas rojisima amor ❤️). Besitos y Piquetitos 💕',
    },
    {
      id: 3,
      titulo: '27/06/2024',
      texto: 'Te debia esta notita pero ayer fue un dia muy ocupado y no tuve tiempo de estar al pendiente de ti amor, ayer no nos vimos y no se, perdon, me gusta mucho estar en tus brazos, me gusta el olor de tu pelo y tu aroma natural, me gustan tus ojitos preciosos y que mas te digo si ya sabes que me gustas tu y me encantas amor, Te Adoro Mucho mi Preciosa ❤️',
    },
    {
      id:4,
      titulo: '28/06/2024 - Parte 1',
      texto: 'No se, te siento muy rara el dia de hoy, sigo nervioso pq no se de que quieras hablar pero de lo que sea que hablemos o si hay algun problema lo podemos solucionar, no quiero estar mal contigo y me cuesta sostener el papel de fernanda, yo prefiero estar bien contigo mi niña preciosa y linda, gracias por estar conmigo y acompañarme estas noches.',
    },
    {
      id:5,
      titulo: '28/06/2024 - Parte 2',
      texto: 'De vdd quiero hundirme en tus brazos y decirte que te quiero y estar pegado a ti como un niño, me gusta mucho tu calidez y tus abrazos apaciguan mis molestias, llevo un dia sin verte y no se, a mi corazoncito le haces falta niña preciosa, te quiero de corazon y sinceramente, quiero algo bien contigo  y respetarte y quererte mucho.',
    },
    {
      id:6,
      titulo: '28/06/2024 - Parte 3',
      texto: ' ir bien contigo y perdon si e hecho algo mal, aun sigo nervioso y un poco ansioso por no saber de que quieres hablar pero, me alegra que me digas que quieres hablar pq te importo entonces, aunque tambien pienso que en lugar de decirme oye hablamos el lunes mejor el lunes me digas y ya pq nomas me dejas con la duda pero ese no es el punto,',
    },
    {
      id:7,
      titulo:'28/06/2024 - Parte 4',
      texto: ' Te Quiero Mucho mi fernandita preciosa, eres muy dulce y tierna, de vdd te quiero amor, gracias por alegrar mis noches y dias amor, te quiero sinceramente de corazon ❤️',
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
