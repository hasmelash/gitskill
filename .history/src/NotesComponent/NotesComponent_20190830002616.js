
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Note from '../NoteComponent/NoteComponent';
class Notes extends React.Component{

    state = {
        notes: []
    };

    addNote(note){
        this.state.notes.push(note);
    }


    render(){
        return (
            
            <div class="jumbotron">
                <p class="lead">
                    <button class="btn btn-primary btn-lg"  style={{alignSelf: 'center'}}>New Note</button>
                </p>
                <h1 class="display-3">Note it!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"/>
                <Note 
                    addingNote={this.state.addNote}
                
                />
            </div>
        );
    }   
}
export default Notes;
