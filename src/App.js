import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Notes from './Notes';
import NotesForm from './NotesForm';



function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("https://note-taker-json-server.herokuapp.com/notes")
      .then((r) => r.json())
      .then((notes) => setNotes(notes))
      .catch(error => console.log(error))
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
      {/* <NavBar /> */}
      <NotesForm onAdd={addNewNote} />
      {notes.map(mapThroughNotes)}
      <Footer />
    </div>
  );
}

export default App;
