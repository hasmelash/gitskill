
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class Note extends React.Component{

    // constructor(props){
    //     super(props);
    // };

    createNote(){
        let newNote= {
            title: 'New Note', 
            note_description: 'type your note here'
        }
        this.props.addingNote(newNote);

    }

    deleteNote(note){
        this.props.removingNote(note);
    }

    render(){
        return (
            
            <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
                <h4 className="card-header">{this.createNote.title}</h4>
                    <div className="card-body">
                        
                        <p className="card-text">{this.createNote.note_description}</p>
                    </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{float: 'right'}} onClick={this.deleteNote}>Delete</button>
                </div>
            </div>
        
        );
    }   
}
export default Note;