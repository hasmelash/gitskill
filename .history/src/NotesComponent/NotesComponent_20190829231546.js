
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Note from '../NoteComponent/NoteComponent';
class Notes extends React.Component{
    render(){
        return (
            
            <div class="jumbotron">
                <p class="lead">
                    <button class="btn btn-primary btn-lg" href="#" >Learn more</button>
                </p>
                <h1 class="display-3">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"/>
                <Note />
            </div>
        );
    }   
}
export default Notes;
