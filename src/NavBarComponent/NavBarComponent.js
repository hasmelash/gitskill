import React from 'react';
import NoteCounter from '../NoteCounterComponent/NoteCounterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 className="navbar-brand" >Navbar</h1>
                <NoteCounter className="container" style={{float: 'right'}}/>
            </nav>
        );
    }
}
export default Navbar;