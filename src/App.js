import './App.css';
import NotesList from "./components/NotesList";
import {useEffect, useState} from "react";
import {v4 as uuid} from 'uuid';


const App = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        localStorage.setItem(
            'notes',
            JSON.stringify(notes)
        );
    }, [notes]);


    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: uuid(),
            text: text,
            date: date.toLocaleDateString()
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);

    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <div className="app-container">
            <NotesList notes={
                notes.filter((note) =>
                    note.text.toLowerCase()
                        .includes(searchText))}
                       handleAddNote={addNote}
                       handleDelete={deleteNote}
                       handleSearch={setSearchText}/>
        </div>
    )
}

export default App;
