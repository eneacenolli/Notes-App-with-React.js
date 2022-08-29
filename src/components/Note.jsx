import "../components/CSS/Note.css"

const Note = ({date, text, id, handleDelete}) => {
    return (
        <div className="note">
            <span className="note-description">{text}</span>
            <div className="note-footer">
                <button className="delete-button" onClick={() => handleDelete(id)}>Delete</button>
                <small>{date}</small>
            </div>
        </div>
    )
}

export default Note;