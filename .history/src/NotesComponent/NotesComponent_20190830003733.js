
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Note from '../NoteComponent/NoteComponent';
class Notes extends React.Component{

    state = {
        notes: [
            {title: "Work", note_description: "this is about work"}, 
            {title: "Sport", note_description: "this is about sport"}, 
            {title: "School", note_description: "this is about school"} 
        ]
    };

    addNote(note){
        this.state.notes.push(note);
    }

    removeNote(note){
        this.state.notes.pop(note);
    }


    render(){
        return (
            
            <div class="jumbotron">
                
                <h1 class="display-3">Note it!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p class="lead">
                    <button class="btn btn-primary btn-lg" >New Note</button>
                </p>
                <hr class="my-4"/>
                <Note 
                    addingNote={this.state.addNote}
                
                />
            </div>
        );
    }   
}
export default Notes;
