import react, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreatArea from "./CreatArea";

function App(){
    //use state to track the changing array
const [notes, setNote] =  useState([]);

    function addNote(newNote){
        setNote(preNote => {
            // set the new note to the array with previous items and return it
           return [...preNote,newNote];
        });
        
        }

    return <div>
        <Header />
        <CreatArea
        onAdd={addNote}
         />
         {notes.map((noteItem, index) =>{
            /* each of the new noteItem, return a note component */
            return <Note 
                keys={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
            />
            
         })}
         <Footer />
        
    </div>
}

export default App;