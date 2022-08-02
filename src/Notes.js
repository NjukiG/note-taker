import React from "react";

function Notes(props){
    return (
        <div className="note">
            <h2>Title: {props.title}</h2>
            <p>Content: {props.content}</p>
            <button>Delete Note</button>
        </div>
    )
}

export default Notes;