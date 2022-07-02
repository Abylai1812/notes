import NoteListItem from '../note-list-item/note-list-item';

import './note-list.css';

const NoteList = () => {
    return (
        <div className="notes-list">
            <NoteListItem/>
            <NoteListItem/>
            <NoteListItem/>
        </div>
    )
}

export default NoteList;