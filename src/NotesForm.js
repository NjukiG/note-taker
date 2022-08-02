import React from "react";

function NotesForm(){
    return (
        <div>
            <form>
                <input type="text" name="title" placeholder="Enter your Title..." />
                <textarea name="content" placeholder="Enter your Content..." />
                <button>Add Note</button>
            </form>
        </div>
    )
}

export default NotesForm;