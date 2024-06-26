import React from 'react';
import Nota from './Nota';
import './NoteBoard.css';

const NoteBoard = ({ notas }) => {
  return (
    <div>
    <div className="note-board">
      {notas.map((nota) => (
        <Nota key={nota.id} titulo={nota.titulo} texto={nota.texto} />
      ))}
    </div></div>
  );
};

export default NoteBoard;
