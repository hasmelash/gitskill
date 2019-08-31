import React from 'react';
import './App.css';
import Navbar from './NavBarComponent/NavBarComponent';
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
