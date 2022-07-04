import {Component} from 'react';

import NoteAddForm from '../note-add-form/note-add-form';
import NoteList from '../note-list/note-list';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import NoteInfo from '../note-info/note-info';

import './app.css';

class App  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [ 
                {title:"Note 1",important:true,id:1,text:"Contrary to popular belief, Lorem Ipsum is not simply random text."},
                {title:"Note 2",important:false,id:2,text:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."},
                {title:"Note 3",important:false,id:3,text:"Sections 1.10.32 and 1.10.33 from end"}
            ]
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
       this.setState(({data}) => {
        return {
            data:data.filter(item => item.id !== id)
        }
       })
    }

    addItem = (title,text) => {
        const newItem = {title,text,important:false,id:this.maxId++};
        this.setState(({data}) => {
            const newArr = [...data,newItem];
            return {
                data:newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <NoteInfo/>
        
                <div className="search-panel">
                    <SearchPanel/> 
                   
                </div>
                    <AppFilter/>  
                    <NoteAddForm
                        onAdd={this.addItem}/>
                    <NoteList 
                        data={this.state.data}
                        onDelete={this.deleteItem}/>
                    
            </div>
        )
    }   
}

export default App;