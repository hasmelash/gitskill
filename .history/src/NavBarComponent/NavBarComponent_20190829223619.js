import React from 'react';
import NoteCounter from '../NoteCounterComponent/NoteCounterComponent';
class Navbar extends React.Component{
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 class="navbar-brand" >Navbar</h1>
                <NoteCounter />
            </nav>
        );
    }
}
export default Navbar;