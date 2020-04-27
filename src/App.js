import React, { Component } from 'react';
import Products from './components/Products';
import JumboTronComponent from "./components/JumboTronComponent";
class App extends Component {
    render() {
        return (
            <div>
                <JumboTronComponent />
                <Products />

            </div>
        );
    }
}

export default App;
