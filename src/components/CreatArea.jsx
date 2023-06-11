import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreatArea(props){
 const [note, setNote] = useState({
    title:"",
    content:""
 })
 const [isEnabled, setIsEnabled] = useState(false);

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
            isEnabled ? <input name="title" onChange={handleChange} value={note.title} placeholder="Title" /> : null
            <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note ..." rows="3"/>
            //zoom, enables zoom in/Animation
            <Zoom in={true}>
            //floating action button/Fab, enables hover color change
            <Fab onClick={submitNote}><AddIcon ></AddIcon></Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreatArea;