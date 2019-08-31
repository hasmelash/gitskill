
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
                <h4 className="card-header">Warning card title</h4>
                    <div className="card-body">
                        
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{float: 'right'}} onClick={this.deleteNote}>Delete</button>
                </div>
            </div>
        
        );
    }   
}
export default Note;