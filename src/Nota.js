import React from 'react';

const Nota = ({ titulo, texto, imagen }) => {
  return (
    <div className="nota">
      <h3>{titulo}</h3>
      <p>{texto}</p>
      {imagen && <img src={imagen} alt={`Imagen de ${titulo}`} className="nota-imagen" />}
    </div>
  );
};

export default Nota;
