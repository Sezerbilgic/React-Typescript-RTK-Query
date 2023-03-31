import React from 'react';
import AddNote from './components/AddNote';
import "./App.css";
import NoteList from './components/NoteList';
import { useGetNotesByIdMutation } from './services/crud';
import EditNote from './components/EditNote';

function App() {
  const [getNotesById, result] = useGetNotesByIdMutation();

  return (
    <div className="App">
      {
        result.data
          ? <EditNote editData={result.data} />
          : <AddNote />
      }
      <NoteList editFunction={getNotesById} />
    </div>
  );
}

export default App;
