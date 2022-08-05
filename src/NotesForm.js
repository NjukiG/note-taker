import React, { useState } from "react";

function NotesForm({onAdd}){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    // useEffect(() => {
    //     fetch("http://localhost:3000/notes")
    //       .then((r) => r.json())
    //       .then((notes) => setNotes(notes))
    //       .catch(error => console.log(error))
    //   }, []);


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
        onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
          
        fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({note}),
            })
            .then(responce => responce.json())
            .then(noteData => console.log(noteData))
            // .catch(error => console.log(error))
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

