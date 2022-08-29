import '../components/CSS/AddNewNote.css';
import {useState} from "react";

const AddNewNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const characterRemaining = 200;

    const handleChangeText = (e) => {
        if (characterRemaining - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    };


    const handleSave = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
        }
        setNoteText('')

    }

    return (
        <div className="new-note">

            <h3>Add Your Note</h3>
            <textarea rows="10"
                      cols="20"
                      placeholder="Type your notes..."
                      value={noteText}
                      onChange={handleChangeText}></textarea>
            <div className="save-button">
                <small>{characterRemaining - noteText.length} words</small>
                <button id="save-button" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
};

export default AddNewNote;