import React from 'react';
import './App.css';
import Header from "./Header";
import Notes from './Notes';
import Footer from './Footer';
import notes from './notes';
import NotesForm from './NotesForm';



function App() {

  function mapThroughNotes(note){
    return (
      <Notes key={note.key} title={note.title} content={note.content} />
    )
  }
  return (
    <div className="App">
      <Header />
      <NotesForm />
      {notes.map(mapThroughNotes)}
      <Footer />
    </div>
  );
}

export default App;
