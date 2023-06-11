import react, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreatArea from "./CreatArea";

function App(){
    //use state to track the changing array
const [notes, setNotes] =  useState([]);

    function addNote(newNote){
        setNotes(preNote => {
            // set the new note to the array with previous items and return it
           return [...preNote,newNote];
        });
        
        }
function deleteItem(id){
    // console.log("delete me");
setNotes(preNotes=>{
   return preNotes.filter((value, index)=>{
        return index !== id;
    });
})
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
                onDelete={deleteItem}
            />
            
         })}
         <Footer />
        
    </div>
}

export default App;