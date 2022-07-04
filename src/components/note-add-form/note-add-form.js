import {Component} from 'react';

import './note-add-form.css';

class NoteAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    render() {
        const {title,text} = this.state;
        
        return (
            <div className='note new'>
                <h5 className='title'>
                    <textarea placeholder='Note title'
                              onChange={this.onValueChange}
                              name="title"
                              value={title}>
                    </textarea>
                </h5>
                <textarea
                    rows='8'
                    cols='10'
                    placeholder='Type to add a note...'
                    onChange={this.onValueChange}
                    name="text"
                    value={text}>
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
}

export default NoteAddForm;