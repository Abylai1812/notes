import NoteAddForm from '../note-add-form/note-add-form';
import NoteList from '../note-list/note-list';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import NoteInfo from '../note-info/note-info';

import './app.css';

function App() {
    const data =  [ 
        {title:"Note 1",important:true,span:"Contrary to popular belief, Lorem Ipsum is not simply random text."},
        {title:"Note 2",important:false, span:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."},
        {title:"Note 3",important:false, span:"Sections 1.10.32 and 1.10.33 from end"}
    ]

    return (
        <div className="app">
            <NoteInfo/>
    
            <div className="search-panel">
                <SearchPanel/> 
               
            </div>
            <AppFilter/>  
                <NoteAddForm/>
                <NoteList data={data}/>
                
        </div>
    )
}

export default App;