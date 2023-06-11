import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreatArea(props){
 const [note, setNote] = useState({
    title:"",
    content:""
 })

 function handleChange(event){
 const { name, value } = event.target;

 setNote(prevNote => {
    return {
        ...prevNote,
        [name]:value
    };
 })
 }

  function submitNote(event){
    //pass back the note to App.jsx
    props.onAdd(note);
    setNote({
        title:"",
        content:""
     });
    event.preventDefault();
   
  }

    return (
        <div>
        <form className="create-note">
            <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
            <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note ..." rows="3"/>
            <Zoom in={true}>
            <Fab onClick={submitNote}><AddIcon /></Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreatArea;