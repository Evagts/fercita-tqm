import React from 'react';
import './Nota.css'; // Archivo CSS para los estilos específicos de las notas

const Nota = ({ titulo, texto, imagen }) => {
  return (
    <div className="nota blur-background">
      <h3>{titulo}</h3>
      <p>{texto}</p>
      {imagen && <img src={imagen} alt="Nota Imagen" className="nota-imagen" />}
    </div>
  );
};

export default Nota;
