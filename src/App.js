import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Notes from './Notes';
import Footer from './Footer';
import NotesForm from './NotesForm';



function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((r) => r.json())
      .then((notes) => setNotes(notes));
  }, []);
  
  function addNewNote(newNote){
    // console.log(note)
    setNotes(prevState => {
      return [...prevState, newNote]
    })
    
  }


  function deleteNote(id){
    // console.log("I was triggered")
    setNotes(prevState => {
      return prevState.filter((note, index) =>{
        return index !== id;
      })
    })
  }


  function mapThroughNotes(note, index){
    return (
      <Notes key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
    )
  }


  return (
    <div className="App">
      <Header />
      <NotesForm onAdd={addNewNote} />
      {notes.map(mapThroughNotes)}
      <Footer />
    </div>
  );
}

export default App;
