import {Component} from 'react';

import './note-list-item.css';

class NoteListItem extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            important:false
        }
    }

    onImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }))
    }


    render() { 
        const {title,text,onDelete} = this.props;
        const {important} = this.state;
         
        let classNames = "btn-star btn-sm";
        if ( important ) {
            classNames+= " important";
        }

        return (
            <div className='note'>
                <h5 className="title"> {title} </h5>
                <span>{text}</span>
                <div className="note-footer">
                    <small>31.02.2022</small>
                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                            <i className="fas fa-trash"></i>
                        </button>
                    <button type="button"
                            className={classNames}
                            onClick={this.onImportant}>
                        <i className="fas fa-star"></i>
                    </button>
                </div>
        </div>
        )

    }
    
}

export default NoteListItem;