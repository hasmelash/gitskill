
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class Note extends React.Component{
    render(){
        return (
            <div class="card text-white bg-warning mb-3" style={{maxWidth: '20rem'}}>
            <div class="card-header">Header</div>
            <div class="card-body">
                <h4 class="card-title">Warning card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>

            // <div class="modal">
            //     <div class="modal-dialog" role="document">
            //         <div class="modal-content">
            //             <div class="modal-header">
            //                 <h5 class="modal-title">Modal title</h5>
            //                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            //                     <span aria-hidden="true">&times;</span>
            //                 </button>
            //              </div>
            //             <div class="modal-body">
            //                  <p>Modal body text goes here.</p>
            //             </div>
            //             <div class="modal-footer">
            //                 <button type="button" class="btn btn-primary">Save changes</button>
            //                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }   
}
export default Note;