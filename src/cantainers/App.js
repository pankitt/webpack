import React, { Component } from 'react';
import reactLogo from '../styles/i/react.svg';
import webpackLogo from '../styles/i/webpack.svg';

class App extends Component{
    render() {
        return (
            <div className="one">
                <h3>
                    Test
                    <img src={reactLogo} alt="logo" />
                    <img src={webpackLogo} alt="logo" />
                </h3>
            </div>
        )
    }
}

export default App;