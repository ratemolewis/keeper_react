import react from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function noteEntry(note){
    return <Note 
         key={note.id}
         title={note.title}
         content={note.content}
    />
}

function App(){
    return <div>
         <Header />
         <Footer />
         {notes.map(noteEntry)}
    </div>
}

export default App;