import NoteListItem from '../note-list-item/note-list-item';

import './note-list.css';

const NoteList = ({data}) => {
    const elements = data.map(item => {
        return (<NoteListItem {...item}/>)
    })
    return (
        <div className="notes-list">
            {elements}
        </div>
    )
}

export default NoteList;