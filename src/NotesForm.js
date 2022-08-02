import React, { useState } from "react";
import notes from "./notes";

function NotesForm(){

    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    })

    function handleChanges(event){
        const {name, value} = event.target;
        setNewNote(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function submitNote(event){

    }


    return (
        <div>
            <form>
                <input type="text" name="title" value={notes.title} onChange={handleChanges} placeholder="Enter your Title..." />
                <textarea name="content" value={notes.content} onChange={handleChanges} placeholder="Enter your Content..." />
                <button onClick={submitNote}>Add Note</button>
            </form>
        </div>
    )
}

export default NotesForm;