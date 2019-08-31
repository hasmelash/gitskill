
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Note(props){

    // constructor(props){
    //     super(props);
    // };

   let  createNote = ()=>{
        let newNote= {
            title: 'New Note', 
            note_description: 'type your note here'
        }
        this.props.addingNote(newNote);

    }

   let  deleteNote = (note) => {
        this.props.removingNote(note);
    }

    
        return (
            
            <div class="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
                <h4 class="card-header">Warning card title</h4>
                    <div class="card-body">
                        
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{float: 'right'}} onClick={this.deleteNote}>Delete</button>
                </div>
            </div>
        
        );
       
}
export default Note;