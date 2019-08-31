import React from 'react';
import './App.css';
import Navbar from './NavBarComponent/NavBarComponent';
import Notes from './NotesComponent/NotesComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

;class App extends React.Component {
  render(){
      return (
          <div>
            <Navbar fixed = "top"/>
            <Notes />
          </div>
      );
   }  
}

export default App;
