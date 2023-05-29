import React from "react";

function Note(prop){
    return <div className="note">
        <h1>{prop.title}</h1>
        <p>{prop.content}</p>
    </div>
}

export default Note;