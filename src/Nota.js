import React from 'react';
import './Nota.css';

const Nota = ({ titulo, texto, imagen }) => {
  return (
    <div className="nota">
      <h3>{titulo}</h3>
      <p>{texto}</p>
      {imagen && <img src={imagen} alt="Nota" />}
    </div>
  );
};

export default Nota;
