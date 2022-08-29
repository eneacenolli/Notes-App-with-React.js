import '../components/CSS/NoteList.css'
import Note from "./Note";
import AddNewNote from "./AddNewNote";
import SearchNote from "./SearchNote";

const NotesList = ({notes, handleAddNote, handleDelete, handleSearch}) => {
    return (
        <div className="note-list-container">
            <div className="first-part">
                <h1>Notes</h1>
                <SearchNote handleSearch={handleSearch}/>
                <AddNewNote handleAddNote={handleAddNote}/>
            </div>
            <div>
                <div className="note-list-all">
                    {notes.map((note) =>
                        <Note
                            key={note.id}
                            date={note.date}
                            text={note.text}
                            id={note.id}
                            handleDelete={handleDelete}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default NotesList;