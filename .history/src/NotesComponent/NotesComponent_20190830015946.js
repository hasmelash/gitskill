
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Note from '../NoteComponent/NoteComponent';
class Notes extends React.Component{
 
    // constructor(props) {
    //     super(props);
    // };

    state = {
        count : 0,
        notes: [
            {title: "Work", note_description: "this is about work"}, 
            {title: "Sport", note_description: "this is about sport"}, 
            {title: "School", note_description: "this is about school"} 
        ]
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
      }
      
      handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })
      }
    addNote(note){
        this.state.notes.push(note);
    }

    removeNote(note){
        this.state.notes.pop(note);
    }

    onAddNoteButtonClick = () =>{
        this.child.createNote();
    }
    obButton(event){
        this.onAddNoteButtonClick();
        this.handleIncrement();
    }

    listNotes(){

    }

    

    render(){
        return (
            
            <div className="jumbotron">
                
                <h1 className="display-3">Note it!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <div>
          {this.state.count}
        </div>
                <p className="lead">
                    <button className="btn btn-primary btn-lg" onClick={this.handleIncrement}>New Note</button>
                </p>
                <hr className="my-4"/>
                <Note 
                    ref={Ref => this.child=Ref } {...this.props}
                    addingNote={this.addNote}
                    removingNote={this.removeNote}
                />
                <div>
                    {this.state.notes.map((note, index) => (
                    <Note key={index} item={note} />
                    ))}
                </div>
            </div>
        );
    }   
}
export default Notes;
