import React from 'react';

const Nota = ({ titulo, texto }) => {
  return (
    <div className="nota">
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  );
};

export default Nota;
