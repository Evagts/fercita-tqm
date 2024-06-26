import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState('');
  
  return (
    <div className="notes-container">
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes here..."
      />
    </div>
  );
};

export default Notes;
