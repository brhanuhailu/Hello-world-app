import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Greeting from './component/Greeting';
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Greeting/>
            </Router>
        </Provider>
    );
}

export default App;