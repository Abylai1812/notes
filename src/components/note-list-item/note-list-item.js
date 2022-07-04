


import './note-list-item.css';

const NoteListItem = ({title,span,important}) => {
    let classNames = "btn-star btn-sm";
    if ( important ) {
        classNames+= " important";
    }

    return (
        <div className='note'>
            <h5 className="title"> {title} </h5>
            <span>{span}</span>
            <div className="note-footer">
                <small>31.02.2022</small>
                <button type="button"
                            className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                <button type="button"
                        className={classNames}>
                    <i className="fas fa-star"></i>
                </button>
            </div>
    </div>
    )
}

export default NoteListItem;