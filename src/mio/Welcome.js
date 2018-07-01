import React, { Component } from'react';

class Welcome extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1>Cabecera, {this.props.name}</h1>
                </header>
                <p>
                    tu mensaje
                </p>
            </div>
        );
    }
}

export default Welcome;