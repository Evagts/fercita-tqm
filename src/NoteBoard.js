import React from 'react';
import Nota from './Nota';
import './NoteBoard.css';

const NoteBoard = ({ notas }) => {
  return (
    <div className="note-board">
      {notas.map((nota) => (
        <Nota key={nota.id} titulo={nota.titulo} texto={nota.texto} imagen={nota.imagen} />
      ))}
    </div>
  );
};

export default NoteBoard;
