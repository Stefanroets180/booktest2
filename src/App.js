import React, { Component } from 'react';
// eslint-disable-next-line
import Products from './components/Products';

import Rating from './components/Rating';

class App extends Component {
    render() {
        return (
            <div>
                <Rating rating="1"/>
                <Rating rating="2"/>
                <Rating rating="3"/>
                <Rating rating="4"/>
                <Rating rating="5"/>
            </div>
        );
    }
}

export default App;
