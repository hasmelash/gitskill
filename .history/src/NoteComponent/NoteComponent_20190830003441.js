
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class Note extends React.Component{

    
    createNote(){
        let newNote= {
            title: 'New Note', 
            note_description: 'type your note here'
        }
        this.props.addNote(newNote);

    }


    render(){
        return (
            <div class="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
                <h4 class="card-header">Warning card title</h4>
                    <div class="card-body">
                        
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{float: 'right'}}>Delete</button>
                </div>
            </div>
        
        );
    }   
}
export default Note;