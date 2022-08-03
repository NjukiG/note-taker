import React, { useState } from "react";

function NotesForm(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChanges(event){
        const {name, value} = event.target;
        setNote(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();

    }
    


    return (
        <div>
            <form>
                <input type="text" name="title" value={note.title} onChange={handleChanges} placeholder="Enter your Title..." />
                <textarea name="content" value={note.content} onChange={handleChanges} placeholder="Enter your Content..." />
                <button onClick={submitNote}>Add Note</button>
            </form>
        </div>
    )
}

export default NotesForm;

