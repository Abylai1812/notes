


import './note-list-item.css';

const NoteListItem = () => {
    return (
        <div className='note'>
            <span></span>
            <div className='note-footer'>
                <small>31.02.2022</small>
                <button type="button"
                            className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
            </div>
    </div>
    )
}

export default NoteListItem;