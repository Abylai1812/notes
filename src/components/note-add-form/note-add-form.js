

import './note-add-form.css';

const NoteAddForm = () => {
    return (
        <div className='note new'>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note...'>
            </textarea>
            <div className='note-footer'>
                <small>
                    Remaining
                </small>
                <button className='save'>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NoteAddForm;