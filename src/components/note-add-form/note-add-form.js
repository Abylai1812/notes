

import './note-add-form.css';

const NoteAddForm = () => {
    return (
        <div className='note new'>
            <h5 className='title'>
                <textarea placeholder='Note title'></textarea>
            </h5>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note...'>
            </textarea>
            <div className='note-footer'>
                <small>
                    Remaining
                </small>
                <button type="button" className='save'>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NoteAddForm;