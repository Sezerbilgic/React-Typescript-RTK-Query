import React from 'react';
import AddNote from './components/AddNote';
import "./App.css";
import NoteList from './components/NoteList';
import { useGetNotesByIdMutation, useGetNotesQuery } from './services/crud';
import EditNote from './components/EditNote';

function App() {
  const [getNotesById, result] = useGetNotesByIdMutation({
    fixedCacheKey: "shared-get-note"
  }),
    { data, isLoading } = useGetNotesQuery();

  return (
    <div className="App">
      {
        result.data
          ? <EditNote editData={result.data} />
          : <AddNote />
      }
      <NoteList />
    </div>
  );
}

export default App;
