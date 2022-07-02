import NoteAddForm from '../note-add-form/note-add-form';
import NoteList from '../note-list/note-list';
import SearchPanel from '../search-panel/search-panel';
import NoteInfo from '../note-info/note-info';

import './app.css';

function App() {
    return (
        <div className="app">
            <NoteInfo/>
    
            <div className="search-panel">
                <SearchPanel/>   
            </div>
                <NoteAddForm/>
                <NoteList/>
                
        </div>
    )
}

export default App;