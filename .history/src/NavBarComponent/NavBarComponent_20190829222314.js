import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 class="navbar-brand" >Navbar</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}
export default Navbar;