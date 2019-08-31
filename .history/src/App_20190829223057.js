import React from 'react';
import './App.css';
import Navbar from './NavBarComponent/NavBarComponent';
import Notes from './NotesComponent/NotesComponent';
;class App extends React.Component {
  render(){
      return (
          <div>
            <Navbar />
            <Notes />
          </div>
      );
   }  
}

export default App;
