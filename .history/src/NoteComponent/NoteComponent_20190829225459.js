
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class Note extends React.Component{
    render(){
        return (
            
        <div class="card text-white bg-success mb-3" style="max-width: 20rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h4 class="card-title">Success card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        );
    }   
}
export default Notes;